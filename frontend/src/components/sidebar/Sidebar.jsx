import "./sidebar.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const getCats = async() => {
			const res = await axios.get("/categories");
			setCats(res.data);
		}
		getCats();
	}, []);

	return (
		<div className="sidebar">
			<div className="sidebarItem">
				<span className="sidebarTitle">ABOUT ME</span>
				<img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=65&w=94" alt="" />
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quasi delectus tenetur cumque alias sint veritatis ab molestias non suscipit vel cum, neque rerum provident perspiciatis facilis deleniti quod, sunt!</p>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">CATEGORIES</span>
				<ul className="sidebarList">
					{cats.map((c) => (
						<Link to={`/?cat=${c.name}`} className="link">
							<li key={c._id} className="sidebarListItem">{c.name}</li>
						</Link>
					))}
				</ul>
			</div>
			<div className="sidebarItem">
				<span className="sidebarTitle">FOLLOW US</span>
				<div className="sidebarSocial">
					<i className="sidebarIcon fa-brands fa-facebook-square"></i>
				    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
				    <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
				    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
				</div>
			</div>
		</div>
	)
}