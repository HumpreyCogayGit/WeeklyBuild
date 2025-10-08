// Header Component with Rabbit Animation
const Header = () => {
    const containerRef = React.useRef(null);
    const groundRef = React.useRef(null);
    const rabbitRef = React.useRef(null);
    const [showContent, setShowContent] = React.useState(false);

    React.useEffect(() => {
        const groundEl = groundRef.current;
        const container = containerRef.current;
        const rabbitEl = rabbitRef.current;

        if (!groundEl || !container || !rabbitEl) return;

        // Ground animation
        const animateGround = () => {
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
                const delay = i * 15;
                setTimeout(() => {
                    char.style.transition = 'top 0.3s ease-in, opacity 0.3s ease-in';
                    char.style.top = '0px';
                    char.style.opacity = '0.5';
                }, delay);
            }

            // After ground animation completes, show rest of page
            const totalAnimTime = numChars * 15 + 300;
            setTimeout(() => {
                setShowContent(true);
            }, totalAnimTime);
        };

        // Rabbit animation
        const startRabbitAnimation = () => {
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

            let position = 300;
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

                if (!isGrounded) {
                    position += direction * 4;
                }

                const containerWidth = container.offsetWidth;
                const rabbitWidth = 80;

                if (position >= containerWidth - rabbitWidth - 40) {
                    direction = -1;
                } else if (position <= 300) {
                    direction = 1;
                }

                rabbitEl.style.left = position + 'px';
                rabbitEl.style.transform = `scaleX(${direction})`;
            };

            const intervalId = setInterval(animate, 150);
            return intervalId;
        };

        // Start animations
        animateGround();
        const rabbitInterval = startRabbitAnimation();

        // Cleanup
        return () => {
            if (rabbitInterval) clearInterval(rabbitInterval);
        };
    }, []);

    return (
        <div id="container" ref={containerRef}>
            <div id="header-text">WeeklyBuild</div>
            <div id="ground" ref={groundRef}></div>
            <div id="rabbit" ref={rabbitRef}></div>
        </div>
    );
};

// Navigation Pane Component
const NavPane = ({ isVisible }) => {
    const [activeSection, setActiveSection] = React.useState('home');

    const handleNavClick = (section, e) => {
        e.preventDefault();
        setActiveSection(section);
    };

    return (
        <nav id="nav-pane" className={isVisible ? 'loaded' : ''}>
            <ul>
                <li>
                    <a 
                        href="#home" 
                        onClick={(e) => handleNavClick('home', e)}
                        style={{ backgroundColor: activeSection === 'home' ? '#e0e0e0' : 'transparent' }}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a 
                        href="#projects" 
                        onClick={(e) => handleNavClick('projects', e)}
                        style={{ backgroundColor: activeSection === 'projects' ? '#e0e0e0' : 'transparent' }}
                    >
                        Projects
                    </a>
                </li>
                <li>
                    <a 
                        href="#about" 
                        onClick={(e) => handleNavClick('about', e)}
                        style={{ backgroundColor: activeSection === 'about' ? '#e0e0e0' : 'transparent' }}
                    >
                        About
                    </a>
                </li>
            </ul>
        </nav>
    );
};

// Content Area Component
const ContentArea = ({ isVisible }) => {
    return (
        <div id="content-area" className={isVisible ? 'loaded' : ''}>
            <h1>Welcome to WeeklyBuild</h1>
            <p>This is your content area. Add your content here!</p>
            <p>Now built with React.js! 🎉</p>
            
            <h2>About This Project</h2>
            <p>
                This page has been restructured to use React.js while maintaining all the 
                original animations and functionality. The ASCII rabbit continues to hop 
                across the header, and the ground animation still plays on page load.
            </p>
            
            <h3>React Components</h3>
            <ul>
                <li><strong>Header:</strong> Contains the title, ground animation, and rabbit animation</li>
                <li><strong>NavPane:</strong> Navigation sidebar with interactive links</li>
                <li><strong>ContentArea:</strong> Main content display area</li>
                <li><strong>App:</strong> Main application component that orchestrates everything</li>
            </ul>
        </div>
    );
};

// Main App Component
const App = () => {
    const [contentVisible, setContentVisible] = React.useState(false);

    // Trigger content visibility after animation
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
