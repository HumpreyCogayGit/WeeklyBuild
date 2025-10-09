/**
 * Custom Hook: useGroundAnimation
 * Handles the ground character animation that plays on component mount
 * @param {React.RefObject} groundRef - Reference to the ground element
 * @param {React.RefObject} containerRef - Reference to the container element
 * @param {Function} onComplete - Callback function when animation completes
 */
const useGroundAnimation = (groundRef, containerRef, onComplete) => {
    const onCompleteRef = React.useRef(onComplete);

    // Update callback ref without triggering re-run
    React.useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    React.useEffect(() => {
        const groundEl = groundRef.current;
        const container = containerRef.current;

        if (!groundEl || !container) return;

        // Always ensure the ground animation is visible

        const animateGround = () => {
            // Clear any existing content
            groundEl.innerHTML = '';

            // Use the header-content width (1200px max-width) instead of full container
            const headerContent = container.querySelector('.header-content');
            const containerWidth = headerContent ? headerContent.offsetWidth : 1200;
            const charSpacing = 8;
            const numChars = Math.floor(containerWidth / charSpacing);
            const groundChars = ['_', '-', '=', '.', '_', '-'];

            // Create ground characters
            for (let i = 0; i < numChars; i++) {
                const char = document.createElement('span');
                char.className = 'ground-char';
                char.textContent = groundChars[i % groundChars.length];
                char.style.left = (i * charSpacing) + 'px';
                char.style.top = '0px';  // Start at ground level
                char.style.opacity = '0.5';  // Make them visible by default
                groundEl.appendChild(char);
            }

            // Trigger callback immediately since animation is always visible
            if (onCompleteRef.current) {
                onCompleteRef.current();
            }
        };

        // Run animation on mount and ensure it's always visible
        animateGround();

        // Cleanup function
        return () => {
            // Don't clear groundEl to preserve the animation
        };
    }, [groundRef, containerRef]); // Removed onComplete from dependencies
};

// Export for use in components
window.useGroundAnimation = useGroundAnimation;
