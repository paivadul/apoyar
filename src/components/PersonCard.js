import React, { useState } from 'react';

const PersonCard = props => {
    const [age, setAge] = useState(props.age);

    const handleClick = () => {
        setAge(age + 1);
    }

    return(
        <div>
            <h1>{props.firstName}, {props.lastName}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {props.haircolor}</p>

            <button onClick={handleClick} >Cumpleaños de {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard;

// export class PersonCard extends Component {
//     constructor(props) {
//         super(props);
//         this.firstName = props.firstName;
//         this.lastName = props.lastName;
//         this.age = props.age;
//         this.haircolor = props.haircolor;
//     }

//     handleClick = () => {
//         this.age++; // Incrementar la edad
//         this.forceUpdate(); // Forzar la actualización del componente
//     }
    
//     render() {
//         return(
//             <div>
//                 <h1>{this.firstName}, {this.lastName}</h1>
//                 <p>Age: {this.age}</p>
//                 <p>Hair color: {this.haircolor}</p>

//                 <button onClick={this.handleClick} >Cumpleaños de {this.firstName} {this.lastName}</button>
//             </div>
//         );
//     }
// }