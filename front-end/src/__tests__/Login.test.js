import Login from '../../src/components/Login'
import * as React from 'react';
import { shallow } from 'enzyme';

test('test login form', () => {

    const onSelectAnimalMock = jest.fn();
    const props = {
        img: 'dat image',
        alt: 'Arg arg!',
        description: 'I love dat',
        onSelectAnimal: () => onSelectAnimalMock('Arg')
    };
    
    it('Should call "onSelectAnimal" when clicking on the image.', () => {
    const wrapper = shallow(<Animal {...props} />);
    wrapper.find('.animal').simulate('click');
    expect(onSelectAnimalMock).toHaveBeenCalled();
    });

})