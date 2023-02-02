import React from 'react';

export class AddCar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            make: '',
            model: '',
            price: ''
        }
    }

    addCar = () => {
        let car = {
            make: this.state.make,
            model: this.state.model,
            price: this.state.price
        };
        this.props.onAdd(car);
    }

    render(){
        return (
            <div>
                <input type="text" id='make' className="make"/>
                <input type="text" id='model' className="model"/>
                <input type="text" id='price' className="price"/>
                <input type="button" value="add car" onClick={this.addCar} />
            </div>
        )
    }
}
export default AddCar