import * as React from 'react';
import { PiletApi } from '@paquitosoft/netflix-piral';
import { Link } from 'react-router-dom';
import Browse from './components/Browse';
import { MovieTileProps } from './models/proptypes';
import './style.scss';

export function setup(app: PiletApi) {
	// app.showNotification('Hello from Piral!', {
	// 	autoClose: 2000,
	// });
	// app.registerTile(() => <div>Welcome to Piral!</div>, {
	// 	initialColumns: 2,
	// 	initialRows: 1,
	// });
	app.registerMenu(() =>
		<Link to="/browse">Browse</Link>
	);

	const MovieTile: React.FC<MovieTileProps> = props => <app.Extension name="MovieTitle" params={props} />;
	const FavoritesButton: React.FC<any> = props => <app.Extension name="ListToggle" params={props} />;
	const BrowsePage: React.FC = () => <Browse MovieTile={MovieTile} FavoritesButton={FavoritesButton} />;
	app.registerPage('/browse', BrowsePage);
}
