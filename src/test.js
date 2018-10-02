import React from 'react';
import  Enzyme, {shallow} from 'enzyme';
import SvgMarks from './components/svg-marks'
import Adapter from 'enzyme-adapter-react-16';
const Todo =  require('./components/todo').default
Enzyme.configure({adapter: new Adapter()});
describe('App testing', () => {
    it('SVG active checking', () => {
    const checkbox = shallow(<SvgMarks active = {0} />);
    expect(checkbox.text()).toBe('');
    checkbox.setProps({ active: !checkbox.props.active });
    expect(checkbox.text()).toBe('X');
})

    it('Removing button testing', () => {
    const CompofButton = shallow(<Todo todo = { {id: 1538122284125, description: "123", status: 0} }/>)
    const Button = CompofButton.find('button');
    const ButtonText = CompofButton.find('button').text();
    expect(ButtonText).toEqual('X')
})

});

