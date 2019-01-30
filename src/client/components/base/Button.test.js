import React from 'react';
import test from 'ava';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({ adapter: new Adapter() });

test('Button should have empty placeholder', t => {
  const button = shallow(<Button />);
  t.is(button.prop('placeholder'), '');
});
