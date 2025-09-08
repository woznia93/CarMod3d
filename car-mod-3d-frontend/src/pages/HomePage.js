import React from "react";
import CarViewer from "../components/CarViewer";
import Forum from "../components/Forum";

export default function HomePage() {
  return (
    <div>
      <h1>Car Mod 3D Loader</h1>
      <CarViewer />
      <Forum />
    </div>
  );
}
