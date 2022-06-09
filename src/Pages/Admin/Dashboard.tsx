
import { toast } from "react-toastify";

import { AssetUploader, Loader } from "../../components";
import { MdAttachMoney, MdDelete, MdFastfood, MdFoodBank } from "react-icons/md";

import { BiCategory } from "react-icons/bi";
import { Categories } from "../../utils/categories";
import CategoriesSelector from "./CategoriesSelector";
import { useState } from "react";
import { motion } from "framer-motion";
import { firebaseRemoveUploadedImage, firebaseSaveProduct } from "../../Firebase";
import { setValues } from "framer-motion/types/render/utils/setters";
// import {Logo} from "../../"
const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState("");
  const [loaderMessage, setLoadermessage] = useState("")

  const deleteImage = () => {
    setLoadermessage("Removing Photo......")
    firebaseRemoveUploadedImage(image, setImage, setLoading)
  };
  const saveItem = () => {
    setLoadermessage("Saving Product.....")
    setLoading(true)
    try {
      if(!title || !calories || !price || !image || !category) {
        toast.error("Please fill all fields before saving product 🤗")
        setLoading(false)
        return
      }else{
        const data = {
          id: Date.now(),
          title: title,
          calories: calories,
          category: category,
          price: price,
          imageURL: image,
          qty: quantity,
        }
        toast.promise(firebaseSaveProduct(data), {
            pending: "Saving Product...",
            success: "Product saved successfully",
            error: "Error saving product, Please try again🤗",
        }).then(() => {
          clearForm();
          setLoading(false)
        }).catch((error) => {
          console.log(error)
        })
        setLoadermessage("")
        setLoading(false)



      }

    } catch (error) {
      console.log(error);      
      toast.error("Error whilesaving product")
    }
  }
  const clearForm = () => {
    setTitle("");
    setCalories("");
    setPrice("");
    setImage(null);
    setCategory("");
    setQuantity("");

  }

  const validateNumber = (value:any) => {
    if (isNaN(value)) {
      toast.error("Please enter a valid number", {toastId: 123})
      return "";
    }
    return value;
  }
  return (
    <div className="w-full min-h-[80vh] flex items-center justify-center mt-5">
      <div
        // onClick={() => notify()}
        className="border w-[90%] md:w-[75%]  flex border-gray-300 items-center rounded-lg p-4 flex-col justify-center gap-4  "
      >
        <div className="w-full py-3 border-b border-gray-300 flex -tems-center gap-2">
          <MdFastfood className="text-xl text-gray-600" />
          <input
            type="text"
            required
            placeholder="Enter food name"
            autoFocus
            className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
          <BiCategory className="text-xl text-gray-600" />
          <CategoriesSelector
            categories={Categories}
            action={setCategory}
            selected={category}
          />
          </div>
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdAttachMoney className="text-gray-600 text-2xl" />
            <input
              type="text"
              required
              placeholder="Quantity"
              autoFocus
              className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
              value={quantity}
              onChange={(e) => setQuantity(validateNumber(e.target.value))}
            />
          </div>
        </div>
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-[225px]  md:h-[420px] round-lg">
          {loading ? (
            <Loader progress = {loaderMessage} />
          ) : (
            <>
              {image ? (
                <>
                  <div className="relative h-full">
                    <img
                      src={image}
                      alt="uploaded food"
                      className="w-full h-full object-cover"
                    />
                    <button
                    title="Remove Photo"
                      className="absolute bottom-3 right-3 rounded-full p-2 md:p-5 bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={() => deleteImage()}
                    >
                      <MdDelete className="text-white" />
                    </button>
                  </div>
                </>
              ) : (
                <AssetUploader action = {setImage} progressHandler = {setLoadermessage} promise = {setLoading}/>
              )}
            </>
          )}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdFoodBank className="text-gray-600 text-2xl" />
            <input
              type="text"
              required
              placeholder="Calories"
              autoFocus
              className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
          </div>
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdAttachMoney className="text-gray-600 text-2xl" />
            <input
              type="text"
              required
              placeholder="Price"
              autoFocus
              className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
              value={price}
              onChange={(e) => setPrice(validateNumber(e.target.value))}
            />
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <motion.button whileHover={{scale:1.1}} className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none rounded bg-orange-500 px-12 py-2 text-lg text-white" onClick={() => saveItem()}>
            Save
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
