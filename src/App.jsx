/**
 * App Component
 * Main application component that orchestrates the layout
 * Manages content visibility state based on animation completion
 */
const App = () => {
    const [contentVisible, setContentVisible] = React.useState(false);

    // Handle animation completion from Header
    const handleAnimationComplete = React.useCallback(() => {
        setContentVisible(true);
    }, []);

    // Fallback timer in case animation doesn't trigger
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setContentVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header onAnimationComplete={handleAnimationComplete} />
            <div id="main-content">
                <NavPane isVisible={contentVisible} />
                <ContentArea isVisible={contentVisible} />
            </div>
        </>
    );
};

// Export for use in main.jsx
window.App = App;
