import ReservationModel from "../models/reservation_model.js";
import DestinationModel from "../models/destination_model.js";

export async function getAllReservations(){
    return await ReservationModel.find()
}
export async function addReservation(reservation){
    return await ReservationModel.create(reservation);
}

export async function getReservationById(idR){
    return await ReservationModel.findById(idR);
}

export async function deleteReservation(idR){
    return await ReservationModel.findByIdAndDelete(idR);
}

export async function updateReservation(idR,Reservation){
    return await ReservationModel.findByIdAndUpdate(idR,Reservation);
}

export async function prixTotalReservation(idR){

    const reservation = await ReservationModel.findById(idR);
    if (!reservation) {
        throw new Error("Réservation non trouvée");
    }

    const destination = await DestinationModel.findById(reservation.destinationId);
    if (!destination) {
        throw new Error("Destination non trouvée");
    }

    const dateDebut = new Date(reservation.dateDebut);
    const dateFin = new Date(reservation.dateFin);
    const dureeSejour = Math.ceil((dateFin - dateDebut) / (1000 * 60 * 60 * 24));

    const prixTotal = dureeSejour * destination.prixParNuit;

    return prixTotal;
}