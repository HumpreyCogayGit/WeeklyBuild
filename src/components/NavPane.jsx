/**
 * NavPane Component
 * Navigation sidebar with interactive menu items
 * Manages active section state and smooth opacity transitions
 * @param {boolean} isVisible - Controls the visibility/opacity of the nav pane
 * @param {string} currentPage - The currently active page
 * @param {Function} onNavigate - Callback to navigate to a different page
 */
const NavPane = ({ isVisible, currentPage, onNavigate }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const navRef = React.useRef(null);

    const handleNavClick = (pageId, e) => {
        e.preventDefault();
        if (onNavigate) {
            onNavigate(pageId);
        }
        // Close mobile menu when navigation happens
        setMobileMenuOpen(false);
        console.log(`Navigating to: ${pageId}`);
    };

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // Close menu when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMobileMenuOpen(false);
            }
        };

        if (mobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mobileMenuOpen]);

    const menuItems = [
        { id: 'home', label: 'Home', href: '#home' },
        { id: 'projects', label: 'Projects', href: '#projects' },
        { id: 'about', label: 'About', href: '#about' }
    ];

    return (
        <nav id="nav-pane" className={isVisible ? 'loaded' : ''} ref={navRef}>
            <button 
                className={`hamburger-menu ${mobileMenuOpen ? 'active' : ''}`} 
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
            >
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
            </button>
            <ul className={mobileMenuOpen ? 'mobile-open' : ''}>
                {menuItems.map(item => (
                    <li key={item.id}>
                        <a 
                            href={item.href} 
                            onClick={(e) => handleNavClick(item.id, e)}
                            style={{ 
                                color: currentPage === item.id ? '#6B8E23' : '#333333',
                                backgroundColor: 'transparent'
                            }}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

// Export for use in App
window.NavPane = NavPane;
