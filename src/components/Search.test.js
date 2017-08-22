import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Search from './Search';

describe('<Search />', () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Search />, div);
	});
	it('should render an input', () => {
		const wrapper = shallow(<Search />);
		expect(wrapper.find('input')).to.have.length(1);
	});
});
