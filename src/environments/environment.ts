import { targetVariable } from "./environment.vars";
import { commonEnvironment } from "./environment.common";

const featureFlagTrack = targetVariable.featureFlagTrack;
const azureBaseUrl = targetVariable.azureBaseUrl;
const azureTrack = targetVariable.azureTrack;

export const enviroment = {
    ...commonEnvironment,
    upkBaseURL: `${azureBaseUrl}${azureTrack}/api`,
    upkFeatureFlagURL: `${azureBaseUrl}${azureTrack}/en-US?path=feature-flags/${featureFlagTrack}`,
};