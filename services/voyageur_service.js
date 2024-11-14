import VoyageurModel from "../models/voyageur_model.js";


export async function getAllVoyageurs(){
    return await VoyageurModel.find()
}

export async function addVoyageur(Voyageur){
    return await VoyageurModel.create(Voyageur);
}

export async function getVoyageurById(idV){
    return await VoyageurModel.findById(idV);
}

export async function deleteVoyageur(idV){
    return await VoyageurModel.findByIdAndDelete(idV);
}

export async function updateVoyageur(idV,Voyageur){
    return await VoyageurModel.findByIdAndUpdate(idV, voyageur);
}
