/**
 * Header Component
 * Displays the WeeklyBuild header with animated ground and hopping rabbit
 * Uses custom hooks for ground and rabbit animations
 * @param {Function} onAnimationComplete - Callback when animation completes
 */
const Header = ({ onAnimationComplete }) => {
    const containerRef = React.useRef(null);
    const groundRef = React.useRef(null);
    const rabbitRef = React.useRef(null);

    // Ground animation with callback when complete
    // Hooks must be called at top level
    React.useEffect(() => {
        if (typeof useGroundAnimation === 'undefined') {
            console.error('useGroundAnimation hook not loaded!');
            return;
        }
        if (typeof useRabbitAnimation === 'undefined') {
            console.error('useRabbitAnimation hook not loaded!');
            return;
        }
    }, []);

    // Call custom hooks
    useGroundAnimation(groundRef, containerRef, () => {
        if (onAnimationComplete) onAnimationComplete();
    });

    useRabbitAnimation(rabbitRef, containerRef);

    return (
        <div id="container" ref={containerRef}>
            <div id="header-text">WeeklyBuild</div>
            <div id="ground" ref={groundRef}></div>
            <div id="rabbit" ref={rabbitRef}></div>
        </div>
    );
};

// Export for use in App
window.Header = Header;
