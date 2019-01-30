import React from 'react';
import test from 'ava';
import sinon from 'sinon';
import { JSDOM } from 'jsdom';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TextInput from './TextInput';

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

test('TextInput should change input element value when value prop is changed', t => {
  const testValue = 'foo!';
  const input = mount(<TextInput />);
  input.setProps({
    value: testValue,
  });
  t.is(input.find('input').prop('defaultValue'), testValue);
  input.unmount();
});

test('TextInput should call handleTextChange function when text is changed', t => {
  const testValue = 'hoozah!';
  const spy = sinon.spy(TextInput.prototype, 'handleTextChange');
  const input = mount(<TextInput />);
  input.find('input').simulate('change', {
    target: { value: testValue },
  });
  t.true(spy.called);
  input.unmount();
  spy.restore();
});

test('TextInput should call onTextChanged prop when text is changed', t => {
  const testValue = 'hurrah!';
  const onTextChanged = sinon.spy();
  const input = mount(<TextInput onTextChanged={onTextChanged} />);
  input.find('input').simulate('change', {
    target: { value: testValue },
  });
  t.true(onTextChanged.calledWith(testValue));
  input.unmount();
});
