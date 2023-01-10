'use strict';

module.exports = {
  test_page: 'tests/index.html?nocontainer&nolint',
  disable_watching: true,
  launch_in_ci: ['Chrome'],
  launch_in_dev: ['Chrome'],
  browser_start_timeout: 120,
  browser_args: {
    Chrome: {
      dev: [
        '--remote-debugging-port=9222',
        '--window-size=1440,900',
      ].filter(Boolean),
      ci: [
        '--remote-debugging-port=9222',
        '--window-size=1440,900',
      ].filter(Boolean),
    },
  },
};
