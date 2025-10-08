/**
 * ProjectDetailPage Component
 * Displays detailed information about a specific project
 * @param {boolean} isVisible - Controls the visibility/opacity of the page
 * @param {string} categoryId - The category ID (data-engineering, ai-ml, snippets-algorithms)
 * @param {string} projectSlug - The project slug/ID
 * @param {function} onNavigate - Navigation callback function
 */
const ProjectDetailPage = ({ isVisible, categoryId, projectSlug, onNavigate }) => {
    const project = window.ProjectsAPI.getProjectBySlug(categoryId, projectSlug);
    const category = window.ProjectsAPI.getCategoryById(categoryId);

    // Handle case where project is not found
    if (!project || !category) {
        return (
            <div id="content-area" className={isVisible ? 'loaded' : ''}>
                <h1>Project Not Found</h1>
                <p>Sorry, the project you're looking for doesn't exist.</p>
                <button 
                    onClick={() => onNavigate('projects')}
                    className="back-button"
                >
                    ← Back to Projects
                </button>
            </div>
        );
    }

    const getStatusBadge = (status) => {
        const statusMap = {
            'completed': { text: 'Completed', class: 'status-completed' },
            'in-progress': { text: 'In Progress', class: 'status-in-progress' },
            'planned': { text: 'Planned', class: 'status-planned' }
        };
        const statusInfo = statusMap[status] || statusMap['planned'];
        return <span className={`project-status ${statusInfo.class}`}>{statusInfo.text}</span>;
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    };

    return (
        <div id="content-area" className={isVisible ? 'loaded' : ''}>
            {/* Breadcrumb Navigation */}
            <div className="breadcrumb">
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('projects'); }}>
                    Projects
                </a>
                <span className="breadcrumb-separator">/</span>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('projects'); }}>
                    {category.title}
                </a>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">{project.title}</span>
            </div>

            {/* Project Header */}
            <div className="project-detail-header">
                <div className="project-title-section">
                    <h1>{project.title}</h1>
                    {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                    <div className="project-meta">
                        {getStatusBadge(project.status)}
                        <span className="project-date">{formatDate(project.date)}</span>
                        <span className="project-category-badge">{category.title}</span>
                    </div>
                </div>
            </div>

            {/* Embedded Demo - Show if demo exists and is internal */}
            {project.demo && project.demo.startsWith('./') && (
                <div className="project-section">
                    <div className="demo-header">
                        <h2>Interactive Demo</h2>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="demo-link-button">
                            Open Full Screen →
                        </a>
                    </div>
                    <div className="demo-container">
                        <iframe 
                            src={project.demo} 
                            title={`${project.title} Demo`}
                            className="project-demo-iframe"
                        />
                    </div>
                </div>
            )}

            {/* Project Description */}
            <div className="project-section">
                <p className="project-description">{project.description}</p>
            </div>

            {/* Technologies Used */}
            <div className="project-section">
                <h2>Technologies Used</h2>
                <div className="tech-tags">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                    ))}
                </div>
            </div>

            {/* Overview */}
            {project.overview && (
                <div className="project-section">
                    <h2>Overview</h2>
                    <p>{project.overview}</p>
                </div>
            )}

            {/* Problem Statement */}
            {project.problem && (
                <div className="project-section">
                    <h2>Problem Statement</h2>
                    <div className="highlight-box problem-box">
                        <p>{project.problem}</p>
                    </div>
                </div>
            )}

            {/* Solution */}
            {project.solution && (
                <div className="project-section">
                    <h2>Solution</h2>
                    <div className="highlight-box solution-box">
                        <p>{project.solution}</p>
                    </div>
                </div>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
                <div className="project-section">
                    <h2>Challenges Faced</h2>
                    <ul className="project-list">
                        {project.challenges.map((challenge, index) => (
                            <li key={index}>{challenge}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Key Learnings */}
            {project.learnings && project.learnings.length > 0 && (
                <div className="project-section">
                    <h2>Key Learnings</h2>
                    <ul className="project-list">
                        {project.learnings.map((learning, index) => (
                            <li key={index}>{learning}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Future Improvements */}
            {project.futureImprovements && project.futureImprovements.length > 0 && (
                <div className="project-section">
                    <h2>Future Improvements</h2>
                    <ul className="project-list">
                        {project.futureImprovements.map((improvement, index) => (
                            <li key={index}>{improvement}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Links */}
            {(project.github || project.demo) && (
                <div className="project-section">
                    <h2>Links</h2>
                    <div className="project-links">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link-button">
                                View on GitHub →
                            </a>
                        )}
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link-button">
                                Live Demo →
                            </a>
                        )}
                    </div>
                </div>
            )}

            {/* Back Button */}
            <div className="project-section">
                <button 
                    onClick={() => onNavigate('projects')}
                    className="back-button"
                >
                    ← Back to Projects
                </button>
            </div>
        </div>
    );
};

// Export for use in App
window.ProjectDetailPage = ProjectDetailPage;
