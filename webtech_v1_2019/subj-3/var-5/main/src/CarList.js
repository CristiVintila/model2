import React from 'react';
import AddCar from "./AddCar"

export class CarList extends React.Component {
    constructor(){
        super();
        this.state = {
            cars: []
        };
    }   
    

    render(){
        const addCar = (car)=>{
            if (car!=null){
                this.state.cars.push(car)
            }
        }
        return (
            <div>
                <AddCar onAdd={addCar}/>
            </div>
        )
    }
}