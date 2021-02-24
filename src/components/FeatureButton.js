import React from 'react';
import _ from 'lodash';

import {Link} from '../utils';

export default class FeatureButton extends React.Component {
    render() {
        return (
            <Link to={_.get(this.props, 'site.siteMetadata.docs_url') + '/' + _.get(this.props, 'page.frontmatter.button_link')} className={_.get(this.props, 'classes')}>
              {_.get(this.props, 'page.frontmatter.button_text')}
            </Link>
        );
    }
}
