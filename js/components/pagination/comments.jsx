/** @format */
/**
 * External Dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

class Pagination extends React.Component {
	static propTypes = {
		start: PropTypes.number,
		current: PropTypes.number,
		end: PropTypes.number,
		onNextPage: PropTypes.func,
		onPreviousPage: PropTypes.func,
	};

	static defaultProps = {
		start: 1,
		current: 1,
		onNextPage: noop,
		onPreviousPage: noop,
	};

	render() {
		const next = this.props.current + 1;
		const prev = this.props.current - 1;

		return (
			<nav className="navigation comment-navigation clear" role="navigation">
				<div className="nav-links">
					{ prev > 0 ? (
						<div className="nav-previous">
							<a href="#" onClick={ this.props.onPreviousPage }>
								Older Comments
							</a>
						</div>
					) : null }
					{ next <= this.props.end ? (
						<div className="nav-next">
							<a href="#" onClick={ this.props.onNextPage }>
								Newer Comments
							</a>
						</div>
					) : null }
				</div>
			</nav>
		);
	}
}

export default Pagination;
