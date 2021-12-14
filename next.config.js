const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "sorin12",
        mongodb_password: "WciCcLv7wPVW2uyy",
        mongodb_cluster_name: "cluster0",
        mongodb_database: "myFirstDatabase",
      },
    };
  }
  return {
    env: {
      mongodb_username: "sorin12",
      mongodb_password: "WciCcLv7wPVW2uyy",
      mongodb_cluster_name: "cluster0",
      mongodb_database: "myFirstDatabase",
    },
  };
};
