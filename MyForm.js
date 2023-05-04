import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./CartSlice";
import emailjs from "emailjs-com";
import { useRef } from 'react';







const CartItemsField = ({cartItemNames}) => {
  const cartItems = useSelector((state) => state.cart.items);

    cartItemNames = cartItems.map((item) => item.name).join(", ");

  return (
    <label className="block mb-3">
      <span className="block font-bold">Ordered Items:</span>
      <input type="text" value={cartItemNames} readOnly className="w-full px-2 py-1 border rounded" />
    </label>
  );
};

const MyForm = ({cartItemNames}) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsApp] = useState("");
  const [pincode, setPincode] = useState("");

  const dispatch = useDispatch();


 


  const formRef = useRef(null);

  const handleClearCart = () => {
    dispatch(clearCart());
  };



 function handleSubmit(event) {
  event.preventDefault();

  const formData = {
    name,
    email,
    phone: whatsapp,
    address,
    pincode,
    orderedItems: JSON.stringify(cartItemNames)
  };

  const emailParams = {
    to_name: "Recipient",
    name: "Sender",
    formData: formData
  };

  emailjs
    .send("service_syxkgzu", "template_t62j08f", emailParams, "CLMi3V6eO26puYgui")
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );

  formRef.current && formRef.current.reset();
  handleClearCart();
}

  

  

  return (
    <div className="max-w-md mx-auto py-5">
      <h1 className="from-neutral-800 text-3xl mb-5">Shipping Details</h1>
      <CartItemsField />
      <form onSubmit={handleSubmit}>
        <label className="block mb-3">
          <span className="block font-bold">Name:</span>
          <input type="text" value={name} onChange={(event) => setName(event.target.value)} className="w-full px-2 py-1 border rounded" />
        </label>
        <label className="block mb-3">
          <span className="block font-bold">Address:</span>
          <input type="text" value={address} onChange={(event) => setAddress(event.target.value)} className="w-full px-2 py-1 border rounded" />
        </label>
        <label className="block mb-3">
          <span className="block font-bold">Email:</span>
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full px-2 py-1 border rounded" />
        </label>
        <label className="block mb-3">
          <span className="block font-bold">WhatsApp Number:</span>
          <input type="tel" value={whatsapp} onChange={(event) => setWhatsApp(event.target.value)} className="w-full px-2 py-1 border rounded" />
        </label>
        <label className="block mb-3">
          <span className="block font-bold">Pincode:</span>
          <input type="text" value={pincode} onChange={(event) => setPincode(event.target.value)} className="w-full px-2 py-1 border rounded" />
        </label>
        <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded mt-5" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default MyForm;