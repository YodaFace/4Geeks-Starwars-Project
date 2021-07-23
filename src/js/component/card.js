import React from "react";

export const Card = () => (
	<div className="card col-3 mr-4 overflow-wrap text-wrap" style={{ width: "18rem" }}>
		<img className="card-img-top" src="..." alt="Card image cap" />
		<div className="card-body">
			<h5 className="card-title">Card title</h5>
			<p className="card-text text-align-center">
				Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
			</p>
			<a href="#" className="btn btn-primary">
				Go somewhere
			</a>
		</div>
	</div>
);
