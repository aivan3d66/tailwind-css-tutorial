import {AddPost} from "./AddPost";
import {Post} from "./Post";
import {Stories} from "./Stories/Stories";

export const CenterContent = () => {
  return (
    <section className="w-1/2 mt-1">
      <Stories/>
      <AddPost/>
      <Post/>
    </section>
  )
}
