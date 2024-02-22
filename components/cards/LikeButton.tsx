"use client";
import React, { useState } from "react";
import Image from "next/image";

const LikeButton = () => {
  const [like, setLike] = useState(false);
  return (
    <div>
      <Image
        src={like ? "/assets/heart-filled.svg" : "/assets/heart-gray.svg"}
        alt="heart"
        width={24}
        height={24}
        className="cursor-pointer object-contain"
        onClick={() => setLike((prevState) => !prevState)}
      />
    </div>
  );
};

export default LikeButton;
