import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface NavBarButtonProps {
  path: string;
  title: string;
}

const NavBarButton: React.FC<NavBarButtonProps> = ({ path, title }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSelected = location.pathname.includes(path);

  return (
    <button
      className={`h-16 ${
        isSelected ? "bg-NAV_SELECTED text-[#15BFFD] font-bold" : ""
      }`}
      onClick={() => {
        navigate(path);
      }}
    >
      {title}
    </button>
  );
};

export default NavBarButton;
