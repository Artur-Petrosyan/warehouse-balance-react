/**
 * Custom hook that returns the current location path name and a navigate function from the react-router-dom library.
 * @returns {Object} - An object containing the navigate function and the current location path name.
 */
import { useLocation, useNavigate } from "react-router-dom";

export function useGetLocationPathName() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  return { navigate, path };
}
