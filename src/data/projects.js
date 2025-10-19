/**
 * Project Data Configuration
 * Organized by categories with individual project metadata
 */

const PROJECTS_DATA = {
    categories: {
         'snippets-algorithms': {
            id: 'snippets-algorithms',
            title: 'Snippets & Algorithms',
            description: 'Code snippets, algorithm implementations, and developer utilities.',
            icon: '',
            projects: [
                {
                    id: 'basicpixelcoloration',
                    slug: 'basicpixelcoloration',
                    title: 'Basic Pixel Coloration',
                    subtitle: 'Canvas Color Effects & Image Processing',
                    description: 'A simple interactive demo for toggling image views and applying color effects (invert, grayscale, sepia, high contrast, and custom) using HTML5 Canvas.',
                    status: 'completed',
                    date: '2025-10-19',
                    technologies: ['HTML5', 'JavaScript', 'Canvas API', 'Image Processing'],
                    overview: 'Demonstrates basic pixel-level color manipulation and effect application on images using the Canvas API. Includes toggling between original and processed views.',
                    problem: 'How can we apply real-time color effects to images in the browser with minimal code?',
                    solution: 'Utilizes Canvas ImageData and custom color mapping arrays to implement several color effects and toggling between views.',
                    challenges: [
                        'Efficient pixel manipulation for large images',
                        'Implementing multiple color effects with minimal code',
                        'Ensuring cross-browser compatibility for image loading',
                        'Handling aspect ratio and scaling'
                    ],
                    learnings: [
                        'Canvas ImageData API basics',
                        'Color mapping and effect algorithms',
                        'DOM event handling for UI controls',
                        'Image scaling and rendering'
                    ],
                    futureImprovements: [
                        'Add more color effects (e.g., blur, sharpen)',
                        'Support drag-and-drop for custom images',
                        'Add download/export functionality for processed images',
                        'Improve UI/UX for effect selection'
                    ],
                    github: '',
                    demo: './src/projects/basicpixelcoloration.html',
                    featured: true
                },
                {
                    id: 'pixcular',
                    slug: 'pixcular',
                    title: 'PixCulate',
                    subtitle: 'Dynamic Pixelation Effect with Canvas',
                    description: 'An interactive image pixelation tool that transforms images into animated mosaics of colored circles using HTML5 Canvas.',
                    status: 'completed',
                    date: '2025-10-11',
                    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API', 'Image Processing'],
                    overview: 'PixCulate transforms static images into dynamic pixelated animations using the Canvas API. Users can adjust pixel size and resolution to control the visual effect.',
                    problem: 'How can we create engaging visual effects that demonstrate image processing and canvas manipulation techniques?',
                    solution: 'Built an interactive tool that samples image pixels, converts them to colored circles, and animates their appearance with customizable resolution and size controls.',
                    challenges: [
                        'Implementing efficient pixel sampling and color extraction',
                        'Creating smooth animation with exponential easing',
                        'Optimizing canvas rendering performance for real-time interaction',
                        'Handling different image sizes and aspect ratios'
                    ],
                    learnings: [
                        'Canvas ImageData API for pixel manipulation',
                        'Animation techniques with requestAnimationFrame',
                        'Image processing algorithms and sampling methods',
                        'Real-time parameter adjustment with DOM events'
                    ],
                    futureImprovements: [
                        'Add support for different shapes (squares, hexagons)',
                        'Implement color palette reduction options',
                        'Add export functionality for animated GIFs',
                        'Include drag-and-drop custom image support'
                    ],
                    github: '',
                    demo: './src/projects/pixcular.html',
                    featured: false
                },
                 {
                    id: 'spirograph-generator',
                    slug: 'spirograph-generator',
                    title: 'Spirograph Generator',
                    subtitle: 'HTML5 Canvas + JavaScript',
                    description: 'An interactive spirograph drawing tool that creates beautiful mathematical patterns using hypotrochoid and epitrochoid curves.',
                    status: 'completed',
                    date: '2025-10-08',
                    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
                    overview: 'A fully interactive spirograph generator built with vanilla JavaScript and HTML5 Canvas. Users can adjust parameters in real-time to create unique mathematical art.',
                    problem: 'How can we make mathematical curves accessible and fun to explore for everyone?',
                    solution: 'Created an intuitive web-based tool with real-time parameter controls, animation, and the ability to save creations.',
                    challenges: [
                        'Implementing smooth animation with requestAnimationFrame',
                        'Calculating hypotrochoid and epitrochoid curves accurately',
                        'Creating an intuitive UI for mathematical parameters'
                    ],
                    learnings: [
                        'HTML5 Canvas drawing techniques',
                        'Mathematical curve generation algorithms',
                        'Real-time parameter manipulation and rendering'
                    ],
                    futureImprovements: [
                        'Add color gradients and multi-color patterns',
                        'Implement pattern presets gallery',
                        'Add export to SVG format'
                    ],
                    github: '',
                    demo: './src/projects/spirograph.html',
                    featured: false
                },
                {
                    id: 'unsharp-mask',
                    slug: 'unsharp-mask',
                    title: 'Unsharp Mask Image Sharpening',
                    subtitle: 'Canvas API + Fabric.js',
                    description: 'An interactive image sharpening tool using the unsharp masking technique with Gaussian blur convolution.',
                    status: 'completed',
                    date: '2025-10-10',
                    technologies: ['HTML5', 'JavaScript', 'Canvas API', 'Fabric.js', 'Image Processing'],
                    overview: 'A real-time image sharpening tool that demonstrates the unsharp masking technique. Apply Gaussian blur to create a mask, then enhance edges by combining the original with a high-pass filter.',
                    problem: 'How can we sharpen digital images to enhance edge detail without introducing artifacts or noise?',
                    solution: 'Implemented the classic unsharp masking algorithm using convolution filters and pixel-level manipulation with Canvas API.',
                    challenges: [
                        'Implementing efficient convolution for 7x7 Gaussian kernel',
                        'Handling CORS restrictions for cross-origin image loading',
                        'Optimizing performance for real-time pixel manipulation',
                        'Balancing sharpening strength to avoid over-sharpening artifacts'
                    ],
                    learnings: [
                        'Convolution mathematics and implementation',
                        'Canvas ImageData API for pixel manipulation',
                        'High-pass filtering techniques for edge detection',
                        'Memory management for multiple canvas operations',
                        'Fabric.js for enhanced canvas management'
                    ],
                    futureImprovements: [
                        'Add adjustable sharpening strength slider',
                        'Implement multiple filter kernels (3x3, 5x5, 9x9)',
                        'Add before/after comparison slider',
                        'Support drag-and-drop custom images',
                        'Add export functionality for sharpened images'
                    ],
                    github: '',
                    demo: './src/projects/unsharp-mask.html',
                    featured: false
                },
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
                },
                
                // Add more snippets/algorithm projects here
            ]
        },
        'ai-ml': {
            id: 'ai-ml',
            title: 'AI & Machine Learning',
            description: 'Exploring the latest in artificial intelligence and practical ML applications.',
            icon: '',
            projects: [
                {
                    id: 'sentiment-analysis-api',
                    slug: 'sentiment-analysis-api',
                    title: 'Sentiment Analysis API',
                    subtitle: 'Azure Cognitive Services + Azure Functions + Container Apps',
                    description: 'A RESTful API for sentiment analysis using Azure AI and transformer models.',
                    status: 'planned',
                    date: '2025-10-05',
                    technologies: ['Python', 'Azure Cognitive Services', 'Azure Functions', 'Azure Container Apps', 'Transformers'],
                    overview: 'Building a production-ready sentiment analysis API using Azure AI services and state-of-the-art NLP models.',
                    problem: 'Need a scalable API to analyze sentiment from user-generated content in real-time.',
                    solution: 'Leveraged Azure Cognitive Services for sentiment analysis with custom transformer models deployed on Azure Container Apps for high-performance inference.',
                    challenges: [
                        'Model optimization for faster inference on Azure',
                        'Handling large batch requests efficiently with Azure Functions',
                        'Managing model versions and updates in Azure Container Registry'
                    ],
                    learnings: [
                        'Fine-tuning transformer models for Azure deployment',
                        'Azure Functions best practices for ML APIs',
                        'Azure Container Apps optimization for ML workloads'
                    ],
                    futureImprovements: [
                        'Add multi-language support with Azure Translator',
                        'Implement model caching with Azure Redis Cache',
                        'Add A/B testing framework with Azure App Configuration'
                    ],
                    github: '',
                    demo: '',
                    featured: false
                }
                // Add more AI/ML projects here
            ]
        },
        'data-engineering': {
            id: 'data-engineering',
            title: 'Data Engineering',
            description: 'Building scalable data pipelines, ETL processes, and data infrastructure solutions.',
            icon: '',
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
