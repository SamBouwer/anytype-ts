import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MenuInterface } from 'ts/store/common';

const $ = require('jquery');
const raf = require('raf');
const OFFSET = 4;

class Menu extends React.Component<MenuInterface, {}> {

	_isMounted: boolean = false;

	render () {
		const { id } = this.props;
		let cn = [ 'menu', 'menu-' + id ];
		
		return (
			<div className={cn.join(' ')} />
		);
	};
	
	componentDidMount () {
		this._isMounted = true;
		this.position();
	};
	
	componentWillUnmount () {
	};
	
	position () {
		const { param } = this.props;
		const { element } = param;
		const node = $(ReactDOM.findDOMNode(this));
		const el = $('#' + element);
		
		raf(() => {
			const offset = el.offset();
			node.css({ 
				left: offset.left,
				top: offset.top + el.outerHeight() + OFFSET
			});			
		});
	};
	
};

export default Menu;