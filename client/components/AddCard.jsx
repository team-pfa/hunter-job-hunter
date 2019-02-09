import React, { Component } from 'react';

class AddCard extends Component {
    constructor(props){
        super(props)

        this.state = {
            jobTitle :'',
            company:'',
            jobDescription:'',
            jobLocation:'',
            url:'',
            salaryRange:'',
            note:''
        }
        this.updateState = this.updateState.bind(this);
        this.addCard = this.addCard.bind(this);
        this.deleteCard = this.deleteCard.bind(this);
    }

    updateState(event) {
        const input = {
            [event.target.name]: event.target.value
        }
       this.setState(input);
    }

    addCard() {
        let data = this.state
        console.log(data)
        fetch('/newjobcard', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
       })
        .then(res => {
        res.json()
        })
        .then(res => console.log(res))

    }

    deleteCard(Card) {
        fetch('/deleteCards', {
            method: 'DELETE'
          })
          .then(response => response.json());
        }

    render() {
        return(
            <div>
                Job title:
                <input type = "text" name = "jobTitle" value = {this.state.jobTitle}
                onChange = {this.updateState} /> <br/>
                Company:
                <input type = "text" name = "company" value = {this.state.company}
                onChange = {this.updateState} /> <br/>
                Job Description:
                <input type = "text" name = "jobDescription" value = {this.state.jobDescription}
                onChange = {this.updateState} /> <br/>
                Job Location:
                <input type = "text" name = "jobLocation" value = {this.state.jobLocation}
                onChange = {this.updateState} /> <br/>
                URL:
                <input type = "text" name = "url" value = {this.state.url}
                onChange = {this.updateState} /> <br/>
                Salary range:
                <input type = "text" name = "salaryRange" value = {this.state.salaryRange}
                onChange = {this.updateState} /> <br/>
                Note:
                <input type = "text" name = "note" value = {this.state.note}
                onChange = {this.updateState} /> <br/>
                <button onClick={this.addCard}>Add Card</button>
                <button onClick={this.deleteCard}>Delete Card</button>
            </div>
        )
    }
}

export default AddCard;
