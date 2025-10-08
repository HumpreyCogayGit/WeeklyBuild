/**
 * NavPane Component
 * Navigation sidebar with interactive menu items
 * Manages active section state and smooth opacity transitions
 * @param {boolean} isVisible - Controls the visibility/opacity of the nav pane
 */
const NavPane = ({ isVisible }) => {
    const [activeSection, setActiveSection] = React.useState('home');

    const handleNavClick = (section, e) => {
        e.preventDefault();
        setActiveSection(section);
        
        // Could dispatch custom event or call parent callback here
        // for routing or content updates
        console.log(`Navigating to: ${section}`);
    };

    const menuItems = [
        { id: 'home', label: 'Home', href: '#home' },
        { id: 'projects', label: 'Projects', href: '#projects' },
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
                                backgroundColor: activeSection === item.id ? '#e0e0e0' : 'transparent' 
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
