const { useState } = React;

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border rounded-lg mb-4">
            <div className="p-4 bg-gray-200 cursor-pointer" onClick={toggleAccordion}>
                {title}
            </div>
            {isOpen && <div className="p-4 bg-white">{children}</div>}
        </div>
    );
};

function App(){
    const styles = {
        baseCont: 'container mx-auto mt-5',
        originH1: 'text-2xl mb-5',
    }

    return(
    <div className={`${styles.baseCont}`}>
        <h1 className={`${styles.originH1} font-bold`}>React for cdn</h1>
        <Accordion title="Header 1">
            <p>Content 1</p>
            <Accordion title="Nested Header 1">
                <p>Nested Content 1</p>
            </Accordion>
        </Accordion>
        <Accordion title="Header 2">
            <p>Content 2</p>
        </Accordion>
    </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
