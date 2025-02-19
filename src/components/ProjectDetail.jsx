import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProject } from "../redux/slices/projectSlice";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

const ProjectDetail = () => {
  const { sku } = useParams();
  const dispatch = useDispatch();
  const project = useSelector((state) => state.projects.project);
  const theme = useSelector((state) => state.theme.theme);
  
  useEffect(() => {
    dispatch(setProject(sku));
  }, [sku, dispatch]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        exit={{ x: 1000 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed right-0 w-screen h-screen ${
          theme === "dark" ? "" : "text-white"
        } p-4 pl-16 pt-24 flex flex-col gap-8 overflow-y-auto pb-48 transition-colors duration-300`}
      >
        <h1 className="font-gabarito font-medium text-6xl">{project.name}</h1>
        <div className="w-[35%] min-w-64">
          <img src={project.img} alt="" className="border"/>
        </div>
        <div className="flex flex-col gap-2">
          <p>Technologies:</p>
          <div className="flex gap-1 flex-wrap">
            {project?.tech?.map((tech, index) => (
              <p className="border p-1 rounded select-none hover:scale-105 transition-transform duration-300" key={index+1}>{tech}</p>
            ))}
          </div>
        </div>
        <p className="pr-2 md:max-w-2xl max-w-72">{project.description}</p>
        {project?.screenshot?.map((ss, index) => (
          <img src={ss} alt="" className="w-[40%] min-w-64 border" key={index+1} />
        ))}
        <div className="flex flex-col gap-4">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="font-medium text-black bg-yellow p-2 w-fit hover:bg-yellow/[.0] hover:scale-105 hover:text-yellow duration-300">Open <i class="bi bi-link-45deg"></i></a>
          <Link to="/projects" className="font-medium text-white bg-blue p-2 w-fit hover:bg-blue/[.0] hover:scale-105 hover:text-blue duration-300">Back To Projects</Link>
        </div>
      </motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:0.5}} transition={{duration:0.3, delay:0.5, ease:"easeInOut"}} className="absolute right-12 flex flex-col gap-2 items-center max-md:hidden pointer-events-none">
          <div className={`w-0.5 h-12 duration-300 ${theme==="dark" ? "bg-black" : "bg-white"}`}></div>
          <div className={`select-none duration-300 ${theme==="dark" ? "" : "text-white"}`}>Scroll</div>
          <div className={`w-0.5 h-12 duration-300 ${theme==="dark" ? "bg-black" : "bg-white"}`}></div>
        </motion.div>
    </AnimatePresence>
  );
};

export default ProjectDetail;
