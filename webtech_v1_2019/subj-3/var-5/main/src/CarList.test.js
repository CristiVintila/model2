import React from 'react';
import ReactDOM from 'react-dom';


import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { CarList } from './CarList';
import { AddCar } from './AddCar';

configure({ adapter: new Adapter() });

it ('AddCar component should be rendered', () => {
    const component = mount(<CarList />);
    expect(component.find(AddCar).length).toEqual(1);
})
it('AddCar should contain 3 inputs', () => {
    const component = mount(<AddCar />);
    const makeInput = component.find('#make').first();
    const modelInput = component.find('#model').first();
    const priceInput = component.find('#price').first();
    expect(makeInput.length + modelInput.length + priceInput.length).toEqual(3);
})

it('AddCar should contain a button to trigger addCar method', () => {
    const component = mount(<AddCar />);
    let button = component.find('[value="add car"]').first();
    expect(button.length).toEqual(1);
})

it ('AddCar should contain props onAdd', () => {
    const component = mount(<CarList />);
    let addForm = component.find(AddCar).first();
    expect(typeof addForm.props().onAdd).toEqual('function');
})

it ('The added car should be validated', () => {
    const component = mount(<CarList />);
    let makeInput = component.find('#make').first();
    makeInput.simulate('focus');
    makeInput.simulate('change', {target: { name: 'make', value: 'Audi'}})

    let modelInput = component.find('#model').first();
    modelInput.simulate('focus');
    modelInput.simulate('change', {
        target: {
            name: 'model',
            value: 'A6'
        }
    })

    let priceInput = component.find('#price').first()
    priceInput.simulate('focus');
    priceInput.simulate('change', {
        target: {
            name: 'price',
            value: '12000'
        }
    })

    let addBtn = component.find('[value="add car"]').first()
    addBtn.simulate('click');
    expect(component.state().cars.length).toEqual(1);
})