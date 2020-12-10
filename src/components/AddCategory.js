import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ( { setCategory } ) => {

    const [InputValue, setInputValue] = useState('')
    const handleInputChange = ( e ) => {

        setInputValue( e.target.value )
    }
    
    const handleSubmit = e => {
        e.preventDefault()

        if( InputValue.length > 2){
            setCategory( e => [ InputValue, ...e ] )
            setInputValue('')
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                type="text"
                value={ InputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}

