import Constants from "expo-constants";

const settings = {
  dev: {
    apiUrl: process.env.BASE_URL + "/api",
  },
  staging: {
    apiUrl: process.env.BASE_URL + "/api",
  },
  prod: {
    apiUrl: process.env.BASE_URL + "/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === "staging") return settings.staging;
  return settings.prod;
};

export default getCurrentSettings();
