
import { AllDestinations , AddDestination, GetDestinationById, DeleteDestination, UpdateDestination} from '../controllers/destination_controller.js';
import express from 'express';
const router = express.Router();

router.route("/").get(AllDestinations)
                 .post(AddDestination);
router.route("/:id").get(GetDestinationById)
                    .delete(DeleteDestination)
                    .patch(UpdateDestination);
export default router;