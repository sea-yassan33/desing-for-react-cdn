const { useState } = React;

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border rounded-lg mb-4">
            <div
                className="p-4 bg-gray-200 cursor-pointer"
                onClick={toggleAccordion}
            >
                {title}
            </div>
            {isOpen && <div className="p-4 bg-white">{children}</div>}
        </div>
    );
};

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className="container mx-auto mt-5">
        <h1 className="text-2xl font-bold mb-5">React Accordion with Tailwind</h1>
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
);
