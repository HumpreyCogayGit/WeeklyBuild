/**
 * AboutPage Component
 * Displays detailed information about Humprey and Weekly Build
 * @param {boolean} isVisible - Controls the visibility/opacity of the page
 */
const AboutPage = ({ isVisible }) => {
    return (
        <div id="content-area" className={isVisible ? 'loaded' : ''}>
            <h1>About Me</h1>
            
            <div className="about-section">
                <h2>👋 Hi, I'm Humprey!</h2>
                <p>
                    I'm a passionate <strong>Data Engineer</strong> with a deep love for technology, innovation, 
                    and continuous learning. My journey in tech has been driven by curiosity and the belief that 
                    the best way to grow is by constantly challenging yourself to explore new frontiers.
                </p>
            </div>

            <div className="about-section">
                <h2>💼 What I Do</h2>
                <p>
                    As a Data Engineer, I work at the intersection of data, cloud technologies, and AI. 
                    I specialize in:
                </p>
                <ul>
                    <li><strong>Data Pipeline Architecture:</strong> Building scalable, efficient data processing systems</li>
                    <li><strong>Cloud Technologies:</strong> Leveraging AWS, Azure, and GCP for modern data solutions</li>
                    <li><strong>AI & Machine Learning:</strong> Exploring the latest in artificial intelligence and its practical applications</li>
                    <li><strong>Data Infrastructure:</strong> Designing robust systems that power data-driven decision making</li>
                </ul>
            </div>

            <div className="about-section">
                <h2>🚀 The Weekly Build Philosophy</h2>
                <p>
                    <strong>Weekly Build</strong> isn't just a blog—it's a commitment to continuous growth and learning. 
                    Every week, I challenge myself to learn something new, build something interesting, or explore 
                    an emerging technology.
                </p>
                <p>
                    This space is where I document that journey. You'll find:
                </p>
                <ul>
                    <li><strong>Hands-on Projects:</strong> Real-world implementations and experiments</li>
                    <li><strong>Technical Deep-Dives:</strong> Detailed explorations of technologies and concepts</li>
                    <li><strong>Learning Reflections:</strong> Insights gained from new experiences</li>
                    <li><strong>Industry Insights:</strong> Thoughts on trends in data engineering and AI</li>
                </ul>
            </div>

            <div className="about-section">
                <h2>🎯 My Mission</h2>
                <p>
                    My goal with Weekly Build is twofold:
                </p>
                <ol>
                    <li><strong>Personal Growth:</strong> Push myself to learn and build consistently</li>
                    <li><strong>Knowledge Sharing:</strong> Help others on their tech journey by sharing what I learn</li>
                </ol>
                <p>
                    Whether you're a fellow data engineer, an AI enthusiast, or someone just starting their tech journey, 
                    I hope you find something valuable here.
                </p>
            </div>

            <div className="about-section">
                <h2>💡 What Drives Me</h2>
                <p>
                    I believe that technology should be accessible, and learning should be a shared experience. 
                    The tech community has given me so much, and Weekly Build is my way of giving back. 
                    Every project, every article, every line of code shared here is part of that mission.
                </p>
                <p>
                    I'm particularly passionate about:
                </p>
                <ul>
                    <li>🤖 The democratization of AI and machine learning</li>
                    <li>☁️ Cloud-native architectures and modern data platforms</li>
                    <li>📊 Making data more accessible and actionable</li>
                    <li>🌱 Sustainable and ethical technology practices</li>
                    <li>🎓 Mentoring and knowledge sharing in the tech community</li>
                </ul>
            </div>

            <div className="about-section">
                <h2>🛠️ Technologies I Work With</h2>
                <div className="tech-stack">
                    <div className="tech-category">
                        <h3>Data & Analytics</h3>
                        <p>Python, SQL, Apache Spark, Kafka, Airflow, dbt</p>
                    </div>
                    <div className="tech-category">
                        <h3>Cloud Platforms</h3>
                        <p>AWS (Redshift, S3, Lambda, Glue), Azure, GCP</p>
                    </div>
                    <div className="tech-category">
                        <h3>AI & ML</h3>
                        <p>TensorFlow, PyTorch, Scikit-learn, Hugging Face, OpenAI</p>
                    </div>
                    <div className="tech-category">
                        <h3>Development</h3>
                        <p>React, Node.js, Docker, Kubernetes, Git, CI/CD</p>
                    </div>
                </div>
            </div>

            <div className="about-section">
                <h2>📫 Let's Connect</h2>
                <p>
                    I'm always excited to connect with fellow tech enthusiasts, data engineers, and lifelong learners. 
                    Whether you have questions about a project, want to collaborate, or just want to chat about tech:
                </p>
                <ul>
                    <li><strong>GitHub:</strong> Check out my projects and contributions</li>
                    <li><strong>LinkedIn:</strong> Let's connect professionally</li>
                    <li><strong>Email:</strong> Drop me a message anytime</li>
                </ul>
                <p>
                    Thanks for stopping by! Let's build, learn, and grow together—one week at a time! 🚀
                </p>
            </div>
        </div>
    );
};

// Export for use in App
window.AboutPage = AboutPage;
