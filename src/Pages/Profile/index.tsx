import { BiCategory, BiFoodMenu } from "react-icons/bi";
import {
  MdOutlineDataSaverOn,
  MdOutlineFastfood,
  MdOutlineProductionQuantityLimits,
  MdDeleteOutline,
} from "react-icons/md";

import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useState } from "react";
import { useStateValue } from "../../context/StateProvider";
import { AssetUploader, Loader } from "../../components";
import { updateUserData } from "../../utils/functions";
import { firebaseRemoveUploadedImage } from "../../Firebase";

// import { GiTakeMyMoney } from "react-icons/gi";







const UpdateProfile = () => {
  const [{ user }, dispatch] = useStateValue();
  const [displayName, setDisplayName] = useState(user.displayName)
  // const [email, setEmail] = useState(user.email)
  const [photoURL, setPhotoURL] = useState(user.photoURL)
  const [loading, setLoading] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)
  const [btnText, setBtnText] = useState("Save")
  const [loaderMessage, setLoadermessage] = useState("");

  const deleteImage = async () => {
    setLoadermessage("Removing Photo......");
    firebaseRemoveUploadedImage(photoURL, setPhotoURL, setLoading);
    const data = { ...user, photoURL: null };
    await updateUserData(data, dispatch, false);
  };
  const saveChanges = async () => {
    setBtnText("Saving....");
    if(displayName.lenth < 0 || phoneNumber.length !== 10)
    {
      toast.error("Fill out fields correctly")
      setBtnText("Save")
    }else{
      const data = {
        ...user,
        displayName,
        phoneNumber,
        photoURL,
      }
      await updateUserData(data, dispatch, true);
      setBtnText("Save");
    }

  };
  const resetForm = () => {

  };
  const updatePhotoUrl = async (newUrl: string) => {
    setPhotoURL(newUrl);
    const data = { ...user, photoURL: newUrl };
     await updateUserData(data, dispatch, false)
  }

  const validateNumber = (value: any) => {
    if (isNaN(value)) {
      toast.error("Please enter a valid phone number", { toastId: 123 });
      return "";
    }
    return value;
  };



  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="border w-full  md:w-[60%]  flex border-gray-300 items-center rounded-lg p-4 flex-col justify-center gap-4  mt-8 mg:mt-10">
        <div className="w-full py-3 border-b border-gray-300 flex -tems-center gap-2">
          <MdOutlineFastfood className="text-xl text-gray-600" />
          <input
            type="text"
            required
            placeholder="Enter full name"
            autoFocus
            className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdOutlineProductionQuantityLimits className="text-gray-600 text-2xl" />
            <input
              type="text"
              required
              placeholder="Phone"
              autoFocus
              className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(validateNumber(e.target.value))}
            />
          </div>
        </div>
        <div className="group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-[225px]  md:h-[420px] round-lg">
          {
            loading ? (
              <Loader progress={loaderMessage} />
            ):(
              <>
             {photoURL ? (
                <>
                  <div className="relative h-full">
                    <img
                      src={photoURL}
                      alt="uploaded food"
                      className="w-full h-full object-cover"
                    />
                    <motion.button
                      whileTap={{ scale: 1.1 }}
                      whileHover={{ scale: 1.2 }}
                      title="Remove Photo"
                      className="absolute bottom-3 right-3 rounded-full p-2 md:p-5 bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                      onClick={() => deleteImage()}
                    >
                      <MdDeleteOutline className="text-white" />
                    </motion.button>
                  </div>
                </>
              ) : (
                <AssetUploader
                  action={updatePhotoUrl}
                  progressHandler={setLoadermessage}
                  promise={setLoading}
                />
              )}
              </>
            )
          }
        </div>

        <div className="w-full flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="ml-0 flex justify-center items-center gap-2 flex-row-reverse md:ml-auto w-full md:w-auto border-none outline-none rounded bg-orange-500 px-12 py-2 text-lg text-white"
            onClick={() => saveChanges()}
          >
            <MdOutlineDataSaverOn /> {btnText}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
