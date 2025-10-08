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

    // Call custom hooks - they MUST be called unconditionally at top level
    useGroundAnimation(groundRef, containerRef, () => {
        console.log('Ground animation complete');
        if (onAnimationComplete) onAnimationComplete();
    });

    useRabbitAnimation(rabbitRef, containerRef);

    return (
        <div id="container" ref={containerRef}>
            <div className="header-content">
                <div id="header-text">WeeklyBuild</div>
                <div id="ground" ref={groundRef}></div>
                <div id="rabbit" ref={rabbitRef}></div>
            </div>
        </div>
    );
};

// Export for use in App
window.Header = Header;
