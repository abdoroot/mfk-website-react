
const YellowButton = ({ title, ...props }) => {
    return (
        <button className="bg-mfk-yellow text-mfk-blue font-bold px-6 py-3 rounded-md hover:bg-opacity-90 transition" {...props}>
            {title}
        </button>
    );
};

export default YellowButton;