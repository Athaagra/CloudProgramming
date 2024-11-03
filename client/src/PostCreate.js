import React, { useState } from 'react';
import axios from 'axios';

export default () => {
	const [title, setTitle] = useState('');
	const onSubmit = async event => {
		event.preventDefault();
		
		await axios.post('http://localhost:4000/posts', {
			title
		});
		
		setTitle('');
	};
	
	return (
		<div>
			<form onSubmit={onSubmit}>
				<div className="grid-x grid-padding-x">
					<label>Title</label>
					<input value={title} onChange={e => setTitle(e.target.value)}
					className="medium-6 cell" />
				</div>
				<button className="button primary" type="submit">Submit</button>
			</form>
		</div>
		);
};