import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


 const Contact = () => {
  return (
    <>
    <div className="container contact" id="contact">
      <h1 className="mt-4">CONTACT ME</h1>
      <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="1000">
        <a href="https://www.instagram.com" target="_blank" className="items"> <FaInstagram className="icons" /> </a>
        <a href="https://www.facebook.com" target="_blank"className="items"> <CiFacebook  className="icons"/> </a>
        <a href="https://www.linkedin.com" target="_blank"className="items"> <CiLinkedin className="icons" /> </a>
        <a href="https://www.twitter.com" target="_blank"className="items"> <BsTwitterX  className="icons"/> </a>
        <a href="https://www.github.com" target="_blank"className="items"> <FaGithub  className="icons"/>  </a>
        <a href="mailto:riya.m1509@gmail.com" target="_blank"className="items"> <SiGmail className="icons" />  </a>

      </div>
    </div>
    </>
  )
}

export default Contact;
