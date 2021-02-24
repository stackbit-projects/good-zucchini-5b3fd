import React from 'react';
import _ from 'lodash';

import {safePrefix, Link} from '../utils';
import Menu from './Menu';

export default class Header extends React.Component {
    render() {
        let menu = _.get(this.props, 'pageContext.menus.main');
        return (
            <header className="site-header">
              <div className="site-header-inner">
              <div className="site-branding">
                <img className="site-logo" alt="Site logo" src={safePrefix(_.get(this.props, 'pageContext.site.siteMetadata.logo'))}/>
                <h1 className="site-title"><Link to={safePrefix(_.get(this.props, 'pageContext.site.pathPrefix') || '/')}>{_.get(this.props, 'pageContext.site.siteMetadata.title')}</Link></h1>
              </div>
              {_.get(this.props, 'pageContext.menus.main') && 
              <nav className="site-navigation">
                <Menu {...this.props} menu={menu} page={this.props.pageContext} />
              </nav>
              }
              </div>
            </header>
        );
    }
}
