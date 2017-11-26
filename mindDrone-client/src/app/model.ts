export interface IESense {
    attention: number;
    meditation: number;
}

export interface IEegPower {
    delta: number;
    theta: number;
    lowAlpha: number;
    highAlpha: number;
    lowBeta: number;
    highBeta: number;
    lowGamma: number;
    highGamma: number;
}

export interface IBrainData {
    eSense: IESense;
    eegPower: IEegPower;
    poorSignalLevel: number;
    blinkStrength: number;
    status: string;
}
