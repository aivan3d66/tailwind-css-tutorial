import {Avatar} from "../Header/Menu";
import {AiOutlineFileImage} from "react-icons/ai";

export const AddPost = () => {
  return (
    <div className='flex items-center shadow-lg rounded'>
      <Avatar/>
      <button className='p-2 w-10/12 rounded sm:bg-gray-200 text-gray-800'>Add post</button>
      <AiOutlineFileImage className='text-3xl'/>
    </div>
  )
}
