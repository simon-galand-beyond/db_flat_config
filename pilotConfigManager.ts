//This file aims to manage the configuration for the pilot parameters.
//For each parameters, the following information are stored:
// - Name of the parameter (as a key)
// - public name of the parameter (as a value)
// - min value of the parameter
// - max value of the parameter
// - unit of the parameter
// - access level of the parameter

//The configuration is stored in a JSON file, which is loaded at the start of the application.
//For test purpose, the configuration will be stored in a js object.

const parametersConfig = {
    "kp_elevation": {
        "publicName": "Elevation P",
        "min": 0,
        "max": 100,
        "unit": "",
        "accessLevel": 1
    },
    "ki_elevation": {
        "publicName": "Elevation I",
        "min": 0,
        "max": 100,
        "unit": "",
        "accessLevel": 1
    },
    "kd_elevation": {
        "publicName": "Elevation D",
        "min": 0,
        "max": 100,
        "unit": "",
        "accessLevel": 1
    },
    "kp_lacet": {
        "publicName": "Lacet P",
        "min": 0,
        "max": 100,
        "unit": "",
        "accessLevel": 1
    },
    "ki_lacet": {
        "publicName": "Lacet I",
        "min": 0,
        "max": 100,
        "unit": "",
        "accessLevel": 1
    },
    "kd_lacet": {
        "publicName": "Lacet D",
        "min": 0,
        "max": 100,
        "unit": "",
        "accessLevel": 1
    },
    "kp_azimut": {
        "publicName": "Azimut P",
        "min": 0,
        "max": 100,
        "unit": "",
        "accessLevel": 1
    },
    "ki_azimut": {
        "publicName": "Azimut I",
        "min": 0,
        "max": 100,
        "unit": "",
        "accessLevel": 1
    },
    "kd_azimut": {
        "publicName": "Azimut D",
        "min": 0,
        "max": 100,
        "unit": "",
        "accessLevel": 1
    },
}

interface StaticPilotParameters {
    kp_elevation: number,
    ki_elevation: number,
    kd_elevation: number,
    kp_lacet: number,
    ki_lacet: number,
    kd_lacet: number,
}


export { parametersConfig, StaticPilotParameters}