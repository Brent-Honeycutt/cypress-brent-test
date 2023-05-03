module.exports = {
  projectId: 'j1o394',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
  }
};
