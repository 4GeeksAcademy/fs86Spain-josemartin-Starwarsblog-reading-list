import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const {store} = useContext(Context)
	return (<>
		<div>
			<nav className="navbar bg-body-tertiary">
				<div className="container">
					<a className="navbar-brand" href="#">
						<img src="https://images.seeklogo.com/logo-png/13/1/star-wars-logo-png_seeklogo-131743.png" width="70" height="60"/>
					</a>
				</div>
				<div>
					<li className="nav-item dropdown">
          				<a className=" dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Favorites</a>
          				<ul className="dropdown-menu">
            				{store.favoriteList?.map( (fav) => {
								return (<p>{fav}</p>)
							})}
          				</ul>
        			</li>
				</div>
			</nav>
		</div>
	</>);
};
