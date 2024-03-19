import { commonEnvironment } from "./environment.common";

export const targetVariable = {
    featureFlagTrack: 'DEV01',
    track: 'DEV01',
    azureTrack: 'dev01',
    azureBaseUrl: '',
    managerKey: {
        importantKey: commonEnvironment.importantKey
    }
}