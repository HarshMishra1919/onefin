import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';
import './Footer.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function Footer(props) {
    const { setPage } = props;
    const classes = useStyles();

    return (
        <div className="footer">
            <div className={classes.root}>
                <Pagination
                    count={10}
                    color="primary"
                    onChange={(e) => setPage(+e.target.outerText)}
                />
            </div>
        </div>
    );
}

export default Footer;
