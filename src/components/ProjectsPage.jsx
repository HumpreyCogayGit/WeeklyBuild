/**
 * ProjectsPage Component
 * Displays portfolio of projects organized by categories
 * @param {boolean} isVisible - Controls the visibility/opacity of the page
 * @param {function} onNavigate - Navigation callback function
 */
const ProjectsPage = ({ isVisible, onNavigate }) => {
    const categories = window.PROJECTS_DATA?.categories || {};
    const featuredProjects = window.ProjectsAPI?.getFeaturedProjects() || [];

    const handleProjectClick = (categoryId, projectSlug) => {
        onNavigate(`project:${categoryId}:${projectSlug}`);
    };

    const getStatusBadge = (status) => {
        const statusMap = {
            'completed': { text: 'Completed', class: 'status-completed' },
            'in-progress': { text: 'In Progress', class: 'status-in-progress' },
            'planned': { text: 'Planned', class: 'status-planned' }
        };
        const statusInfo = statusMap[status] || statusMap['planned'];
        return <span className={`project-status ${statusInfo.class}`}>{statusInfo.text}</span>;
    };

    return (
        <div id="content-area" className={isVisible ? 'loaded' : ''}>
            <h1>Projects</h1>
            
            <p>Welcome to my project showcase! This is where I document my weekly builds, experiments, and technical explorations. Each project represents a learning journey and a step forward in my continuous growth.</p>

            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
                <div className="project-section">
                    <h2>Featured Projects</h2>
                    {featuredProjects.map(project => (
                        <div 
                            key={project.id} 
                            className="featured-project clickable-card"
                            onClick={() => handleProjectClick(project.category, project.slug)}
                        >
                            <div className="project-card-header">
                                <h3>{project.title}</h3>
                                {getStatusBadge(project.status)}
                            </div>
                            {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                            <p>{project.description}</p>
                            <div className="tech-tags">
                                {project.technologies.slice(0, 5).map((tech, i) => (
                                    <span key={i} className="tech-tag-small">{tech}</span>
                                ))}
                            </div>
                            <p className="click-hint">Click to read more →</p>
                        </div>
                    ))}
                </div>
            )}

            {/* Project Categories */}
            <div className="project-section">
                <h2>Project Categories</h2>
                <p>Explore my projects organized by category. Click on any project to see the full details.</p>
                
                {Object.values(categories).map(category => (
                    <div key={category.id} className="category-section">
                        <div className="project-card">
                            <h3>{category.title}</h3>
                            <p>{category.description}</p>
                            
                            {category.projects && category.projects.length > 0 ? (
                                <div className="projects-grid">
                                    {category.projects.map(project => (
                                        <div 
                                            key={project.id}
                                            className="project-mini-card clickable-card"
                                            onClick={() => handleProjectClick(category.id, project.slug)}
                                        >
                                            <div className="project-card-header">
                                                <h4>{project.title}</h4>
                                                {getStatusBadge(project.status)}
                                            </div>
                                            <p className="project-mini-description">{project.description}</p>
                                            <div className="tech-tags">
                                                {project.technologies.slice(0, 3).map((tech, i) => (
                                                    <span key={i} className="tech-tag-small">{tech}</span>
                                                ))}
                                            </div>
                                            <p className="click-hint">Read more →</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="no-projects">Projects coming soon...</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Project Philosophy */}
            <div className="project-section">
                <h2>Project Philosophy</h2>
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
                <h2>What You'll Find</h2>
                <p>Projects are documented with:</p>
                <ul>
                    <li>Problem statement and objectives</li>
                    <li>Technical approach and architecture</li>
                    <li>Implementation details and code</li>
                    <li>Challenges faced and how they were solved</li>
                    <li>Key learnings and takeaways</li>
                    <li>Future improvements and next steps</li>
                </ul>
            </div>

            <div className="project-section">
                <h2>Coming Soon</h2>
                <p>I'm always working on something new! Check back regularly to see:</p>
                <ul>
                    <li>Detailed project case studies</li>
                    <li>Code repositories and documentation</li>
                    <li>Live demos and interactive examples</li>
                    <li>Technical tutorials and guides</li>
                </ul>
            </div>

            <p className="call-to-action">
                Stay tuned for weekly updates as I continue building, learning, and sharing!
            </p>
        </div>
    );
};

// Export for use in App
window.ProjectsPage = ProjectsPage;
