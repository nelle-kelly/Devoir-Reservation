import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    destinationId:[{
        type: mongoose.Types.ObjectId,
        ref: "destination_model"
    }],
    voyageurId:[{
        type: mongoose.Types.ObjectId,
        ref: "voyageur_model"
    }],
    dateDebut:{
        type: Date,
        default: Date.now,
        required: true
    },
    dateFin:{
        type: Date,
        default: Date.now,
        required: true
    },
    nombrePersonnes:{
        type: Number,
        required: true
    }
});

const ReservationModel = mongoose.model("reservation_model", reservationSchema);
export default ReservationModel;