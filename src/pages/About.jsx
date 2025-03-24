import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from '../components/NewsletterBox'


const About = () => {
  return (
    <div>
      <div className=" text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"US"} />
      </div>
      <div className=" my-10 flex flex-col md:flex-row gap-16">
        <img
          className=" w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
         <div className=" flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ullam
            mollitia totam id vero quia at similique! Molestiae provident cumque
            quia explicabo corrupti, odio voluptatum! Eaque molestias minus modi
            suscipit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            vitae perspiciatis cupiditate tenetur, vel hic alias minus quis
            consequatur, at, labore architecto. Et consequuntur eaque sapiente,
            quasi libero ut excepturi veniam odio rerum nobis repudiandae soluta
            odit, fugiat est officiis?
          </p>
          <b className=" text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            sapiente unde fuga error deserunt temporibus sint consectetur nihil
            autem esse repellendus tempore quod voluptates distinctio, fugiat in
            ullam pariatur fugit.
          </p>
        </div>
        </div>
       
        <div className=" text-xl py-4 ">
          <Title text1={"WHY"} text2={"CHOOSE US"} />
        </div>
        <div className=" flex flex-col md:flex-row text-sm  mb-20">
          <div className=" border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
            <b>QUALITY ASSURANCE</b>
            <p className=" text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              eligendi esse corporis dolores, provident tenetur, saepe mollitia
              iure ut rerum porro culpa odio incidunt totam.
            </p>
          </div>
          <div className=" border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
            <b>CONVENIENCE</b>
            <p className=" text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              eligendi esse corporis dolores, provident tenetur, saepe mollitia
              iure ut rerum porro culpa odio incidunt totam.
            </p>
          </div>
          <div className=" border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 ">
            <b>EXCEPTIONAL CUSTOMER SERVICE</b>
            <p className=" text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
              eligendi esse corporis dolores, provident tenetur, saepe mollitia
              iure ut rerum porro culpa odio incidunt totam.
            </p>
          </div>
        </div>
        <NewsletterBox/>
        
      </div>
  );
};

export default About;
