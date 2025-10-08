/**
 * App Component
 * Main application component that orchestrates the layout
 * Manages content visibility state and page routing
 */
const App = () => {
    const [contentVisible, setContentVisible] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState('home');

    // Handle animation completion from Header
    const handleAnimationComplete = React.useCallback(() => {
        setContentVisible(true);
    }, []);

    // Handle page navigation
    const handleNavigate = React.useCallback((page) => {
        setCurrentPage(page);
    }, []);

    // Fallback timer in case animation doesn't trigger
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setContentVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    // Render the appropriate page component
    const renderPage = () => {
        switch(currentPage) {
            case 'home':
                return <HomePage isVisible={contentVisible} />;
            case 'projects':
                return <ProjectsPage isVisible={contentVisible} />;
            case 'about':
                return <AboutPage isVisible={contentVisible} />;
            default:
                return <HomePage isVisible={contentVisible} />;
        }
    };

    return (
        <>
            <Header onAnimationComplete={handleAnimationComplete} />
            <div id="main-content">
                <NavPane 
                    isVisible={contentVisible} 
                    currentPage={currentPage}
                    onNavigate={handleNavigate}
                />
                {renderPage()}
            </div>
            <Footer />
        </>
    );
};

// Export for use in main.jsx
window.App = App;
