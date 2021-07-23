import React, { Image } from "react";
import { Link } from "react-router-dom";
import starwarsimage from "../../img/star-wars-logo-icon-8.jpg";

// const drop

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			{/* <Link to="/"> */}
			<a className="navbar-brand ml-5">
				<img style={{ maxWidth: "75px", height: "75px" }} src={starwarsimage} />
			</a>
			<button
				className="btn btn-primary mr-5"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavDropdown"
				aria-controls="navbarNavDropdown"
				aria-expanded="false"
				aria-label="Toggle navigation">
				Favorites
				{/* <span className="navbar-toggler-icon" /> */}
			</button>
			<div
				className="collapse navbar-collapse dropdown-menu dropdown-menu-right mr-2"
				// className="nav-link dropdown-toggle"
				href="#"
				id="navbarNavDropdown"
				// id="navbarDropdownMenuLink"
				data-toggle="dropdown float-right"
				aria-haspopup="true"
				aria-expanded="false">
				<div className="">
					<a className="dropdown-item" href="#">
						Action
					</a>
					<a className="dropdown-item" href="#">
						Another action
					</a>
					<a className="dropdown-item" href="#">
						Something else here
					</a>
				</div>
			</div>
			{/* </ul> */}
			{/* </div> */}
			{/* </Link> */}
		</nav>
	);
};
