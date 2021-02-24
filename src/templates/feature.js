import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact} from '../utils';
import FeatureButton from '../components/FeatureButton';

export default class Feature extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
              <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
              {htmlToReact(_.get(this.props, 'pageContext.html'))}
              <FeatureButton {...this.props} page={this.props.pageContext} site={this.props.pageContext.site} classes={'button inverse'} />
            </Layout>
        );
    }
}
