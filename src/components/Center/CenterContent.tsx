import {AddPost} from "./AddPost";
import {Post} from "./Post";
import {Stories} from "./Stories/Stories";

export const CenterContent = () => {
  return (
    <section className="mobile:w-96 mobile:flex mobile:flex-col mobile:justify-center mobile:my-auto tablet:w-1/2 mt-1">
      <Stories/>
      <AddPost/>
      <Post/>
    </section>
  )
}
