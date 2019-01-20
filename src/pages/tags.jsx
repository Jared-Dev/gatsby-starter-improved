import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Layout, Container } from 'layouts';
import { Header, TagsBlock } from 'components';

import * as SiteConfig from '../../config/site';

const PageTitle = 'Tags';
const Tags = ({ pageContext }) => {
	const { tags } = pageContext;

	return (
		<Layout>
			<Helmet title={`${PageTitle} - ${SiteConfig.title}`} />
			<Header title={PageTitle}>Gatsby Starter Improved</Header>
			<Container>
				<TagsBlock list={tags} />
			</Container>
		</Layout>
	);
};

export default Tags;

Tags.propTypes = {
	pageContext: PropTypes.shape({
		tags: PropTypes.array,
	}),
};
