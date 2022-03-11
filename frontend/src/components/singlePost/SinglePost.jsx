import "./singlePost.css";
import { useLocation } from "react-router";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SinglePost() {
	const location = useLocation();
	const path = location.pathname.split("/")[2];
	const [post, setPost] = useState({});
	const PF = "http://localhost:5000/images/";
	const { user } = useContext(Context);
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [updateMode, setUpdateMode] = useState(false);

	useEffect(() => {
		const getPosts = async() => {
			const res = await axios.get("/posts/" + path);
			setPost(res.data);
			setTitle(res.data.title);
			setDesc(res.data.desc);
		}
		getPosts();
	}, [path]);

	const handleDelete = async() => {
		try{
			await axios.delete(`/posts/${post._id}`, {data: {username: user.username}});
			window.location.replace("/");
		}catch(error){
			console.log(error);
		}
	};

	const handleUpdate = async() => {
		try{
			await axios.put(`/posts/${post._id}`, {username: user.username, title, desc});
			setUpdateMode(false);
		}catch(error){
			console.log(error);
		}
	};

	return (
		<div className="singlePost">
			<div className="singlePostWrapper">
				{post.photo && (<img src={PF + post.photo} className="singlePostImg" alt="" />)}
				{updateMode ? (
					<input type="text" className="singlePostTitleInput" value={title} autoFocus onChange={e=>setTitle(e.target.value)} />
				) : (
					<h1 className="singlePostTitle">
						{title}
						{post.username === user?.username && (
							<div className="singlePostEdit">
								<i className="singlePostIcon fa-solid fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
								<i className="singlePostIcon fa-solid fa-trash-can" onClick={handleDelete}></i>
							</div>
					)}
					</h1>
				)}
				<div className="singlePostInfo">
					<span className="singlePostAuthor">Author: <b><Link to={`/?user=${post.username}`} className="link">{post.username}</Link></b></span>
					<span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
				</div>
				{updateMode ? (<textarea className="singlePostDescInput" value={desc} onChange={e=>setDesc(e.target.value)}></textarea>) : (<p className="singlePostDesc">{desc}</p>)}
				{updateMode && (<button className="singlePostButton" onClick={handleUpdate}>Update</button>)}
			</div>
		</div>
	)
}