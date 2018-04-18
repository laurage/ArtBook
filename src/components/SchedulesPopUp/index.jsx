import React from 'react'
import { connect } from 'react-redux'
import './style.scss'
import { Button } from '../Button'
import { setNumberOfArtistsToBook } from '../../actions'
import Input from '../Input'

class SchedulesPopUp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      this.props.setNumberOfArtistsToBook(this.state.value)
      event.preventDefault();
    }
  
    render() {
      return (
          <Input 
                onSubmit={this.handleSubmit}
                className="schedules-popup__input"
                type="number"
                value={this.state.value} 
                onChange={this.handleChange}
                placeholder="Number of artists to book"
                required
                submitValue="DRAFT THIS NUMBER"
            /> 
      )
    }
}

const mapDispatchToProps = {
    setNumberOfArtistsToBook,
}

export default connect(null, mapDispatchToProps)(SchedulesPopUp)