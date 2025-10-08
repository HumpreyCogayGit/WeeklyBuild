/**
 * Project Data Configuration
 * Organized by categories with individual project metadata
 */

const PROJECTS_DATA = {
    categories: {
        'data-engineering': {
            id: 'data-engineering',
            title: 'Data Engineering',
            description: 'Building scalable data pipelines, ETL processes, and data infrastructure solutions.',
            icon: '🔧',
            projects: [
                {
                    id: 'serverless-etl-pipeline',
                    slug: 'serverless-etl-pipeline',
                    title: 'Serverless ETL Pipeline',
                    subtitle: 'Azure Functions + Data Lake + Data Factory',
                    description: 'A fully serverless ETL pipeline for processing large-scale data using Azure services.',
                    status: 'planned',
                    date: '2025-10-01',
                    technologies: ['Azure Functions', 'Azure Data Lake', 'Azure Data Factory', 'Python', 'Azure SDK'],
                    overview: 'Built a serverless ETL pipeline that processes millions of records daily without managing infrastructure.',
                    problem: 'Need to process large volumes of data efficiently without maintaining servers.',
                    solution: 'Implemented event-driven architecture using Azure Functions triggers, Data Lake for storage, and Data Factory for orchestration.',
                    challenges: [
                        'Managing Azure Functions timeout limits for large files',
                        'Optimizing Data Lake read/write operations',
                        'Implementing proper error handling and retry logic'
                    ],
                    learnings: [
                        'Understanding serverless architecture patterns on Azure',
                        'Azure Data Lake event notification best practices',
                        'Cost optimization strategies for Azure Functions executions'
                    ],
                    futureImprovements: [
                        'Add real-time monitoring dashboard with Azure Monitor',
                        'Implement data quality checks with Azure Purview',
                        'Add support for streaming data with Azure Event Hubs'
                    ],
                    github: '',
                    demo: '',
                    featured: false
                }
                // Add more data engineering projects here
            ]
        },
        'ai-ml': {
            id: 'ai-ml',
            title: 'AI & Machine Learning',
            description: 'Exploring the latest in artificial intelligence and practical ML applications.',
            icon: '🤖',
            projects: [
                {
                    id: 'sentiment-analysis-api',
                    slug: 'sentiment-analysis-api',
                    title: 'Sentiment Analysis API',
                    subtitle: 'NLP + FastAPI + Docker',
                    description: 'A RESTful API for sentiment analysis using transformer models.',
                    status: 'planned',
                    date: '2025-10-05',
                    technologies: ['Python', 'FastAPI', 'Transformers', 'Docker', 'Hugging Face'],
                    overview: 'Building a production-ready sentiment analysis API using state-of-the-art NLP models.',
                    problem: 'Need a scalable API to analyze sentiment from user-generated content in real-time.',
                    solution: 'Used pre-trained BERT models with FastAPI for high-performance inference, containerized with Docker.',
                    challenges: [
                        'Model optimization for faster inference',
                        'Handling large batch requests efficiently',
                        'Managing model versions and updates'
                    ],
                    learnings: [
                        'Fine-tuning transformer models',
                        'FastAPI best practices for ML APIs',
                        'Docker optimization for ML workloads'
                    ],
                    futureImprovements: [
                        'Add multi-language support',
                        'Implement model caching',
                        'Add A/B testing framework'
                    ],
                    github: '',
                    demo: '',
                    featured: false
                }
                // Add more AI/ML projects here
            ]
        },
        'snippets-algorithms': {
            id: 'snippets-algorithms',
            title: 'Snippets & Algorithms',
            description: 'Code snippets, algorithm implementations, and developer utilities.',
            icon: '📝',
            projects: [
                {
                    id: 'python-design-patterns',
                    slug: 'python-design-patterns',
                    title: 'Python Design Patterns',
                    subtitle: 'Common Design Patterns in Python',
                    description: 'A collection of commonly used design patterns implemented in Python with examples.',
                    status: 'planned',
                    date: '2025-09-15',
                    technologies: ['Python', 'OOP', 'Design Patterns'],
                    overview: 'Comprehensive implementation of classic design patterns with real-world examples.',
                    problem: 'Understanding and applying design patterns in Python projects.',
                    solution: 'Created clear, documented examples of Singleton, Factory, Observer, Strategy, and more.',
                    challenges: [
                        'Balancing simplicity with completeness',
                        'Providing practical use cases',
                        'Python-specific implementation details'
                    ],
                    learnings: [
                        'When to use each design pattern',
                        'Python-specific pattern implementations',
                        'Trade-offs between patterns'
                    ],
                    futureImprovements: [
                        'Add more advanced patterns',
                        'Include anti-patterns section',
                        'Add interactive examples'
                    ],
                    github: '',
                    demo: '',
                    featured: false
                },
                {
                    id: 'beauty-of-math',
                    slug: 'beauty-of-math',
                    title: 'The Beauty of Math',
                    subtitle: 'Mathematical Concepts & Visualizations',
                    description: 'Exploring elegant mathematical concepts through code, visualizations, and interactive examples.',
                    status: 'planned',
                    date: '2025-10-08',
                    technologies: ['Python', 'NumPy', 'Matplotlib', 'Manim', 'JavaScript'],
                    overview: 'A collection showcasing the elegance and beauty of mathematics through code implementations and visual demonstrations.',
                    problem: 'Mathematics is often seen as abstract and difficult. How can we make it more accessible and visually engaging?',
                    solution: 'Created interactive visualizations and code examples that demonstrate mathematical concepts in intuitive, beautiful ways.',
                    challenges: [
                        'Making complex concepts accessible to all skill levels',
                        'Creating smooth, engaging animations',
                        'Balancing mathematical rigor with simplicity'
                    ],
                    learnings: [
                        'Mathematical visualization techniques',
                        'Animation libraries and frameworks',
                        'The deep connections between mathematics and nature'
                    ],
                    futureImprovements: [
                        'Add interactive web-based demos',
                        'Include more topics like fractals and golden ratio',
                        'Create educational tutorials for each concept'
                    ],
                    github: '',
                    demo: '',
                    featured: false
                }
                // Add more snippets/algorithm projects here
            ]
        }
    }
};

// Helper functions
const getAllProjects = () => {
    const allProjects = [];
    Object.values(PROJECTS_DATA.categories).forEach(category => {
        category.projects.forEach(project => {
            allProjects.push({
                ...project,
                category: category.id,
                categoryTitle: category.title
            });
        });
    });
    return allProjects;
};

const getFeaturedProjects = () => {
    return getAllProjects().filter(project => project.featured);
};

const getProjectBySlug = (categoryId, projectSlug) => {
    const category = PROJECTS_DATA.categories[categoryId];
    if (!category) return null;
    return category.projects.find(p => p.slug === projectSlug);
};

const getProjectsByCategory = (categoryId) => {
    const category = PROJECTS_DATA.categories[categoryId];
    return category ? category.projects : [];
};

const getCategoryById = (categoryId) => {
    return PROJECTS_DATA.categories[categoryId] || null;
};

// Export to window for CDN-based React
window.PROJECTS_DATA = PROJECTS_DATA;
window.ProjectsAPI = {
    getAllProjects,
    getFeaturedProjects,
    getProjectBySlug,
    getProjectsByCategory,
    getCategoryById
};
