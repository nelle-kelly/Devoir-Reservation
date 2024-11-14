import { getAllReservations, addReservation, getReservationById, deleteReservation, updateReservation, prixTotalReservation } from "../services/reservation_service.js";

export async function AllReservations(req,res){
    try {
        const reservations = await getAllReservations();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des réservations", error: error.message });
    }

}

export async function AddReservation(req, res){
    try {
        const reservation = await addReservation(req.body);
        res.json(reservation);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de l'ajout de la réservation", error: error.message });
    }
}

export async function GetReservationById(req, res){
    try {
        const reservation = await getReservationById(req.params.id);
        if (!reservation) {
            return res.status(404).json({ message: "Réservation non trouvée" });
        }
        res.json(reservation);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de la réservation", error: error.message });
    }
}

export async function DeleteReservation(req, res){
    try {
        const reservation = await deleteReservation(req.params.id);
        if (!reservation) {
            return res.status(404).json({ message: "Réservation non trouvée" });
        }
        res.json({ message: "Réservation supprimée avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression de la réservation", error: error.message });
    }
}

export async function UpdateReservation(req, res){
    try {
        const reservation = await updateReservation(req.params.id, req.body);
        if (!reservation) {
            return res.status(404).json({ message: "Réservation non trouvée" });
        }
        res.json(reservation);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la mise à jour de la réservation", error: error.message });
    }
}

export async function PrixTotalReservation(req, res){
    try {
        const prixTotal = await prixTotalReservation(req.params.id);
        res.json({ prixTotal });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }

}