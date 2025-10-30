/**
 * HomePage Component
 * Main landing page with welcome message
 * @param {boolean} isVisible - Controls the visibility/opacity of the page
 */
const HomePage = ({ isVisible }) => {
    return (
        <div className={`page-content ${isVisible ? 'loaded' : ''}`}>
            
            <p>Welcome to my WeeklyBuild! Here you'll find my thoughts, insights, and learnings from my weekly builds and explorations in technology, AI, and Data Engineering.</p>

            <p>I share my journey of continuous learning, technical discoveries, and personal reflections on the ever-evolving world of technology. Each post represents a step forward in my quest to build something new every week.</p>


                        <section className="recent-posts">
                                <h2>Recent Posts</h2>
                                <div style={{ marginBottom: '1.5em' }}>
                                    <strong>Oct 30, 2025:</strong> &nbsp;
                                    <a
                                        href="./src/projects/basicimageadjustments.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Basic Image Adjustments
                                    </a>
                                    — Experiment with image pixel adjustments using basic algorithms for brightness, contrast, saturation, grayscale, sepia effects.
                                </div>
                                <div style={{ marginBottom: '1.5em' }}>
                                    <strong>Oct 20, 2025:</strong> &nbsp;
                                    <a
                                        href="./src/projects/basicpixelcoloration.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Basic Pixel Coloration
                                    </a>
                                    — a simple interactive demo that lets you upload any image and instantly apply color effects (invert, grayscale, sepia, high contrast, and more) using HTML5 Canvas. Try it with your own photos!
                                </div>
                                <div style={{ marginBottom: '1.5em' }}>
                                    <strong>Oct 16, 2025:</strong> &nbsp;
                                    <a
                                        href="./src/projects/pixcular.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        PixCulate
                                    </a>
                                    — a playful Canvas experiment that turns portraits into animated pixel mosaics in just a few seconds.
                                </div>
                                <div style={{ marginBottom: '1.5em' }}>
                                    <strong>Oct 10, 2025:</strong> &nbsp;
                                    <a
                                        href="./src/projects/unsharpmask.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Unsharp Mask Image Sharpening
                                    </a>
                                    — Interactive tool for sharpening images using the unsharp masking technique and Canvas. Adjust sharpness and see edge enhancement in real time.
                                </div>
                                <div style={{ marginBottom: '1.5em' }}>
                                    <strong>Oct 8, 2025:</strong> &nbsp;
                                    <a
                                        href="./src/projects/spirograph.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Spirograph Generator
                                    </a>
                                    — Create beautiful mathematical patterns and spirograph art interactively with real-time parameter controls and animation.
                                </div>
                                <p><em>Blog posts coming soon! I'm currently working on some exciting content to share with you.</em></p>
                                <p>
                                        In the meantime, check out my{' '}
                                        <a href="#projects" style={{ color: '#6B8E23', textDecoration: 'none' }}>Projects</a>
                                        {' '}to see what I've been building.
                                </p>
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
