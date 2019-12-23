import React from 'react';

const withSchemeHOC = (Component, scheme) => (props) => <Component {...props} scheme={scheme} />;

export default withSchemeHOC;
