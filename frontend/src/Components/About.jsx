import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
        <section className="about flex min-h-screen items-center justify-center mt-20">
            <div className="mx-auto flex max-w-[1500px] flex-col-reverse lg:flex-row">
                <div className="flex flex-1 flex-col justify-evenly ml-16">
                    <div className="">
                        <h1 className="text-[70px] font-light ">ABOUT US</h1>
                        <p className="text-lg font-medium tracking-wider">
                        The only thing we're serious about is food.
                        </p>
                    </div>
                    <p className="mid w-3/4 text-lg tracking-wide">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
                        possimus optio adipisci dolores impedit illum iusto perferendis,
                        laudantium quod accusamus consequuntur consectetur, tempore nulla
                        error iure reiciendis dolorem assumenda. Necessitatibus fugit
                        asperiores totam rem esse exercitationem iusto ipsum qui dolore ex,
                        accusantium repellat mollitia repellendus.
                    </p>
                    <a
                        href="/"
                        className="flex w-fit items-center justify-center rounded-full border border-black px-6 py-2 text-[23px] transition hover:bg-white hover:text-black"
                    >
                        Explore Menu
                        <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:bg-black hover:text-white">
                            →
                        </span>
                    </a>
                </div>
                <div className="flex-1 mr-10">
                    <img src="/images/about.png" alt="about" className="w-full" />
                </div>
            </div>
        </section>
    </>
  );
};

export default About;