import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Scroll({ watch }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname, watch]);
  return null; 
}
