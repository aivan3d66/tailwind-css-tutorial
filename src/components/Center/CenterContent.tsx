import {AddPost} from "./AddPost";
import {Post} from "./Post";
import {Stories} from "./Stories/Stories";

export const CenterContent = () => {
  return (
    <section className="content">
      <Stories/>
      <AddPost/>
      <Post/>
      <Post/>
    </section>
  )
}
