import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: '#21862B',
	},
	navBar: {
		background: 'linear-gradient(45deg, #FFFFFF 30%, #F3F1F1 90%)',
	},
	title: {
		flexGrow: 1,
		textAlign: 'center',
		display: 'inline-block',
		color: '#21862B',
	},
	login: {
		color: '#21862B',
	},
}));

export default function NavBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.navBar}>
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="Menu"
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						Active Tracking Collars
					</Typography>
					<Button className={classes.login}>Login</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}
