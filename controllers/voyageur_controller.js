import { getAllVoyageurs, addVoyageur, deleteVoyageur, getVoyageurById, updateVoyageur } from "../services/voyageur_service.js"; 

export async function AllVoyageurs(req,res){
    try {
        const voyageurs = await getAllVoyageurs();
        res.json(voyageurs);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des voyageurs", error: error.message });
    }

}

export async function AddVoyageur(req, res){
    try {
        const voyageur = await addVoyageur(req.body);
        res.json(voyageur);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de l'ajout du voyageur", error: error.message });
    }
}

export async function GetVoyageurById(req, res){
    try {
        const voyageur = await getVoyageurById(req.params.id);
        if (!voyageur) {
            return res.status(404).json({ message: "Voyageur non trouvé" });
        }
        res.json(voyageur);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération du voyageur", error: error.message });
    }
}

export async function DeleteVoyageur(req, res){
    try {
        const voyageur = await deleteVoyageur(req.params.id);
        if (!voyageur) {
            return res.status(404).json({ message: "Voyageur non trouvé" });
        }
        res.json({ message: "Voyageur supprimé avec succès" });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la suppression du voyageur", error: error.message });
    }
}

export async function UpdateVoyageur(req, res){
    try {
        const voyageur = await updateVoyageur(req.params.id, req.body);
        if (!voyageur) {
            return res.status(404).json({ message: "Voyageur non trouvé" });
        }
        res.json(voyageur);
    } catch (error) {
        res.status(400).json({ message: "Erreur lors de la mise à jour du voyageur", error: error.message });
    }
}
