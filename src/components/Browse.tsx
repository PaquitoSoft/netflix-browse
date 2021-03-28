import * as React from 'react';
import { BrowseProps } from '../models/proptypes';
import { HeroData, ShowCaseData } from '../models/types';
import Hero from './Hero';
import Showcase from './Showcase';

// Webpack will load the yml as objects (see webpack config)
const showcasesdata = require('../data/showcases.yml') as ShowCaseData[];
const herodata = require('../data/hero.yml') as HeroData;

const Browse: React.FC<BrowseProps> = props => {
	const showcases = showcasesdata.map((data, index) => (
		<Showcase
			key={index}
			MovieTile={props.MovieTile}
			{...data}
		/>
	));

	return (
		<div className="Browse">
			<Hero
				FavoritesButton={props.FavoritesButton}
				{...herodata}
			/>
			{showcases}
		</div>
	);
};

export default Browse;
