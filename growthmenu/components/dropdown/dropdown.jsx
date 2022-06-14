import React from 'react';
// import PropTypes from 'prop-types';

const Dropdown = ({value, data, placeholder, styleClass, onChange}) => {

    const handleChange = (event) => {
        const {value} = event.target;
        onChange(value);
    };

    return (
        <div>
            <select
                // value={value}
                className={styleClass}
                onChange={handleChange}
                >
                <option value="">{placeholder}</option>
                {data.map((item, key) => (
                    <option
                        key={key}
                        value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    )
};

// Dropdown.propTypes = {
//     value: PropTypes.string,
//     placeholder: PropTypes.string,
//     data: PropTypes.array.isRequired,
//     styleClass: PropTypes.string,
//     onChange: PropTypes.func.isRequired
// };
//
// Dropdown.defaultProps = {
//     value: '',
//     styleClass: '',
//     placeholder: ''
// };

export default Dropdown;