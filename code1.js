import React from 'react';

class ContactForm extends React.Component {
    state = {
        firstName: '',
        age: 14,
        email: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

        console.log(this.state)
    }

    render() {

        return (
            <div>
                <input type="text" name="firstName" onChange={(e)=>this.handleChange(e)}/>
                <input type="text" name="age" onChange={(e)=>this.handleChange(e)}/>
                {this.state.age > 14 ? '' : <input type="text" name="email" onChange={(e) => this.handleChange(e)} />}
            </div>
        )
    }
}

export default ContactForm;
