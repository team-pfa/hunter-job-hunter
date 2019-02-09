import React, { Component } from 'react';
import '../css/JobCards.css';

class JobCards extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="jobCards">
                <label>Job title: </label><span>{'------- '}</span><br />
                <label>Company: </label><span>{'------- '}</span><br />
                <label>Job Description: </label><span>{'------ '}</span><br />
                <label>Job Location: </label><span>{'-------'}</span><br />
                <label>URL: </label><span>{'-------'}</span><br />
                <label>Salary range: </label><span>{'------- '}</span><br />
                <label>Note: </label><span>{'------- '}</span><br />   
            </div>
        )
    }
}

export default JobCards;