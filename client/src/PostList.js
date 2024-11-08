import axios from "axios";
import { useState, useEffect} from "react";
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';


// eslint-disable-next-line no-console
export default () => {
	const [posts,setPosts] = useState({});
	
	const fetchPosts = async () => {
		const res = await axios.get('http://localhost:4002/posts');
		console.log(res.data);
		setPosts(res.data);
	};
	
	useEffect(() => {
		fetchPosts();
	}, []);
	console.log(posts);
	const renderedPosts = Object.values(posts).map(post => {
		return (
			<div 
				className="card"
				style={{ width: "30%", marginBottom: "20px"}}
				key={post.id}
			>
				<div className="card-section">
					<h3>{post.title}</h3>
					<CommentList comments={post.comments} />
					<CommentCreate postId={post.id} />
				 </div>
				</div>
			);
		});
	
	return (
	<div className="d-flex flex-row flex-wrap justify-content-between">
		{renderedPosts}
	</div>
	);
};
