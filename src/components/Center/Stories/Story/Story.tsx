import React from "react";

type StoryType = {
  name: string,
  image: string,
  photo: string
}

export const Story: React.FC<StoryType> = ({name, image, photo}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${photo})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }}
      className="flex flex-col justify-between p-2 mobile:w-32 mobile:h-48 tablet:w-36 tablet:h-56 rounded-xl hover:bg-contain border cursor-pointer"
    >
      <div className="h-9 w-9 rounded-full overflow-hidden border-2 border-amber-50">
        <img src={image} alt="user img"/>
      </div>
      <p className="mb-2 text-white text-ml">
        {name}
      </p>
    </div>
  )
}
