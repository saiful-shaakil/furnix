import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: {
      type: String,
    },
    category: {
      type: Array,
      default: [],
    },
    price: {
      type: Number,
    },
    img: {
      type: Array,
      default: [],
    },
    desc: {
      type: String,
    },
    items: {
      type: Number,
    },
  },
  { timestamps: "true" }
);

const ProductSchema =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default ProductSchema;
