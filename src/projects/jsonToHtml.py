import sys
import json
import requests
import time # Import the timing module
from typing import Optional, Dict, Any, Tuple

# --- Configuration ---
OLLAMA_API_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "gemma4"


def load_json_data(file_path: str) -> Optional[Dict]:
    """Loads and parses JSON data from the specified file path."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        print(f"[INFO] Successfully loaded JSON data from: {file_path}")
        return data
    except FileNotFoundError:
        print(f"[ERROR] Error: The file was not found at path: {file_path}")
        sys.exit(1)
    except json.JSONDecodeError:
        print(f"[ERROR] Error: Failed to decode JSON. Please check the JSON syntax in {file_path}.")
        sys.exit(1)


def estimate_tokens(text: str, estimated_ratio: float = 0.9) -> int:
    """
    Estimates token count based on character length.
    LLMs typically use ~3 characters per token on average. We use a ratio for better approximation.
    """
    if not text:
        return 0
    # Approximation: (Character Count / Characters Per Token) * Ratio adjustment
    return max(1, int((len(text) / estimated_ratio)))


def generate_html_from_json(data: Dict, model: str) -> Optional[Tuple[str, float, int, int]]:
    """
    Sends the data and instructions to Ollama, measures time/tokens, and returns results.

    Returns: (HTML Content, Elapsed Time, Input Tokens, Output Tokens)
    """
    json_string = json.dumps(data, indent=2)

    # System Prompt Engineering
    prompt = f"""
    You are a professional web developer tasked with generating clean, modern, and semantically correct HTML from raw JSON data.

    INSTRUCTIONS:
    1. Structure the content using appropriate HTML tags (<h1> for titles, <p> for paragraphs, <ul>/<li> for lists, etc.).
    2. Use basic inline CSS or a single internal <style> tag to ensure the output is presentable and readable (e.g., centering, padding). Do not use external stylesheets.
    3. The entire output MUST only be the HTML code block itself. DO NOT include any introductory text, explanations, or markdown fences (like ```html) outside of the actual code.

    RAW JSON DATA TO CONVERT:
    ---
    {json_string}
    ---

    Please generate the complete, single-file HTML structure now.
    """
    
    # --- Timing Start ---
    start_time = time.monotonic()
    print(f"\n[INFO] Calling Ollama API (Model: {model})... This may take a moment.")


    payload = {
        "model": model,
        "prompt": prompt,
        "stream": False 
    }

    try:
        response = requests.post(OLLAMA_API_URL, json=payload)
        response.raise_for_status()
        
        result = response.json()
        generated_html = result['response'].strip()
        
        end_time = time.monotonic()

    except requests.exceptions.ConnectionError:
        print("\n[FATAL ERROR] Could not connect to Ollama.")
        print("Please ensure Ollama is running on http://localhost:11434/")
        sys.exit(1)
    except requests.exceptions.RequestException as e:
        print(f"\n[FATAL ERROR] An API request error occurred: {e}")
        sys.exit(1)

    # --- Metrics Calculation ---
    end_time = time.monotonic()
    elapsed_time = end_time - start_time

    # Estimate tokens
    input_tokens = estimate_tokens(prompt)
    output_tokens = estimate_tokens(generated_html)


    return generated_html, elapsed_time, input_tokens, output_tokens


def summarize_metrics(time_taken: float, input_tokens: int, output_tokens: int):
    """Calculates and prints the final performance summary."""
    total_tokens = input_tokens + output_tokens
    if time_taken > 0:
        token_speed = total_tokens / time_taken
    else:
        token_speed = float('inf')

    print("\n" + "="*60)
    print("GENERATION METRICS SUMMARY ")
    print("="*60)
    print(f"Total Time Taken: {time_taken:.2f} seconds")
    print("-" * 30)
    print(f"Input Tokens (Prompt): {input_tokens:,}")
    print(f"Output Tokens (HTML):  {output_tokens:,}")
    print(f"Total Processed:        {total_tokens:,} tokens")
    print("-" * 30)
    print(f"Estimated Speed:       {token_speed:.2f} tokens/second")
    print("="*60)


def save_html_file(content: str, original_json_path: str):
    """Saves the generated HTML content to a new .html file."""
    base_name = original_json_path.rsplit('.', 1)[0]
    output_filename = f"{base_name}_output.html"
    
    try:
        with open(output_filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"[SUCCESS] HTML file successfully saved to: {output_filename}")

    except IOError as e:
        print(f"\n[CRITICAL ERROR] Failed to write output file: {e}")


if __name__ == "__main__":
    # Check arguments
    if len(sys.argv) < 2:
        print("Usage: python json_to_html_generator.py <path/to/your/data.json>")
        sys.exit(1)

    json_file_path = sys.argv[1]

    # 1. Load Data
    data_payload = load_json_data(json_file_path)

    # 2. Generate HTML using Ollama and measure metrics
    results = generate_html_from_json(data_payload, MODEL_NAME)

    if results:
        generated_html, elapsed_time, input_tokens, output_tokens = results

        # 3. Summarize Performance
        summarize_metrics(elapsed_time, input_tokens, output_tokens)

        # 4. Save Output
        save_html_file(generated_html, json_file_path)