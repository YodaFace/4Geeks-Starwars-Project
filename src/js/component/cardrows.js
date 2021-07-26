import React, { useContext } from "react";
import { CharacterCard } from "./charactercard.js";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const CharacterRow = () => {
	const { store } = useContext(Context);
	return (
		<div className="row m-5">
			<h3 className="text-white">Characters</h3>
			<div className="scrollmenu">
				{store.characters.map((item, index) => {
					return (
						<CharacterCard
							key={index}
							name={item.name}
							gender={item.gender}
							hair_color={item.hair_color}
							eye_color={item.eye_color}
						/>
					);
				})}
			</div>
		</div>
	);
};
