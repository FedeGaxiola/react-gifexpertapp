import React, {useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (element) => {
        setInputValue(element.target.value);
    }

    const handleSubmit = (element) => {
        element.preventDefault();

        if(inputValue.trim().length > 2 ){
            setCategories(categories => [inputValue, ...categories]);
            setInputValue('');
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={inputValue}
                onChange={handleInputChange}
                placeholder='Categoría'
            />

            <button>Agregar</button>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}