import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Search from './Search';

describe('<Search />', () => {
	it('renders without crashing', () => {
		mount(<Search />);
	});
	it('should render an input', () => {
		const wrapper = shallow(<Search />);
		expect(wrapper.find('input')).to.have.length(1);
	});
});
