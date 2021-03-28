import * as React from 'react';
import { HeroProps } from '../models/proptypes';
import HeroButton from './HeroButton';

const Hero: React.FC<HeroProps> = props => (
	<div
		id="hero"
		className="Hero"
		style={{ backgroundImage: `url(${props.backgroundUrl})`}}
	>
		<div className="content">
			<img src={props.logoUrl} alt="Logo" className="logo"/>
			<h2>{props.title}</h2>
			<p>{props.text}</p>
			<div className="button-wrapper">
				<HeroButton primary text="Watch now" href={`/watch/${props.media_type}/${props.movieId}`} />
				<props.FavoritesButton full {...props}></props.FavoritesButton>
			</div>
		</div>
		<div className="overlay"></div>
	</div>
);

export default Hero;
