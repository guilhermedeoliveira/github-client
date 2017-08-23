import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import App from './App';
import Search from './Search';

describe('<App />', () => {
	it('renders without crashing', () => {
		mount(<App />);
	});
	it('should render <Search /> component', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Search)).to.have.length(1);
	});
});
