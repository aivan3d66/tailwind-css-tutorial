import {AiOutlineFileImage} from "react-icons/ai";
import {Avatar} from "../../common/Avatar/Avatar";

export const AddPost = () => {
  return (
    <div className='flex items-center justify-between p-3 mb-5 shadow-lg rounded-md bg-white'>
      <Avatar/>
      <button className='p-2 w-10/12 mx-2 rounded sm:bg-gray-200 text-gray-800'>Add post</button>
      <AiOutlineFileImage className='text-3xl flex justify-center items-center text-gray-600'/>
    </div>
  )
}
