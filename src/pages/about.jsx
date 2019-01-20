import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

import * as SiteConfig from '../../config/site';

const Text = styled.div`
	margin: 2rem 10rem;
`;

const PageTitle = 'About';
const About = (center) => (
	<Layout>
		<Helmet title={`${PageTitle} - ${SiteConfig.title}`} />
		<Header title={PageTitle}>Gatsby Starter Improved</Header>
		<Container center={center}>
			<Text>
				<p>
					Does anyone really look at &quot;about&quot; pages anyway? If I should put some time in to this...hit me up on any
					of the platforms in the footer!
				</p>
			</Text>
		</Container>
	</Layout>
);

export default About;

Container.propTypes = {
	center: PropTypes.object,
};
