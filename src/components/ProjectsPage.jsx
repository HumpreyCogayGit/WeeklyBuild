/**
 * ProjectsPage Component
 * Displays portfolio of projects and weekly builds
 * @param {boolean} isVisible - Controls the visibility/opacity of the page
 */
const ProjectsPage = ({ isVisible }) => {
    return (
        <div id="content-area" className={isVisible ? 'loaded' : ''}>
            <h1>Projects</h1>
            
            <p>Welcome to my project showcase! This is where I document my weekly builds, experiments, and technical explorations. Each project represents a learning journey and a step forward in my continuous growth.</p>

            <div className="project-section">
                <h2>🎯 Current Focus</h2>
                <p>Right now, I'm exploring and building projects around:</p>
                <ul>
                    <li>Modern data pipeline architectures with cloud-native technologies</li>
                    <li>AI/ML model deployment and productionization</li>
                    <li>Real-time data processing and streaming analytics</li>
                    <li>Developer tools and automation frameworks</li>
                </ul>
            </div>

            <div className="project-section">
                <h2>📚 Project Categories</h2>
                
                <div className="project-card">
                    <h3>🔧 Data Engineering Projects</h3>
                    <p>Building scalable data pipelines, ETL processes, and data infrastructure solutions.</p>
                    <ul>
                        <li>Serverless data processing architectures</li>
                        <li>Real-time streaming pipelines with Kafka/Kinesis</li>
                        <li>Data warehouse optimization and modeling</li>
                        <li>Automated data quality frameworks</li>
                    </ul>
                </div>

                <div className="project-card">
                    <h3>🤖 AI & Machine Learning</h3>
                    <p>Exploring the latest in artificial intelligence and practical ML applications.</p>
                    <ul>
                        <li>LLM integration and prompt engineering experiments</li>
                        <li>ML model training and optimization</li>
                        <li>AI-powered automation tools</li>
                        <li>Computer vision and NLP projects</li>
                    </ul>
                </div>

                <div className="project-card">
                    <h3>☁️ Cloud & DevOps</h3>
                    <p>Infrastructure as code, containerization, and cloud-native solutions.</p>
                    <ul>
                        <li>Kubernetes deployments and orchestration</li>
                        <li>CI/CD pipeline implementations</li>
                        <li>Infrastructure automation with Terraform</li>
                        <li>Monitoring and observability solutions</li>
                    </ul>
                </div>

                <div className="project-card">
                    <h3>💻 Web Development</h3>
                    <p>Full-stack applications and modern web technologies.</p>
                    <ul>
                        <li>React-based applications (like this site!)</li>
                        <li>API development and microservices</li>
                        <li>Progressive web applications</li>
                        <li>Developer tools and utilities</li>
                    </ul>
                </div>
            </div>

            <div className="project-section">
                <h2>🚀 Featured Projects</h2>
                
                <div className="featured-project">
                    <h3>WeeklyBuild Website</h3>
                    <p><strong>Status:</strong> Live</p>
                    <p>
                        A React-based personal website with animated ASCII art, built following enterprise-level 
                        design patterns. Features include component-based architecture, custom React hooks, 
                        and Vercel deployment.
                    </p>
                    <p><strong>Technologies:</strong> React 18, JavaScript, CSS, Vercel</p>
                </div>
            </div>

            <div className="project-section">
                <h2>📝 Project Philosophy</h2>
                <p>
                    Each project here is more than just code—it's a learning experience. I believe in:
                </p>
                <ul>
                    <li><strong>Learning by Doing:</strong> Building real projects to understand concepts deeply</li>
                    <li><strong>Open Exploration:</strong> Not everything needs to be perfect; experimentation is key</li>
                    <li><strong>Documentation:</strong> Sharing the journey, including challenges and solutions</li>
                    <li><strong>Continuous Improvement:</strong> Iterating and refining based on learnings</li>
                </ul>
            </div>

            <div className="project-section">
                <h2>🎓 What You'll Find</h2>
                <p>Projects are documented with:</p>
                <ul>
                    <li>✅ Problem statement and objectives</li>
                    <li>✅ Technical approach and architecture</li>
                    <li>✅ Implementation details and code</li>
                    <li>✅ Challenges faced and how they were solved</li>
                    <li>✅ Key learnings and takeaways</li>
                    <li>✅ Future improvements and next steps</li>
                </ul>
            </div>

            <div className="project-section">
                <h2>🔜 Coming Soon</h2>
                <p>I'm always working on something new! Check back regularly to see:</p>
                <ul>
                    <li>Detailed project case studies</li>
                    <li>Code repositories and documentation</li>
                    <li>Live demos and interactive examples</li>
                    <li>Technical tutorials and guides</li>
                </ul>
            </div>

            <p className="call-to-action">
                Stay tuned for weekly updates as I continue building, learning, and sharing! 🚀
            </p>
        </div>
    );
};

// Export for use in App
window.ProjectsPage = ProjectsPage;
