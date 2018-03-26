import React from 'react'
import {Field, reduxForm} from 'redux-form'

let Form = props => {
    const {handleSubmit} = props
    return <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="city">city</label>
            <Field name="city" component="input" type="text" />
        </div>
    </form>
}

Form = reduxForm({
    form: 'input',
})(Form);

export default Form