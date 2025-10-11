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
                <p>
                    Latest build:
                    {' '}
                    <a
                        href="./src/projects/pixcular.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        PixCulate
                    </a>
                    — a playful Canvas experiment that turns portraits into animated pixel mosaics in just a few seconds.
                </p>
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
