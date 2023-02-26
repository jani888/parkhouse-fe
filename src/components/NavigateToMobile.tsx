import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function NavigateToMobile() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (window.innerWidth < 500) {
      navigate("/pwa/home");
    } else if (location.pathname.startsWith("/pwa")) {
      navigate("/");
    }
    const listener = () => {
      if (window.innerWidth < 500) {
        navigate("/pwa/home");
      } else if (location.pathname.startsWith("/pwa")) {
        navigate("/");
      }
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [navigate, location]);
  return null;
}
