// import { useState } from "react"
import React from "react";

// export default function SignUp(){
//     const [name, setName] = useState('');
//     return <>
//         <h3>Register</h3>
//         <form>
//             <label>Name:</label>
//             <input type="text" name="fullname" />
//         </form>
//     </>
// }

export default class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fullname: '',
            city:'',
            about: '',
            TS: true,
            languages: ['urdu','arabic']
            
        }
        this.handleChange = this.handleChange.bind(this);
    }
    sum(a,b){
        return a+b
    }
    handleChange(event){
        let {name, value, checked, type, selectedOptions} = event.target
        if(type === 'checkbox')
        value = checked
        if(name === 'languages')
            value = Array.from(selectedOptions, option => option.value)
       

        this.setState({[name]: value})
        
    }

    render(){
       return <>
        <p>{JSON.stringify(this.state)}</p>
        <h3>Register</h3>
        <form onSubmit={this.handleSubmit}>
            <label>Name:</label>
            <input type="text" name="fullname" value={this.state.fullname} onChange={this.handleChange} />

            <label>City:</label>
            <input type="text" name="city" value={this.state.city}  onChange={this.handleChange} />

            <label>About Me:</label>
            <textarea name="about" value={this.state.about} onChange={this.handleChange}></textarea>

            <label>Skills:</label>
            <label>TypeScript <input type="checkbox" name="TS" checked={this.state.TS} onChange={this.handleChange} /></label>

            <label>Language(s):</label>
            <select name="languages" value={this.state.languages} onChange={this.handleChange} multiple>
                <option value={'urdu'}>Urdu</option>
                <option value={'english'}>English</option>
                <option value={'arabic'}>Arabic</option>
                <option value={'hindi'}>Hindi</option>
            </select>
            <input type="submit" value={'Save'}/>
        </form>
    </>
    }
}
