const routes = require('next-routes')();

// This overrides the next default navigation system.
routes
  .add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address', '/campaigns/show');

module.exports = routes;
