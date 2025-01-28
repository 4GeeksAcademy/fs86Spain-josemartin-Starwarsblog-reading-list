import React from "react";
import { BrowserRouter, Route, Routes, Link, useParams } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import "../styles/home.css";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Context } from "./store/appContext";
import { useEffect, useContext } from "react";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


const CharacterCard = ({name, uid}) => {
	const { actions, store } = useContext(Context)
	const addFavorite = (name) => {
		actions.addFavorite(name);
		console.log(store.favoriteList)
	}
	return(<>
		<div className="card">
  			{/*<img src="..." className="card-img-top" alt="..."/>*/}
			<div className="card-body">
    			<h5 className="card-title">{name}</h5>
    			<p className="card-text">{ name }</p>
    			<div className="buttons"> 
					<Link to={`/character/${uid}`}>
						<a href="#" className="btn btn-primary">Learn more</a>
					</Link>
						<button onClick={() => addFavorite(name)}>Add favorite</button> 
				</div>
  			</div>
		</div>
	</>)
};

const PlanetCard = ({name, uid}) => {
	const { actions, store } = useContext(Context)
	const addFavorite = (name) => {
		actions.addFavorite(name);
		console.log(store.favoriteList)
	}
	return(<>
	<div className="card">
  			{/*<img src="..." className="card-img-top" alt="..."/>*/}
			<div className="card-body">
    			<h5 className="card-title">{name}</h5>
    			<p className="card-text">{name}</p>
    			<div className="buttons"> 
					<Link to={`/planet/${uid}`}>
						<a href="#" className="btn btn-primary">Learn more</a>
					</Link>
						<button onClick={() => addFavorite(name)}>Add favorite</button> 
				</div>
  			</div>
		</div>
	</>)
};

const VehicleCard = ({name, uid,}) => {
	const { actions, store } = useContext(Context)
	const addFavorite = (name) => {
		actions.addFavorite(name);
		console.log(store.favoriteList)
	}
	return(<>
	<div className="card">
  			{/*<img src="..." className="card-img-top" alt="..."/>*/}
			<div className="card-body">
    			<h5 className="card-title">{name}</h5>
    			<p className="card-text">{name}</p>
				<div className="buttons"> 
					<Link to={`/vehicle/${uid}`}>
						<a href="#" className="btn btn-primary">Learn more</a>
					</Link>
						<button onClick={() => addFavorite(name)}>Add favorite</button> 
				</div>
  			</div>
		</div>
	</>)
}


const StarWarsBlog = () => {
	const { store, actions } = useContext(Context);

	useEffect( () => {
		actions.getCharacterList();
		actions.getPlanetList();
		actions.getVehicleList();
	}, [])

	return(<>
		<div className="d-fex flex-column ps-10px">
			<div className="title"><p>Characters</p></div>
			<div className="d-flex flex-row gap-2">
				{store.characterList.map( (character) => (<CharacterCard {...character}/>))}
			</div>
			<div className="title"><p>Planets</p></div>
			<div className="d-flex flex-row gap-2">
				{store.planetList.map( (planet) => (<PlanetCard {...planet}/>))}
			</div>
			<div className="title"><p>Vehicles</p></div>
			<div className="d-flex flex-row gap-2">
				{store.vehicleList.map( (vehicle) => (<VehicleCard {...vehicle}/>))}
			</div>
		</div>
	</>)
}


const Characters = () => {
	const { actions, store } = useContext(Context)
	let { id } = useParams();

	useEffect( () => {
		actions.getCharacterOverview(id);
	}, []);


	return(<>
		<p className="title">Characters</p>
		<div className="d-flex flex-row ps-5">
			<p><strong>{ store.characterOverview.name }</strong></p>
			<p className="ps-5">{ store.characterOverview.description }</p>
		</div>
		<div className="d-flex flex-row ps-5">
			<p className="pe-5">height:<br/>{ store.characterOverview.height }</p>
			<p className="pe-5">skin_color:<br/>{ store.characterOverview.skin_color }</p>
			<p className="pe-5">eye_color:<br/>{ store.characterOverview.eye_color }</p>
			<p className="pe-5">birth_year:<br/>{ store.characterOverview.birth_year }</p>
			<p className="pe-5">gender:<br/>{ store.characterOverview.gender }</p>
			<p className="pe-5">name:<br/>{ store.characterOverview.name }</p>
		</div>
	</>)
}


const Planets = () => {
	const { actions, store } = useContext(Context)
	let { id } = useParams();

	useEffect( () => {
		actions.getPlanetOverview(id);
	}, [])

	return(<>
		<p className="title">Planets</p>
		<div className="d-flex flex-row ps-5">
			<p><strong>{ store.planetOverview.name }</strong></p>
			<p className="ps-5">{ store.planetOverview.description }</p>
		</div>
		<div className="d-flex flex-row ps-5">
			<p className="pe-5">name:<br/>{ store.planetOverview.name }</p>
			<p className="pe-5">climate:<br/>{ store.planetOverview.climate }</p>
			<p className="pe-5">population:<br/>{ store.planetOverview.population }</p>
			<p className="pe-5">orbital_period:<br/>{ store.planetOverview.orbital_period }</p>
			<p className="pe-5">rotation_period:<br/>{ store.planetOverview.rotation_period }</p>
			<p className="pe-5">diameter:<br/>{ store.planetOverview.diameter }</p>
		</div>
	</>)
}


const Vehicles = () => {
	const { actions, store } = useContext(Context)
	let { id } = useParams();

	useEffect( () => {
		actions.getVehicleOverview(id);
	}, [])

	return(<>
		<p className="title">Vehicles</p>
		<div className="d-flex flex-row ps-5">
			<p><strong>{ store.vehicleOverview.name }</strong></p>
			<p className="ps-5">{ store.vehicleOverview.description }</p>
		</div>
		<div className="d-flex flex-row ps-5">
			<p className="pe-5">name:<br/>{ store.vehicleOverview.name }</p>
			<p className="pe-5">passengers:<br/>{ store.vehicleOverview.passengers }</p>
			<p className="pe-5">model:<br/>{ store.vehicleOverview.model }</p>
			<p className="pe-5">length:<br/>{ store.vehicleOverview.length }</p>
			<p className="pe-5">crew:<br/>{ store.vehicleOverview.crew }</p>
			<p className="pe-5">cargo_capacity:<br/>{ store.vehicleOverview.cargo_capacity }</p>
		</div>
	</>)
}


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						{/*<Route path="/" element={<Home />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />*/}
						<Route path="/" element={<StarWarsBlog />} />
						<Route path="/character/:id" element={<Characters />} />
						<Route path="/planet/:id" element={<Planets />} />
						<Route path="/vehicle/:id" element={<Vehicles />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					{/*<Footer />*/}
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
