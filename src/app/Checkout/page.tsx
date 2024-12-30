import Allpagesmainsection from "../Components/Allpagesmainsection";
import { GoDotFill } from "react-icons/go";

const Checkout = () => {
  return (
    <div className="h-auto w-full">
      <Allpagesmainsection logo="Checkout" logoDescription="Checkout" />

      <div className=" p-8 w-full flex flex-col md:flex-row gap-8 2xl:px-40 2xl:gap-24 xl:gap-12">
        {/* Billing Details Section */}
        <div className="flex w-full md:w-1/2 h-auto flex-col py-5 px-5 xl:px-12">
          <h2 className="text-3xl font-semibold mb-6">Billing details</h2>
          <form className="flex flex-wrap gap-4">
            {/* First Name */}
            <div className="w-full md:w-[48%]">
              <label className="block mb-1 my-5">First Name</label>
              <input
                type="text"
                className="w-full h-[75px] border border-[#9F9F9F] p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
              />
            </div>

            {/* Last Name */}
            <div className="w-full md:w-[48%]">
              <label className="block mb-1 my-5">Last Name</label>
              <input
                type="text"
                className="w-full h-[75px] border border-[#9F9F9F] p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
              />
            </div>

            {/* Company Name */}
            <div className="w-full">
              <label className="block mb-1 my-5">Company Name (Optional)</label>
              <input
                type="password"
                className="w-full h-[75px] border border-[#9F9F9F] p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
              />
            </div>

            {/* Country/Region */}
            <div className="w-full">
              <label className="block mb-1 my-5">Country / Region</label>
              <select className="w-full h-[75px] border border-[#9F9F9F] p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5">
                <option>Pakistan</option>
              </select>
            </div>

            {/* Street Address */}
            <div className="w-full">
              <label className="block mb-1 my-5">Street Address</label>
              <input
                type="text"
                className="w-full h-[75px] border border-[#9F9F9F] p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
              />
            </div>

            {/* Town/City */}
            <div className="w-full">
              <label className="block mb-1 my-5">Town / City</label>
              <input
                type="text"
                className="w-full h-[75px] border border-[#9F9F9F] p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
              />
            </div>
            {/* Province */}
            <div className="w-full">
              <label className="block mb-1 my-5">Province</label>
              <select className="w-full h-[75px] border border-[#9F9F9F] p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5">
                <option>Select Province</option>
              </select>
            </div>

            {/* ZIP Code */}
            <div className="w-full">
              <label className="block mb-1 my-5">Zip Code</label>
              <input
                type="number"
                className="w-full h-[75px] border border-[#9F9F9F] p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
              />
            </div>

            {/* Phone */}
            <div className="w-full">
              <label className="block mb-1 my-5">Phone</label>
              <input
                type="number"
                className="w-full h-[75px] border border-[#9F9F9F] p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
              />
            </div>

            {/* Email */}
            <div className="w-full">
              <label className="block mb-1 my-5">Email Address</label>
              <input
                type="email"
                className="w-full h-[75px] border border-[#9F9F9F] p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
              />
            </div>

            {/* Additional Notes */}
            <div className="w-full">
              <label className="block mb-1 my-5">
                <textarea
                  rows={3}
                  className="w-full h-[75px] border border-[#9F9F9F] p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mt-5"
                ></textarea>
              </label>
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="w-full md:w-1/2 px-6 py-10 ">
          <div className="flex justify-between border-b-2 border-[#9F9F9F]">
            {/* Product */}
            <div className="flex flex-col gap-6">
              <h1 className="text-2xl font-medium">Product</h1>
              <p className="text-[#9F9F9F]">
                Asgaard sofa <span className="text-black"> x 1</span>
              </p>
              <p>Subtotal</p>
              <p>Total</p>
            </div>
            {/*Subtotal */}
            <div className="flex flex-col gap-6 items-end">
              <h1 className="text-2xl font-medium">Subtotal</h1>
              <p> Rs. 250,000.00</p>
              <p>Rs. 250,000.00</p>
              <p className="text-[#B88E2F] font-bold text-2xl">
                Rs. 250,000.00
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xl mt-4">
            <span className="text-4xl">
              <GoDotFill />
            </span>{" "}
            Direct Bank Transfer
          </div>
          <p className="text-[#9F9F9F] my-4">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be shipped
            until the funds have cleared in our account.
          </p>

          {/*Direct Bank transfer Details */}

          <div className="mb-4 text-[#9F9F9F]">
            <label className="flex items-center">
              <input type="radio" name="payment" className="mr-2 bg-black" />
              Direct Bank Transfer
            </label>
          </div>

          <div className="mb-4 text-[#9F9F9F]">
            <label className="flex items-center">
              <input type="radio" name="payment" className="mr-2" />
              Cash on Delivery
            </label>
          </div>
          <p className="my-4">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our{" "}
            <span className="font-semibold">privacy policy.</span>
          </p>
          <div className="w-full flex items-center justify-center my-7  ">
            {/*Place order button */}
            <button className=" w-1/2 py-3 text-xl text-center border-2 border-black rounded-xl hover:bg-blue-600">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
