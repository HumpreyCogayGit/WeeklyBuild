/**
 * ContentArea Component
 * Main content display area with project information
 * Includes fade-in animation controlled by isVisible prop
 * @param {boolean} isVisible - Controls the visibility/opacity of the content area
 */
const ContentArea = ({ isVisible }) => {
    return (
        <div id="content-area" className={isVisible ? 'loaded' : ''}>
            <h1>Welcome to WeeklyBuild</h1>
            <p>This is your content area. Add your content here!</p>
            <p>Now built with React.js! 🎉</p>
            
            <h2>About This Project</h2>
            <p>
                This page has been restructured to use React.js following enterprise-level 
                design patterns while maintaining all the original animations and functionality. 
                The ASCII rabbit continues to hop across the header, and the ground animation 
                still plays on page load.
            </p>
            
            <h3>Enterprise Architecture</h3>
            <p>The project now follows industry best practices with:</p>
            <ul>
                <li><strong>Separation of Concerns:</strong> Components, hooks, styles, and utilities in dedicated folders</li>
                <li><strong>Custom Hooks:</strong> <code>useGroundAnimation</code> and <code>useRabbitAnimation</code> for reusable logic</li>
                <li><strong>Component-Based Architecture:</strong> Modular, maintainable, and testable components</li>
                <li><strong>Public/Src Structure:</strong> Standard React project organization</li>
            </ul>
            
            <h3>Folder Structure</h3>
            <ul>
                <li><code>public/</code> - Static assets and entry HTML file</li>
                <li><code>src/components/</code> - React components (Header, NavPane, ContentArea)</li>
                <li><code>src/hooks/</code> - Custom React hooks for animation logic</li>
                <li><code>src/styles/</code> - CSS stylesheets</li>
                <li><code>src/utils/</code> - Utility functions (ready for future expansion)</li>
            </ul>

            <h3>React Components</h3>
            <ul>
                <li><strong>Header:</strong> Contains the title, ground animation, and rabbit animation</li>
                <li><strong>NavPane:</strong> Navigation sidebar with interactive links and state management</li>
                <li><strong>ContentArea:</strong> Main content display area (this section)</li>
                <li><strong>App:</strong> Main application component that orchestrates everything</li>
            </ul>

            <h3>Custom Hooks</h3>
            <ul>
                <li><strong>useGroundAnimation:</strong> Manages the falling ground character animation</li>
                <li><strong>useRabbitAnimation:</strong> Handles the hopping rabbit with physics-based movement</li>
            </ul>

            <p>
                This architecture makes it easy to extend functionality, add new features, 
                and maintain the codebase as your project grows!
            </p>
        </div>
    );
};

// Export for use in App
window.ContentArea = ContentArea;
