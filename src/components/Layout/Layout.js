import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function dummyOnBack() {
  alert("Go Back");
}
export default function Layout({
  title,
  onBack = dummyOnBack,
  children,
  onOptionsClick,
}) {
  return (
    <>
      <Header title={title} onBack={onBack} onOptionsClick={onOptionsClick} />
      {children}
      <Footer />
    </>
  );
}
