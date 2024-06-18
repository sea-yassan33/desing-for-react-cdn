const { useState } = React;

function App() {
    const styles = {
        columnFlex: 'flex flex-col',
        bottunBase: 'py-1.5 px-4 transition-colors border font-medium rounded-lg disabled:opacity-50 mb-4',
        bottunColorGray: 'bg-gray-50 active:bg-gray-200 border-gray-200 text-gray-900 hover:bg-gray-100',
        bottunColorGreen: 'bg-green-600 active:bg-green-800 border-green-700 text-white hover:bg-green-700',

    };

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
                <ul className= {styles.columnFlex}>
                    <button className={`${styles.bottunBase} ${styles.bottunColorGreen}`} onClick={() => setSelectedMenu('Home')}>Home</button>
                    <button className={`${styles.bottunBase} ${styles.bottunColorGray}`} onClick={() => setSelectedMenu('About')}>About</button>
                    <button className={`${styles.bottunBase} ${styles.bottunColorGray} w-1/2`} onClick={() => setSelectedMenu('Contact')}>Contact</button>
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