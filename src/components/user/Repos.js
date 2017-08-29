import React from 'react';

const Repos = ({ name, language }) => {
	return (
		<div>
			<h3>Repos</h3>
			<p>
				{name}
			</p>
			<p>
				{language}
			</p>
		</div>
	);
};

export default Repos;
