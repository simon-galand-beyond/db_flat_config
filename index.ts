import {PrismaClient} from '@prisma/client'
import {parametersConfig, StaticPilotParameters} from "./pilotConfigManager";

const prisma = new PrismaClient()

async function addParam(name: string, value: number, pilot:string, voileId: number) {
    const param = await prisma.parameter.create({
        data: {
            name: name,
            value: value,
            pilot: pilot,
            voileId: voileId,
        }
    });
    console.log(param);
    return param;
}

/**
 * Example of function used to maintain data consistency when adding a set of parameters
 * @param voileId
 * @param values
 */
async function addStaticPilotParameters(voileId:number, values: StaticPilotParameters) {
    let params = [];

    for (const [key, value] of Object.entries(values)) {
        const param = await addParam(key, value, "static", voileId);
        params.push(param);
    }

    return params;
}

async function retrieveStaticPilotParameters(voileId:number) {
    const params = await prisma.voile.findUnique({where: {id: voileId}}).Parameter({where: {pilot: "static"}});
    //or
    //const params = await prisma.parameter.findMany({where: {pilot: "static", voileId: voileId}});

    //if we want to get an output of type StaticPilotParameters
    const staticParams : StaticPilotParameters | undefined = params?.map((param) => {
        return {[param.name]: param.value};
    }).reduce((acc, curr) => ({...acc, ...curr}), {} as StaticPilotParameters);

    return staticParams;
}

function validateStaticParameters(values: StaticPilotParameters){
    //iterate over values
    //check if value is in the range of the parameter
    for (const key in values) {
        const value = values[key as keyof StaticPilotParameters];
        const config = parametersConfig[key as keyof typeof parametersConfig];
        if(value < config.min || value > config.max){
            console.log("Invalid value for parameter " + key + ": " + value);
            return false;
        }

    }
    return true;
}

async function main() {

    //If no voile 1 exists, create it
    const voile = await prisma.voile.upsert({where:{id: 1}, update: {name: "voile1"}, create: {name: "voile1"}});
    console.log(voile)


    const allStaticPilot = await prisma.parameter.findMany()
    console.log("All parametrers", allStaticPilot)

    //generate random values
    const values: StaticPilotParameters = {
        kp_elevation: Math.random(),
        ki_elevation: Math.random(),
        kd_elevation: Math.random(),
        kp_lacet: Math.random(),
        ki_lacet: Math.random(),
        kd_lacet: Math.random(),
    }
    const isValid = validateStaticParameters(values);
    if(!isValid){
        console.log("Invalid values");
        return;
    }
    console.log("Valid values");
    const voileId = 1;
    const staticParam = await addStaticPilotParameters(voileId, values);
    console.log(staticParam);

}

main()
    .catch(e => {
        throw e
    })
    .then(async () => {
        await prisma.$disconnect()
    })

