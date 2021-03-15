import React, {Component} from 'react';

class Personcard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageCount: this.props.age
        };
    }



    render(){
        const plusone = ()=>{
            this.setState({ageCount: this.state.ageCount+1 })
        }


        return <div className="cardItem">
            <h1>{this.props.itemName}</h1>
            <p>Age: {this.state.ageCount}</p>
            <p>Hair Color: {this.props.hair}</p>
            <button onClick={()=>alert("BIRTHDAY")}>Birthday Button</button>

        </div>
    }
}
export default Personcard;

