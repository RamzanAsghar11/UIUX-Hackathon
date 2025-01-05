import React from "react";
import Allpagesmainsection from "../Components/Allpagesmainsection";
import Image from "next/image";
import Delivery from "../Components/Delivery";

const Cart = () => {
  return (
    <div className="w-full ">
      <Allpagesmainsection logo="Cart" logoDescription="Cart" />

      <div className="my-6 py-8 h-auto w-full px-4 md:px-6 2xl:px-24 gap-6 2xl:gap-12 flex flex-col lg:flex-row">
        {/* Cart Table Section */}

        <table className="w-full md:w-full xl:w-[70%] ">
          <thead className="bg-[#FFF9E5] w-full">
            <tr className=" md:grid md:grid-cols-6 sm:grid-flow-col items-center py-3 lg:text-xl ">
              <th className="p-2  "></th>
              <th className="text-left p-2 ">Product</th>
              <th className="text-left p-2">Price</th>
              <th className="text-left p-2">Quantity</th>
              <th className="text-left p-2">Subtotal</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <tbody className="w-full ">
            <tr className=" md:grid md:grid-cols-6 sm:grid-flow-col items-center py-3 my-10">
              {/* Product Image and Name */}
              <td className=" ">
                <div className=" w-20 h-20 md:w-24 md:h-24 p-3 bg-[#FBEBB5] rounded flex items-center justify-center">
                  <Image
                  width={55}
                  height={55}
                    src="/Assets/Image 8.png"
                    alt="Product"
                    className="w-full h-full object-cover"
                  />
                </div>
              </td>
              <td className="text-[#9F9F9F]">Asgaard Sofa </td>

              {/* Price */}
              <td className="p-4 text-[#9F9F9F]">Rs. 250,000.00</td>

              {/* Quantity */}
              <td className="p-4">
                <input
                  type="number"
                  defaultValue={1}
                  className="w-7 lg:w-12 border-2 border-[#9F9F9F] text-center rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </td>

              {/* Subtotal */}
              <td className="p-4">Rs. 250,000.00</td>

              {/* Delete Icon */}
              <td className="p-4 ">
                <div className=" flex justify-end">
                  <Image
                    src="/Assets/Delete_icon.png"
                    width={22}
                    height={22}
                    alt="delete"
                    className="cursor-pointer"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Cart Totals Section */}
        <div className="w-full flex items-center flex-col lg:w-[30%] bg-yellow-50 p-6 px-3 xl:px-16 rounded-md shadow-md">
          <h2 className="text-2xl font-bold my-8">Cart Totals</h2>
          <div className="flex justify-between w-full mb-2">
            <span className="font-medium">Subtotal</span>
            <span className="text-[#9F9F9F]">Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between w-full my-8">
            <span className="font-medium">Total</span>
            <span className="text-[#B88E2F] font-medium text-xl">Rs. 250,000.00</span>
          </div>
          <div className="w-full flex justify-center xl:px-10">
          <button className="w-full border-2 border-black py-4 rounded-xl text-xl">
            Check Out
          </button>
          </div>
        </div>
      </div>
      <div>
          <Delivery/>
        </div>
    </div>
  );
};

export default Cart;
