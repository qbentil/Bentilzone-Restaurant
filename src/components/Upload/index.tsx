import { MdCloudUpload } from 'react-icons/md'
import { firebaseUploadImage } from '../../Firebase';

const Upload = ({action, promise,  progressHandler, to = "Products"}:{action:any, promise:any,  progressHandler:any, to?:string}) => {
    const uploadImage = (e:any) => {
      const imageFIle = e.target.files[0]
      firebaseUploadImage(imageFIle, promise, progressHandler, action, to)
    }
  return (
<div className="flex justify-center items-center w-full h-full">

    <label htmlFor="file-upload" className="flex flex-col justify-center items-center w-full h-full rounded-lg  cursor-pointer">
        <div className="flex flex-col justify-center items-center pt-5 pb-6 gap-2">
            <MdCloudUpload className='text-gray-500 text-3xl ' />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click here to upload</span></p>
            <p className="text-xs text-gray-500 dark:text-gray-400"> PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id='file-upload' name = "uploadimage" type="file" accept='image/*' className="hidden" onChange={(e) => uploadImage(e)} />
    </label>
</div> 
  )
}

export default Upload