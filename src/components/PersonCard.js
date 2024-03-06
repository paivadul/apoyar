import React, { Component } from 'react';


export class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.firstName = props.firstName;
        this.lastName = props.lastName;
        this.age = props.age;
        this.haircolor = props.haircolor;
    }
    
    render() {
        return(
            <div>
                <h1>{this.firstName}, {this.lastName}</h1>
                <p>Age: {this.age}</p>
                <p>Hair color: {this.haircolor}</p>
            </div>
        );
    }
}