import { MdCloudUpload } from 'react-icons/md'
import "react-toastify/dist/ReactToastify.css";
import {  toast } from "react-toastify";
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../../firebase.config';

const Upload = ({action, promise, errorHandler}:{action:any, promise:any, errorHandler:any}) => {
    const uploadImage = (e:any) => {
      promise(true);
      const imageFile = e.target.files[0];
      const storageRef = ref(storage, `Images/Products/${Date.now()}-${imageFile.name}`)
      const uploadPhoto = uploadBytesResumable(storageRef, imageFile)
      uploadPhoto.on("state_changed", (snapshot) => {
        const uploadProgress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes)* 100)
        toast.info(`Upload Status: ${uploadProgress} %`, {icon : <MdCloudUpload className='text-blue-600' />, autoClose: 500, toastId: 1234})
      }, (error) => {
        console.log(error);
        toast.error("Error while uploading, Try again🤗")
        errorHandler(true)
        setTimeout(() => {
            promise(false)
        }, 3000)
      }, () => {
          getDownloadURL(uploadPhoto.snapshot.ref).then((downloadUrl => {
            action(downloadUrl);
            promise(false)
            toast.success("Photo Uploaded Successfully😊")
          })
        )
      })
    }
  return (
<div className="flex justify-center items-center w-full h-full">

    <label htmlFor="file-upload" className="flex flex-col justify-center items-center w-full h-full rounded-lg  cursor-pointer">
        <div className="flex flex-col justify-center items-center pt-5 pb-6 gap-2">
            <MdCloudUpload className='text-gray-500 text-3xl ' />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to here upload</span></p>
            <p className="text-xs text-gray-500 dark:text-gray-400"> PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id='file-upload' name = "uploadimage" type="file" accept='image/*' className="hidden" onChange={(e) => uploadImage(e)} />
    </label>
</div> 
  )
}

export default Upload