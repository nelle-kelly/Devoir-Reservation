import { getAllDestinations, addDestination, getDestinationById, deleteDestination, updateDestination } from "../services/destination_service.js";

export async function AllDestinations(req,res){
    try {
        const destinations = await getAllDestinations();
        res.json(destinations);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des destinations", error: error.message });
    }

}
export async function AddDestination(req, res){
    try {
        const destination = await addDestination(req.body);
        res.json(destination);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de l'ajout de la destination", error: error.message });
    }
}

export async function GetDestinationById(req, res){
    try {
        const destination = await getDestinationById(req.params.id);
        if (!destination) {
            return res.status(404).json({ message: "Destination non trouvée" });
        }
        res.json(destination);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération de la destination", error: error.message });
    }
}

export async function DeleteDestination(req, res){
    try {
        const destination = await deleteDestination(req.params.id);
        if (!destination) {
            return res.status(404).json({ message: "Destination non trouvée" });
        }
        res.json({ message: "Destination supprimée avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression de la destination", error: error.message });
    }
}

export async function UpdateDestination(req, res){
    try {
        const destination = await updateDestination(req.params.id, req.body);
        if (!destination) {
            return res.status(404).json({ message: "Destination non trouvée" });
        }
        res.json(destination);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la mise à jour de la destination", error: error.message });
    }
}