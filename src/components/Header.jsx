/**
 * Header Component
 * Displays the WeeklyBuild header with animated ground and hopping rabbit
 * Uses custom hooks for ground and rabbit animations
 */
const Header = () => {
    const containerRef = React.useRef(null);
    const groundRef = React.useRef(null);
    const rabbitRef = React.useRef(null);
    const [showContent, setShowContent] = React.useState(false);

    // Ground animation with callback when complete
    useGroundAnimation(groundRef, containerRef, () => {
        setShowContent(true);
    });

    // Rabbit hopping animation
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
