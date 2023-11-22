const mongoose = require("mongoose");
const CoworkingspacesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      unique: true,
      trim: true,
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    operatingHours: {
      type: String,
      required: [true, "Please add operating hours"],
    },
    address: {
      type: String,
      required: [true, "Please add an address"],
    },
    province: {
      type: String,
      required: [true, "Please add a province"],
    },
    postalcode: {
      type: String,
      required: [true, "Please add a postalcode"],
      maxlength: [5, "Postalcode cannot be more than 5 digits"],
    },
    tel: {
      type: String,
    },
    picture: {
      type: String,
      required: [true, "Please add URL to coworkingspace picture"],
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
// Cascade delete bookings when a coworkingspace is deleted
const Coworkingspaces = mongoose.models.coworkingspaces || mongoose.model("coworkingspaces", CoworkingspacesSchema)
export default Coworkingspaces
