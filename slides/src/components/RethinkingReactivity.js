import React from 'react';
import PropTypes from 'prop-types';

const RethinkingReactivity = ({ slide }) => (
  <iframe
    title="rethinking-reactivity"
    className="external-content"
    src={`https://rethinkingreactivity.z6.web.core.windows.net/#slide=${slide}`}
  />
);

RethinkingReactivity.propTypes = {
  slide: PropTypes.number
};

export default RethinkingReactivity;
