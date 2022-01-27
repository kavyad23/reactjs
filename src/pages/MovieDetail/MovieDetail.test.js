import React from 'react';
import { shallow } from 'enzyme';
import MovieDetailComponent from './MovieDetailComponent';

describe("MovieDetailComponent", () => {
  it("should render MovieDetail component", () => {
    const wrapper = shallow(<MovieDetailComponent />);
  });
});