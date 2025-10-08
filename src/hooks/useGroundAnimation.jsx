/**
 * Custom Hook: useGroundAnimation
 * Handles the ground character animation that plays on component mount
 * @param {React.RefObject} groundRef - Reference to the ground element
 * @param {React.RefObject} containerRef - Reference to the container element
 * @param {Function} onComplete - Callback function when animation completes
 */
const useGroundAnimation = (groundRef, containerRef, onComplete) => {
    const hasAnimatedRef = React.useRef(false);
    const onCompleteRef = React.useRef(onComplete);

    // Update callback ref without triggering re-run
    React.useEffect(() => {
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    React.useEffect(() => {
        const groundEl = groundRef.current;
        const container = containerRef.current;

        if (!groundEl || !container || hasAnimatedRef.current) return;

        // Mark as animated to prevent re-runs
        hasAnimatedRef.current = true;

        const animateGround = () => {
            // Clear any existing content
            groundEl.innerHTML = '';

            const containerWidth = container.offsetWidth;
            const charSpacing = 8;
            const numChars = Math.floor(containerWidth / charSpacing);
            const groundChars = ['_', '-', '=', '.', '_', '-'];

            // Create ground characters
            for (let i = 0; i < numChars; i++) {
                const char = document.createElement('span');
                char.className = 'ground-char';
                char.textContent = groundChars[i % groundChars.length];
                char.style.left = (i * charSpacing) + 'px';
                char.style.top = '-100px';
                groundEl.appendChild(char);

                // Animate each character falling
                const delay = i * 15; // Stagger from left to right
                setTimeout(() => {
                    char.style.transition = 'top 0.3s ease-in, opacity 0.3s ease-in';
                    char.style.top = '0px';
                    char.style.opacity = '0.5';
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

        animateGround();

        // Cleanup function - but don't clear the hasAnimated flag
        return () => {
            // Don't clear groundEl to preserve the animation
            // The hasAnimatedRef ensures it only runs once
        };
    }, [groundRef, containerRef]); // Removed onComplete from dependencies
};

// Export for use in components
window.useGroundAnimation = useGroundAnimation;
