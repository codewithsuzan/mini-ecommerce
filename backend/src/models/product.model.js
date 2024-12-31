import mongoose , {Schema} from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //createdAt,updatedAt
  }
);

export const Product = mongoose.model("Product", productSchema);
