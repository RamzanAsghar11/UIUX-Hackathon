import React from "react";
import Mainproduct from "../Mainproduct";
import { getProductById } from "@/app/Data/Allproduct";  // Assuming the correct path to your data file

interface PageParams {
  params: {
    id: string;
  };
}

const ProductDetailsPage = async ({ params }: PageParams) => {
  // Directly destructure params without using await
  const { id } = await params;

  // Fetch product data by id (await the async function)
  const product = await getProductById(id);

  // Handle the case where the product is not found
  if (!product) {
    return <div>Product not found</div>;
  }return (
    <div>
      <Mainproduct
        title={product.title}
        imageSrc={product.imageSrc}
        price={product.price}
        description={product.description}
      />
    </div>
  );
};

export default ProductDetailsPage;
