import mongoose, { Schema } from "mongoose"
import validator from "validator"

const reservationSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
            miniLength: [1, "First name must contain at least 1 character!"],
            maxLength: [30, "First name cannot exceed 30 characters"]
        },
        lastName: {
            type: String,
            required: true,
            miniLength: [1, "Last name must contain at least 1 character!"],
            maxLength: [30, "Last name cannot exceed 30 characters"]
        },
        email: {
            type: String,
            required: true,
            validate: [ validator.isEmail, "Provide a valid email" ]
        },
        phone: {
            type: Number,
            required: true,
            miniLength: [10, "Phone number should not be less than 10 digits"],
            maxLength: [10, "Phone number cannot exceed 10 digits"]
        },
        time: {
            type: String, 
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
    }
)

export const Reservation = mongoose.model("Reservation", reservationSchema)