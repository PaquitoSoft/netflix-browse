import * as React from 'react';
import { Link } from 'react-router-dom';
import { HeroButtonProps } from '../models/proptypes';

const HeroButton: React.FC<HeroButtonProps> = props => {
	let Tag: any = Link;
	const linkProps: any = {
		className: "Button",
		'data-primary': props.primary
	};

	if (props.href.startsWith('http')) {
		Tag = 'a';
		linkProps.href = props.href;
		linkProps.target = '_blank';
	} else {
		linkProps.to = props.href;
	}

	return (
		<Tag {...linkProps}>{props.text}</Tag>
	)
};

export default HeroButton;
