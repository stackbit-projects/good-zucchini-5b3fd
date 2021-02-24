import React from 'react';
import _ from 'lodash';

import {Link} from '../utils';

export default class HomepageButton extends React.Component {
    render() {
        return (
            <Link to={_.get(this.props, 'pageContext.site.siteMetadata.docs_url') + '/' + _.get(this.props, 'pageContext.frontmatter.homepage_button_link')} className="button">
              {_.get(this.props, 'pageContext.frontmatter.homepage_button_text')}
            </Link>
        );
    }
}
