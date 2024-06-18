const { useState } = React;

function App() {
    const [selectedMenu, setSelectedMenu] = useState('Home');

    const renderContent = () => {
        switch (selectedMenu) {
            case 'Home':
                return (
                <div>Home Content</div>
            );
            case 'About':
                return (
                <div>About Content</div>
            );
            case 'Contact':
                return (
                <div>Contact Content</div>
            );
            default:
                return (
                <div>Home Content</div>
            );
        }
    };

    return (
        <div className="flex w-full h-screen">
            <div className="w-1/4 bg-green-200 text-white p-4">
                <ul>
                    <li className="mb-4 cursor-pointer" onClick={() => setSelectedMenu('Home')}>Home</li>
                    <li className="mb-4 cursor-pointer" onClick={() => setSelectedMenu('About')}>About</li>
                    <li className="mb-4 cursor-pointer" onClick={() => setSelectedMenu('Contact')}>Contact</li>
                </ul>
            </div>
            <div className="w-3/4 p-4">
                {renderContent()}
            </div>
        </div>
    );
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)