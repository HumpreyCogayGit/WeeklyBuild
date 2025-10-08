/**
 * Footer Component
 * Displays version information and build timestamp
 * Helps verify when the page was last updated
 */
const Footer = () => {
    const version = '1.0.0';
    const buildDate = new Date().toISOString();
    const buildNumber = Date.now().toString().slice(-6);
    
    // Format date for display
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    };

    return (
        <footer id="app-footer">
            <div className="footer-content">
                <div className="footer-left">
                    <span className="footer-version">v{version}</span>
                    <span className="footer-separator">•</span>
                    <span className="footer-build">Build #{buildNumber}</span>
                </div>
                <div className="footer-right">
                    <span className="footer-timestamp">
                        Last Updated: {formatDate(buildDate)}
                    </span>
                </div>
            </div>
        </footer>
    );
};

// Export for use in App
window.Footer = Footer;
