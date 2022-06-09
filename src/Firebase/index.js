import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import React from "react";
import { MdOutlineCloudUpload } from "react-icons/md";
import { toast } from "react-toastify";
import { useStateValue } from "../context/StateProvider";
import { app, firestore, storage } from "../firebase.config";

export const firebaseUploadImage = (
  imageFile,
  promise,
  progressHandler,
  action
) => {
  promise(true);
  // progressHandler(0)
  toast.info(`Upload started.....`, {
    icon: <MdOutlineCloudUpload className="text-blue-600" />,
  });
  const storageRef = ref(
    storage,
    `Images/Products/${Date.now()}-${imageFile.name}`
  );
  const uploadPhoto = uploadBytesResumable(storageRef, imageFile);
  uploadPhoto.on(
    "state_changed",
    (snapshot) => {
      progressHandler(
        `Upload status: ${Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )}%`
      );
    },
    (error) => {
      console.log(error);
      toast.error("Error while uploading, Try again🤗");
      action(null);
      setTimeout(() => {
        promise(false);
      }, 3000);
    },
    () => {
      getDownloadURL(uploadPhoto.snapshot.ref).then((downloadUrl) => {
        action(downloadUrl);
        promise(false);
        toast.success("Photo Uploaded Successfully😊");
      });
    }
  );
};

export const firebaseRemoveUploadedImage = (
  ImageFile,
  imageHandler,
  promise
) => {
  promise(true);
  toast.info(`Removing Image.....`, {
    icon: <MdOutlineCloudUpload className="text-blue-600" />,
    autoClose: 1500,
  });
  const deleteRef = ref(storage, ImageFile);
  deleteObject(deleteRef).then(() => {
    imageHandler(null);
    promise(false);
    toast.success("Photo removed Successfully😊", { autoClose: 2000 });
  });
};
export const silentRemoveUploadedImage = (ImageFile) => {
  const deleteRef = ref(storage, ImageFile);
  deleteObject(deleteRef).then(() => {});
};

export const firebaseSaveProduct = async (data) => {
  await setDoc(doc(firestore, "Food", `${Date.now()}`), data, {
    merge: true,
  });
};

export const AUTHPROVIDER = async (provider) => {
  const firebaseAuth = getAuth(app);
  const {
    user: { refreshToken, providerData },
  } = await signInWithPopup(firebaseAuth, provider);
  return { refreshToken, providerData };
};
export const EMAILSIGNUP = async (email, password) => {
  const firebaseAuth = getAuth(app);
  return createUserWithEmailAndPassword(firebaseAuth, email, password)
};
export const EMAILSIGNIN = async (email, password) => {
  const firebaseAuth = getAuth(app);
  return signInWithEmailAndPassword(firebaseAuth, email, password)
};
