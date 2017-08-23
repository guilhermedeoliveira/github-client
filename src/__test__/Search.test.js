import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import { Search } from '../components/landing/Search';

describe('<Search />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<Search />);
	});

	it('should render the DUMB component', () => {
		expect(wrapper.length).equal(1);
	});

	it('should render an input', () => {
		expect(wrapper.find('input')).to.have.length(1);
	});
});
