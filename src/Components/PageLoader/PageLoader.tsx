import React from 'react';
import classes from './styles.module.css';
const PageLoader = () => {
	return (
		<div className={classes.wrapper}>
			<div className={classes['cssload-container']}>
				<div className={classes['cssload-loading']}>
					<i></i>
					<i></i>
					<i></i>
					<i></i>
				</div>
			</div>
		</div>
	);
};

export default PageLoader;
