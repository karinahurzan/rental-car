import { useEffect } from "react";
import NotFoundModal from "../../components/NotFoundModal/NotFoundModal";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <NotFoundModal message="There is no page you are trying to reach... Please, try another one..." />
  );
}
