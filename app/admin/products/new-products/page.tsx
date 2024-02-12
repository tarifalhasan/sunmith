"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { z, ZodError } from "zod";

// Define the Zod schema for the product data
const productSchema = z.object({
  title: z.string(),
  description: z.string(),
  reviews: z.array(z.string()).default([]),
  price: z.number(),
  discount: z.number(),
  features: z.array(z.string()).default([]),
  image: z.string(),
});

const NewProduct: React.FC = () => {
  const [productData, setProductData] = useState({
    title: "",
    description: "",
    reviews: [],
    price: 0,
    discount: 0,
    features: [],
    image: "",
  });

  console.log(productData);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Validate the product data against the Zod schema
      const validatedData = productSchema.parse(productData);

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(validatedData),
      });

      if (response.ok) {
        console.log("Product posted successfully");
        // Handle redirection or other actions after successful product post
      } else {
        console.error("Failed to post product");
      }
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation error
        setError(error.errors[0]?.message ?? "Validation error");
      } else {
        console.error("Error posting product:", error);
      }
    }
  };

  return (
    <div className=" py-48">
      <h1 className=" text-center">New Product</h1>
      <form className=" max-w-7xl mx-auto" onSubmit={handleFormSubmit}>
        <label>
          Title:
          <Input
            type="text"
            name="title"
            value={productData.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <Textarea
            name="description"
            value={productData.description}
            onChange={handleInputChange}
          ></Textarea>
        </label>
        <br />
        <label>
          Price:
          <Input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Discount:
          <Input
            type="number"
            name="discount"
            value={productData.discount}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Image URL:
          <Input
            type="text"
            name="image"
            value={productData.image}
            onChange={handleInputChange}
          />
        </label>
        <br />

        {error && <div style={{ color: "red" }}>{error}</div>}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default NewProduct;
