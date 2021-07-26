import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { PropTypes } from "prop-types";
import "../../styles/home.scss";
import { AiOutlineHeart } from "react-icons/ai";

export const CharacterCard = props => {
	console.log(props);
	return (
		<div className="card p-2 m-2 " style={{ minWidth: "16rem" }}>
			<img className="card-img-top" src="https://via.placeholder.com/100" alt="Image" />
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<div className="card-info">
					<p className="card-text">
						Gender: {props.gender}
						<br />
						Hair-Color: {props.hair_color}
						<br />
						Eye-Color: {props.eye_color}
					</p>
				</div>
				<div className="card-bottom ptb-2">
					<div className="card-bottom-left float-left">
						<a href="#" className="btn btn-outline-primary">
							More Info!
						</a>
					</div>
					<div className="card-bottom-right float-right btn btn-outline-warning">
						<AiOutlineHeart />
					</div>
				</div>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	name: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	eye_color: PropTypes.string
};
