/**
 * Custom Hook: useRabbitAnimation
 * Handles the hopping rabbit animation with vertical jumping and horizontal movement
 * @param {React.RefObject} rabbitRef - Reference to the rabbit element
 * @param {React.RefObject} containerRef - Reference to the container element
 */
const useRabbitAnimation = (rabbitRef, containerRef) => {
    const intervalIdRef = React.useRef(null);

    React.useEffect(() => {
        const rabbitEl = rabbitRef.current;
        const container = containerRef.current;

        if (!rabbitEl || !container) return;

        // Don't start a new animation if one is already running
        if (intervalIdRef.current) return;

        // Rabbit animation frames
        const rabbit1 = `   (\\___/)
   (='.'=)
   (")_(")`;

        const rabbit2 = `   (\\___/)
   (o'.'o)
   (")_(")`;

        const rabbit3 = `   (\\___/)
   (-'.'-)
   (")_(")`;

        const rabbitFrames = [rabbit1, rabbit2, rabbit3, rabbit2];

        // Animation state
        let position = 400;  // Start from right side to avoid WeeklyBuild text overlap
        let frameIndex = 0;
        let direction = 1;
        let jumpPhase = 0;
        let isGrounded = true;
        let groundTimer = 0;

        const animate = () => {
            if (!rabbitEl) return;

            // Update frame only when moving
            if (!isGrounded || groundTimer === 0) {
                rabbitEl.textContent = rabbitFrames[frameIndex];
                frameIndex = (frameIndex + 1) % rabbitFrames.length;
            }

            // Handle ground pause
            if (isGrounded) {
                groundTimer++;
                if (groundTimer > 6) {
                    isGrounded = false;
                    groundTimer = 0;
                    jumpPhase = 0;
                }
            } else {
                // Update jump phase for vertical movement
                jumpPhase += 0.5;

                // Calculate vertical offset with proper easing
                const jumpHeight = 70;
                const jumpDuration = Math.PI;

                let verticalOffset = 0;
                if (jumpPhase < jumpDuration) {
                    const t = jumpPhase / jumpDuration;

                    let easedT;
                    if (t < 0.4) {
                        const t2 = t / 0.4;
                        easedT = 1 - Math.pow(1 - t2, 2);
                        easedT = easedT * 0.5;
                    } else {
                        const t2 = (t - 0.4) / 0.6;
                        easedT = 0.5 + (Math.pow(t2, 2) * 0.5);
                    }

                    verticalOffset = jumpHeight * Math.sin(easedT * Math.PI);
                } else {
                    verticalOffset = 0;
                    isGrounded = true;
                }

                rabbitEl.style.bottom = (30 + verticalOffset) + 'px';
            }

            // Horizontal movement
            if (!isGrounded) {
                position += direction * 4;
            }

            // Use the header-content width (800px max-width) instead of full container
            const headerContent = container.querySelector('.header-content');
            const containerWidth = headerContent ? headerContent.offsetWidth : 800;
            const rabbitWidth = 80;

            // Change direction at boundaries
            if (position >= containerWidth - rabbitWidth - 40) {
                direction = -1;
            } else if (position <= 200) {  // Keep rabbit away from WeeklyBuild text
                direction = 1;
            }

            rabbitEl.style.left = position + 'px';
            rabbitEl.style.transform = `scaleX(${direction})`;
        };

        // Start animation interval
        intervalIdRef.current = setInterval(animate, 150);

        // Cleanup function
        return () => {
            if (intervalIdRef.current) {
                clearInterval(intervalIdRef.current);
                intervalIdRef.current = null;
            }
        };
    }, [rabbitRef, containerRef]);
};

// Export for use in components
window.useRabbitAnimation = useRabbitAnimation;
