import React from 'react';

const ColorButton = ({ name, action }) => {
    return (
        <button
            className="h6 p-3 text-white bg-primary rounded-lg capitalize hover:bg-primary-light hover:text-gray-100 transition duration-300"
            onClick={action}
        >
            {name}
        </button>
    );
}

export default ColorButton;
