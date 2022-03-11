import "./header.css";

export default function Header() {
	return (
		<div className="header">
			<div className="headerTitles">
				<span className="headerTitleSm">React & Node</span>
				<span className="headerTitleLg">Blog</span>
			</div>
			<img src="https://cdn.searchenginejournal.com/wp-content/uploads/2012/12/blogging.jpg" alt="" className="headerImg" />
		</div>
	)
}