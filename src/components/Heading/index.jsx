import React from 'react'
import './style.scss'

import Input from '../Input'

class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
    this.setState({value: event.target.value});
    }

    render(){
        return(
        <h1>
            <Input 
                className="heading__input"
                type="text"
                value={this.state.value} 
                onChange={this.handleChange}
                placeholder="Undefined Task"
            /> 
        </h1>
        )
    }

}

export default Heading