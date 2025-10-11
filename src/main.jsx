/**
 * Main Entry Point
 * Renders the React application into the DOM
 * This is the starting point of the React app
 */

// Wait for all components and hooks to be loaded
function initApp() {
    const requiredModules = [
        'useGroundAnimation',
        'useRabbitAnimation',
        'Header',
        'NavPane',
        'HomePage',
        'ProjectsPage',
        'AboutPage',
        'Footer',
        'App'
    ];

    // Check if all modules are loaded
    const allLoaded = requiredModules.every(module => typeof window[module] !== 'undefined');

    if (!allLoaded) {
        console.log('Waiting for modules to load...');
        const missing = requiredModules.filter(module => typeof window[module] === 'undefined');
        console.log('Missing modules:', missing);
        setTimeout(initApp, 100);
        return;
    }

    console.log('All modules loaded! Initializing React app...');
    const rootElement = document.getElementById('root');
    
    if (rootElement && typeof ReactDOM !== 'undefined' && typeof App !== 'undefined') {
        const root = ReactDOM.createRoot(rootElement);
        root.render(React.createElement(App, null));
        console.log('React app rendered successfully!');
    } else {
        console.error('Failed to initialize React app', {
            rootElement: !!rootElement,
            ReactDOM: typeof ReactDOM !== 'undefined',
            App: typeof App !== 'undefined'
        });
    }
}

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
