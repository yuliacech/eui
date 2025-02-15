/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/// <reference types="cypress" />

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// @see https://on.cypress.io/plugins-guide

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config

  require('@cypress/code-coverage/task')(on, config);
  on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'));
  
  // `cy.task()` executes code in Node via the task plugin event
  // These are being added to print messages and errors to console and CI logs
  // https://docs.cypress.io/api/commands/task
  // https://github.com/component-driven/cypress-axe#using-the-violationcallback-argument
  on('task', {
    log(message) {
      console.log(message);
      return null;
    },
    table(message) {
      console.table(message);
      return null;
    }
  });

  if (config.testingType === 'component') {
    const { startDevServer } = require('@cypress/webpack-dev-server');

    // Your project's Webpack configuration
    const webpackConfig = require('./webpack.config.js');

    on('dev-server:start', (options) =>
      startDevServer({ options, webpackConfig })
    );
  }

  return config;
};
