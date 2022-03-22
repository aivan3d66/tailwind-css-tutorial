import {AddPost} from "./AddPost";
import {Post} from "./Post";

export const CenterContent = () => {
  return (
    <section className="w-1/2 mt-10">
      <AddPost/>
      <Post/>
    </section>
  )
}
