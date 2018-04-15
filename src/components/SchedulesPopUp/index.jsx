import React from 'react'
import { connect } from 'react-redux'
import './style.scss'
import { Button } from '../Button'
import { setNumberOfArtistsToBook } from '../../actions'

export class SchedulesPopUp extends React.Component {
    constructor(){
        super()
        this.state = {
            userInput: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(userInput) {
        console.log(userInput)
        // this gets fired on onChange event too. Check what's happening. Possibly button should be submit and submit from <form> tag
        this.props.setNumberOfArtistsToBook(userInput)
    }

    handleChange(event) {
        this.setState({
            userInput: event.target.value
        })
    }

    render(){
        return(
            <form>
                <input 
                    type="number" 
                    value={this.state.userInput} 
                    onChange={this.handleChange}
                    placeholder='Number of artists to book'
                />
                <Button onClick={this.handleClick(this.state.userInput)}>DRAFT THIS SCHEDULE</Button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    setNumberOfArtistsToBook,
}

export default connect(null, mapDispatchToProps)(SchedulesPopUp)