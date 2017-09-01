import PropTypes from 'prop-types';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { requireAuth } from '../utils/auth';
/**
 * Higher-order component (HOC) to wrap restricted pages
 */
const BaseComponent = (Component) => {
  class Restricted extends React.Component {
    componentWillMount() {
      const { history } = this.props;
      requireAuth().catch(() => history.replace({ pathname: '/login' }));
    }

    componentWillReceiveProps(nextProps) {
      const { history, location } = this.props;
      if (nextProps.location !== location) {
        requireAuth().catch(() => history.replaceState({ pathname: '/login' }));
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  Restricted.propTypes = {
    history: PropTypes.shape().isRequired,
    location: PropTypes.shape().isRequired,
  };

  return withRouter(Restricted);
};

export default BaseComponent;
