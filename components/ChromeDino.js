import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const ChromeDinoGame = dynamic(() => import('react-chrome-dino'), { ssr: false });

const ChromeDino = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <ChromeDinoGame />;
};

export default ChromeDino;
