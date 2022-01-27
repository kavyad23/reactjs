import React from 'react';
import { shallow } from 'enzyme';
import LoginComponent from './LoginComponent';

describe("LoginComponent", () => {
  it("should render Login component", () => {
    const wrapper = shallow(<LoginComponent />);
  });
});