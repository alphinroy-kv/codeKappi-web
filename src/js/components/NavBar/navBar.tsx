import React from "react";
import NavBarButton from "./navBarButton";

const NavBar = () => {
  const NavArray = [
    {
      path: "/analytics",
      title: "Analytics",
    },
    {
      path: "/members",
      title: "Members",
    },
    {
      path: "/equipments",
      title: "Equipments",
    },
    {
      path: "/trainers",
      title: "Trainers",
    },
  ];

  return (
    <div className="fixed h-full w-[200px] z-50 bg-[#222338] text-white flex flex-col pt-40 font-[poppins]">
      {NavArray.map((nav) => (
        <NavBarButton path={nav.path} title={nav.title} />
      ))}
    </div>
  );
};

export default NavBar;
