/**
 * HomePage Component
 * Main landing page with welcome message
 * @param {boolean} isVisible - Controls the visibility/opacity of the page
 *
 * To add a cover image to any entry, set the `image` field to the full image URL.
 * For Substack posts: copy the cover image URL from your Substack post and paste it here.
 */
const HomePage = ({ isVisible }) => {
    const posts = [
        {
            date: 'April 6, 2026',
            title: 'The Path from Prompting to AI Engineering',
            url: 'https://manghumps.substack.com/p/the-path-from-prompting-to-ai-engineering',
            summary: 'My first Substack post! A deep-dive into local AI inference covering the full engineering stack: quantization tradeoffs (FP16 vs Q4_K_M), the GGUF file format, sampling strategy design (temperature, Top-P, Min-P), KV cache memory management, performance metrics (tokens per second), model selection, and a hands-on guide to building and running llama.cpp on Windows.',
            image: null,
            type: 'substack'
        },
        {
            date: 'March 8, 2026',
            title: 'Face Detection',
            url: './src/projects/facedetection.html',
            summary: 'A Python-based real-time face detection tool leveraging TensorFlow and OpenCV, capable of identifying and tracking multiple faces in images and video streams.',
            image: null,
            type: 'project'
        },
        {
            date: 'January 15, 2026',
            title: 'AI Image Detection',
            url: './src/projects/aiimagedetection.html',
            summary: 'A detailed Python tool for detecting AI-generated images using Benford\'s Law, DCT analysis, color entropy, and block variance heuristics.',
            image: null,
            type: 'project'
        },
        {
            date: 'Dec 15, 2025',
            title: 'Image Effects Studio',
            url: './src/projects/imageEffects.html',
            summary: 'Image filtering tool featuring 18+ effects including edge detection (Sobel, Prewitt, Laplacian), artistic filters (Oil Paint, Cartoon), blur effects (Gaussian, Motion Blur), and creative transformations (Halftone, Glitch, Posterize) with real-time parameter adjustment.',
            image: null,
            type: 'project'
        },
        {
            date: 'Nov 13, 2025',
            title: 'Sobel Filter Side-by-Side',
            url: './src/projects/sobelfilter.html',
            summary: 'Interactive Sobel edge detection demo showing original and filtered canvases side-by-side with adjustable vertical and horizontal strengths.',
            image: null,
            type: 'project'
        },
        {
            date: 'Oct 30, 2025',
            title: 'Basic Image Adjustments',
            url: './src/projects/basicimageadjustments.html',
            summary: 'Experiment with image pixel adjustments using basic algorithms for brightness, contrast, saturation, grayscale, sepia effects.',
            image: null,
            type: 'project'
        },
        {
            date: 'Oct 20, 2025',
            title: 'Basic Pixel Coloration',
            url: './src/projects/basicpixelcoloration.html',
            summary: 'A simple interactive demo that lets you upload any image and instantly apply color effects (invert, grayscale, sepia, high contrast, and more) using HTML5 Canvas. Try it with your own photos!',
            image: null,
            type: 'project'
        },
        {
            date: 'Oct 16, 2025',
            title: 'PixCulate',
            url: './src/projects/pixcular.html',
            summary: 'A playful Canvas experiment that turns portraits into animated pixel mosaics in just a few seconds.',
            image: null,
            type: 'project'
        },
        {
            date: 'Oct 10, 2025',
            title: 'Unsharp Mask Image Sharpening',
            url: './src/projects/unsharpmask.html',
            summary: 'Implementing Gaussian blur and unsharp masking techniques to sharpen images interactively using HTML5 Canvas.',
            image: null,
            type: 'project'
        },
        {
            date: 'Oct 8, 2025',
            title: 'Spirograph Generator',
            url: './src/projects/spirograph.html',
            summary: 'Creating a digital spirograph tool that generates beautiful mathematical patterns with real-time controls and animation.',
            image: null,
            type: 'project'
        }
    ];

    return (
        <div className={`page-content ${isVisible ? 'loaded' : ''}`}>

            <p>Welcome to my WeeklyBuild! Here you'll find my thoughts, insights, and learnings from my weekly builds and explorations in technology, AI, and Data Engineering.</p>

            <p>I share my journey of continuous learning, technical discoveries, and personal reflections on the ever-evolving world of technology. Each post represents a step forward in my quest to build something new every week.</p>

            <section className="recent-posts">
                <h2>Recent Posts</h2>
                {posts.map((post, i) => (
                    <div key={i} className="post-row">
                        <div className="post-row-meta">
                            <span className={`post-type-pill ${post.type}`}>{post.type === 'substack' ? 'Substack' : 'Project'}</span>
                            <span className="post-row-date">{post.date}</span>
                        </div>
                        <a className="post-row-title" href={post.url} target="_blank" rel="noopener noreferrer">{post.title}</a>
                        <p className="post-row-summary">{post.summary}</p>
                    </div>
                ))}
            </section>

            <section className="what-to-expect">
                <h2>What to Expect</h2>
                <ul>
                    <li><strong>Technical Deep-Dives:</strong> Detailed explorations of new technologies, frameworks, and tools</li>
                    <li><strong>Weekly Build Updates:</strong> Progress reports and learnings from my weekly projects</li>
                    <li><strong>AI &amp; Data Engineering:</strong> Insights from my professional work and personal experiments</li>
                    <li><strong>Learning Reflections:</strong> Thoughts on continuous learning and skill development</li>
                    <li><strong>Industry Insights:</strong> Observations on trends in technology and software development</li>
                </ul>
            </section>
        </div>
    );
};

// Export for use in App
window.HomePage = HomePage;
