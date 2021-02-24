import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact} from '../utils';

export default class Basic extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
              {htmlToReact(_.get(this.props, 'pageContext.html'))}
            </Layout>
        );
    }
}
