import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { Reservation } from '../models/reservation.model.js';


export const sendReservation = asyncHandler(async (req, res) => {
    // Step 1: Take all data from frontend and store it in some variables
    const { firstName, lastName, email, phone, date, time } = req.body;

    // Step 2: None of the variables should be empty; if they are, return an error
    if (!firstName || !lastName || !email || !phone || !date || !time) {
        return res
            .status(400)
            .json(new ApiError(400, "Please fill in all the details in the form!"));
        // throw new ApiError(400, "Please fill in all the details in the form!");
    }

    try {
        // Step 3: Check if a reservation already exists for the customer (based on email or phone)
        const existedCustomerReservation = await Reservation.findOne({
            $or: [{ email }, { phone }]
        });
        //Step 4: If reservation for the same email or phone already exists then throw error
        if (existedCustomerReservation) {
            return res
            .status(409)
            .json(new ApiError(409, "A reservation for this person already exists."));
            // throw new ApiError(409, "A reservation for this person already exists.");
        }

        // Step 5: If no duplicate reservation is found, create a new reservation for the customer in dB
        const customerReservation = await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time
        });

        // Step 6: Send a response about the successful reservation
        return res
            .status(200)
            .json(new ApiResponse(200, "Reservation has been made successfully!"));

    } catch (error) {
        // Check if it's a Mongoose validation error
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json(new ApiError(400, messages[0])); // Sends the first validation error
        }

        // Generic error handling
        console.error("Error creating reservation:", error.message);
        return res
            .status(500)
            .json(new ApiError(500, "An error occurred while making the reservation."));
    }
});