/**
 * HomePage Component
 * Main landing page with welcome message
 * @param {boolean} isVisible - Controls the visibility/opacity of the page
 */
const HomePage = ({ isVisible }) => {
    return (
        <div className={`page-content ${isVisible ? 'loaded' : ''}`}>
            <h1>Welcome to Weekly Build</h1>
            <p>Hi there! I'm <strong>Humprey</strong>, a passionate <strong>Data Engineer</strong> with a love for all things technology—especially the latest in <strong>AI</strong> and <strong>cloud technologies</strong>. Over the years, I've found that the best way to grow is to continuously challenge yourself and explore new frontiers.</p>
            
            <p>That's why I started <strong>Weekly Build</strong>. This is my personal space to push myself to learn something new every week and share that journey with you. Here, you'll find a mix of content—from hands-on projects and technical deep-dives, to thought-provoking reads and personal reflections. Some posts will be technical, others not so much, but all of them will be part of my ongoing exploration in tech and beyond.</p>
            
            <p>Whether you're here to gain insights, discover new tools, or simply share the excitement of learning, I hope <strong>Weekly Build</strong> inspires you as much as it inspires me.</p>
            
            <p>Let's build, learn, and grow—one week at a time!</p>
        </div>
    );
};

// Export for use in App
window.HomePage = HomePage;
