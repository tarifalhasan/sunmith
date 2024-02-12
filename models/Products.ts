import mongoose, { Document, Schema } from "mongoose";

// Define the interface for the Product document
interface IProduct extends Document {
  title: string;
  description: string;
  reviews: string[];
  price: number;
  discount: number;
  features: string[];
  image: string;
}

// Define the schema for the Product model
const productSchema: Schema<IProduct> = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  reviews: {
    type: [String],
    default: [],
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  discount: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  features: {
    type: [String],
    default: [],
  },
  image: {
    type: String,
    required: true,
  },
});

// Create and export the Product model
const Product =
  mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);
export default Product;
