import { AllReservations, AddReservation, GetReservationById, DeleteReservation, PrixTotalReservation, UpdateReservation } from '../controllers/reservation_controller.js';
import express from 'express';
const router = express.Router();

router.route("/").get(AllReservations)
                 .post(AddReservation);
router.route("/:id").get(GetReservationById)
                    .delete(DeleteReservation)
                    .patch(UpdateReservation);
router.route("/prix/:id").get(PrixTotalReservation);
export default router;