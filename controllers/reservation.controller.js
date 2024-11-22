import {ApiError} from '../utils/ApiError.js'
import { ApiResponse } from "../utils/ApiResponse.js";
import { Reservation } from '../models/reservation.model.js'

export const sendReservation = async (req, res, next) => {
    const { firstName, lastName, email, phone, date, time } = req.body;

    if(!firstName || !lastName || !email || !phone || !date || !time){
        return next(new ApiError(400, "Please fill all the details in the form!"));
    }
    try {
        await Reservation.create({firstName, lastName, email, phone, date, time});
        res
        .status(200)
        .json(
            new ApiResponse(
                200,
                "Reservation is made Successfully!",

            )
        );
    } catch (error) {
        if(error.name === "ValidationError"){
            const validationErrors = Object.values(error.errors).map(err => err.message);

            return next(new ApiError(400, `Validation error: ${validationErrors.join(', ')}`));
        }
        return next(error);
    }
}