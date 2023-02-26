import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
  return null;
}
