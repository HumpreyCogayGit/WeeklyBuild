/**
 * BlogPage Component
 * Blog listing page with summaries of all blog entries
 * @param {boolean} isVisible - Controls the visibility/opacity of the page
 */
const BlogPage = ({ isVisible }) => {
    return (
        <div className={`page-content ${isVisible ? 'loaded' : ''}`}>
            <h1>Blog</h1>
            <p>Welcome to my blog! Here you'll find my thoughts, insights, and learnings from my weekly builds and explorations in technology, AI, and software engineering.</p>
            
            <div className="blog-intro">
                <p>I share my journey of continuous learning, technical discoveries, and personal reflections on the ever-evolving world of technology. Each post represents a step forward in my quest to build something new every week.</p>
            </div>

            <div className="blog-entries">
                <h2>Recent Posts</h2>
                <div className="coming-soon">
                    <p><em>Blog posts coming soon! I'm currently working on some exciting content to share with you.</em></p>
                    <p>In the meantime, check out my <a href="#projects" style={{ color: '#6B8E23', textDecoration: 'none' }}>Projects</a> to see what I've been building.</p>
                </div>
            </div>

            <div className="blog-categories">
                <h2>What to Expect</h2>
                <ul className="category-list">
                    <li><strong>Technical Deep-Dives:</strong> Detailed explorations of new technologies, frameworks, and tools</li>
                    <li><strong>Weekly Build Updates:</strong> Progress reports and learnings from my weekly projects</li>
                    <li><strong>AI & Data Engineering:</strong> Insights from my professional work and personal experiments</li>
                    <li><strong>Learning Reflections:</strong> Thoughts on continuous learning and skill development</li>
                    <li><strong>Industry Insights:</strong> Observations on trends in technology and software development</li>
                </ul>
            </div>
        </div>
    );
};

// Export for use in App
window.BlogPage = BlogPage;