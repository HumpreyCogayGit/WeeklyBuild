/**
 * App Component
 * Main application component that orchestrates the layout
 * Manages content visibility state based on animation completion
 */
const App = () => {
    const [contentVisible, setContentVisible] = React.useState(false);

    // Trigger content visibility after animation delay
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setContentVisible(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Header />
            <div id="main-content">
                <NavPane isVisible={contentVisible} />
                <ContentArea isVisible={contentVisible} />
            </div>
        </>
    );
};

// Export for use in main.jsx
window.App = App;
