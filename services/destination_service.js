import DestinationModel from "../models/destination_model.js";


export async function getAllDestinations(){
    return await DestinationModel.find()
}

export async function addDestination(destination){
    return await DestinationModel.create(destination);
}

export async function getDestinationById(idD){
    return await DestinationModel.findById(idD);
}

export async function deleteDestination(idD){
    return await DestinationModel.findByIdAndDelete(idD);
}

export async function updateDestination(idD,destination){
    return await DestinationModel.findByIdAndUpdate(idD,destination);
}