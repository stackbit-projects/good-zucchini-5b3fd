import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact, getPages, Link, safePrefix} from '../utils';

export default class Features extends React.Component {
    render() {
        let features = _.orderBy(getPages(this.props.pageContext.pages, '/features'), 'frontmatter.date', 'desc');
        return (
            <Layout {...this.props}>
            <h1>{_.get(this.props, 'pageContext.frontmatter.title')}</h1>
            {htmlToReact(_.get(this.props, 'pageContext.html'))}
            <div className="features">
              {_.map(features, (feature, feature_idx) => (
              <div key={feature_idx} className="feature">
                <div className="feature-inner">
                  {_.get(feature, 'frontmatter.image_thumbnail') && 
                  <Link className="feature-thumbnail" to={safePrefix(_.get(feature, 'url'))}>
                    <img src={safePrefix(_.get(feature, 'frontmatter.image_thumbnail'))} alt={_.get(feature, 'frontmatter.title')} />
                  </Link>
                  }
                  <div className="feature-content">
                    <h2>
                      <Link to={safePrefix(_.get(feature, 'url'))}>{_.get(feature, 'frontmatter.title')}</Link>
                    </h2>
                    <p>{_.get(feature, 'frontmatter.description')}</p>
                  </div>
                </div>
              </div>
              ))}
            </div>
            </Layout>
        );
    }
}
