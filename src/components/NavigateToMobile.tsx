import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function NavigateToMobile() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) &&
      !location.pathname.startsWith("/pwa")
    ) {
      navigate("/pwa/home");
    }

    if (
      !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) &&
      location.pathname.startsWith("/pwa")
    ) {
      navigate("/");
    }
  }, [navigate, location]);
  return null;
}
