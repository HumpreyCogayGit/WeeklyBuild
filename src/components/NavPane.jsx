/**
 * NavPane Component
 * Navigation sidebar with interactive menu items
 * Manages active section state and smooth opacity transitions
 * @param {boolean} isVisible - Controls the visibility/opacity of the nav pane
 * @param {string} currentPage - The currently active page
 * @param {Function} onNavigate - Callback to navigate to a different page
 */
const NavPane = ({ isVisible, currentPage, onNavigate }) => {
    const handleNavClick = (pageId, e) => {
        e.preventDefault();
        if (onNavigate) {
            onNavigate(pageId);
        }
        console.log(`Navigating to: ${pageId}`);
    };

    const menuItems = [
        { id: 'home', label: 'Home', href: '#home' },
        { id: 'projects', label: 'Projects', href: '#projects' },
        { id: 'blog', label: 'Blog', href: '#blog' },
        { id: 'about', label: 'About', href: '#about' }
    ];

    return (
        <nav id="nav-pane" className={isVisible ? 'loaded' : ''}>
            <ul>
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
