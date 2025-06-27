'use client';
import { Player } from "@lottiefiles/react-lottie-player";
import { NextPage } from "next";
import animation from "@/../public/assets/images/pages/404.json";
import { useRouter } from "next/navigation";

const Custom404: NextPage = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth");
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer", width: "fit-content", margin: "0 auto" }}>
      <Player
        src={animation}
        style={{ width: "50rem", textAlign: "center", marginTop: "5rem" }}
        className="player"
        loop
        autoplay
      />
    </div>
  );
};

export default Custom404;
