import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

import * as SiteConfig from '../../config/site';
const PageTitle = '404';
const ErrorPage = (center) => (
	<Layout>
		<Helmet title={`${PageTitle} - ${SiteConfig.title}`} />
		<Header title={PageTitle} />
		<Container center={center}>
			<h1>Woops, something went wrong.</h1>
			<h3>This page does not exist or is no longer reachable.</h3>
			<h3>
				You can return to the <Link to='/'>Homepage</Link>.
			</h3>
		</Container>
	</Layout>
);

export default ErrorPage;

Container.propTypes = {
	center: PropTypes.object,
};
