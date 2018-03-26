import React from 'react'
import Form from '../components/form'

class FormContainer extends React.Component{
    submit = city =>{
        console.log(city)
    }
    render(){
        return <Form onSubmit={this.submit} />
    }
}