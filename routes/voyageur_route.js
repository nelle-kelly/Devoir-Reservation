import { AllVoyageurs, AddVoyageur, DeleteVoyageur, GetVoyageurById,  UpdateVoyageur } from '../controllers/voyageur_controller.js';
import express from 'express';
const router = express.Router();


router.route("/").get(AllVoyageurs)
                 .post(AddVoyageur);

router.route("/:id").get(GetVoyageurById)
                    .delete(DeleteVoyageur)
                    .patch(UpdateVoyageur);

export default router;