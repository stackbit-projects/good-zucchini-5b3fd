import React from 'react';
import _ from 'lodash';

import {Layout} from '../components/index';
import {htmlToReact} from '../utils';
import HomepageButton from '../components/HomepageButton';

export default class Home extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
            <div className="home">
              <h1>{_.get(this.props, 'pageContext.frontmatter.heading')}</h1>
              {htmlToReact(_.get(this.props, 'pageContext.html'))}
              {_.get(this.props, 'pageContext.site.data.links.ssg') && <React.Fragment>
              <h5>Supported SSG</h5>
              <ul>
              {_.map(_.get(this.props, 'pageContext.site.data.links.ssg'), (link, link_idx) => (
                <li key={link_idx}>{_.get(link, 'title')}</li>
              ))}
              </ul>
              </React.Fragment>}
              {_.get(this.props, 'pageContext.site.data.links.cms') && <React.Fragment>
              <h5>Supported CMS</h5>
              <ul>
              {_.map(_.get(this.props, 'pageContext.site.data.links.cms'), (link, link_idx) => (
                <li key={link_idx}>{_.get(link, 'title')}</li>
              ))}
              </ul>
              </React.Fragment>}
              {_.get(this.props, 'pageContext.frontmatter.show_button') && 
                <HomepageButton {...this.props} />
              }
            </div>
            </Layout>
        );
    }
}
