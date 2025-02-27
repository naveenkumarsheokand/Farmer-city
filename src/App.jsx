import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import elements
import NavbarLayout from "./elements/navbar/NavbarLayout";
import IntroImage from "./elements/introImage/IntroImage";
// creating pages
function Home() {
  return (
    <>
      <NavbarLayout />
      <IntroImage />
    </>
  );
}
function About() {
  return (
    <>
      <NavbarLayout />
      <IntroImage />
    </>
  );
}
function Service() {
  return (
    <>
      <NavbarLayout />
      <IntroImage />
    </>
  );
}
function Partner() {
  return (
    <>
      <NavbarLayout />
      <IntroImage />
    </>
  );
}
function Contact() {
  return (
    <>
      <NavbarLayout />
      <IntroImage />
    </>
  );
}
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="/" element={<Home />}></Route>
            <Route path="/About-Us" element={<About />}></Route>
            <Route path="/Service" element={<Service />}></Route>
            <Route path="/Partner-with-us" element={<Partner />}></Route>
            <Route path="/Contact-Us" element={<Contact />}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
