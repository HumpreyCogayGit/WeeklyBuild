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

            // Create ground characters with falling animation
            for (let i = 0; i < numChars; i++) {
                const char = document.createElement('span');
                char.className = 'ground-char';
                char.textContent = groundChars[i % groundChars.length];
                char.style.left = (i * charSpacing) + 'px';
                char.style.top = '-100px';  // Start above, will fall down
                char.style.opacity = '0';   // Start invisible, will fade in
                groundEl.appendChild(char);

                // Animate each character falling with staggered timing
                const delay = i * 15; // Stagger from left to right
                setTimeout(() => {
                    char.style.transition = 'top 0.3s ease-in, opacity 0.3s ease-in';
                    char.style.top = '0px';      // Fall to ground level
                    char.style.opacity = '0.5';  // Fade in to visible
                }, delay);
            }

            // After ground animation completes, trigger callback
            const totalAnimTime = numChars * 15 + 300;
            setTimeout(() => {
                if (onCompleteRef.current) {
                    onCompleteRef.current();
                }
            }, totalAnimTime);
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
