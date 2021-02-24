import React from 'react';
import _ from 'lodash';

import MenuSecondary from './MenuSecondary';

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
              <div className="footer-inner">
                {_.get(this.props, 'pageContext.menus.secondary') && 
                  <MenuSecondary {...this.props} />
                }
              </div>
            </div>
        );
    }
}
