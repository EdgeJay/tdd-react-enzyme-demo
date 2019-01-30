import React from 'react';
import test from 'ava';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import Button from './Button';

configure({ adapter: new Adapter() });

test.before(() => {
  const { window } = new JSDOM('<!DOCTYPE html><html><body></body></html>');
  global.document = window.document;
  global.window = window;
});

test.after(() => {
  global.document = undefined;
  global.window = undefined;
});

test('Button should have empty label', t => {
  const button = shallow(<Button />);
  t.is(button.prop('children'), '');

  const mountedButton = mount(<Button />);
  t.is(mountedButton.prop('label'), '');

  // remember to unmount to conserve resources
  mountedButton.unmount();
});
