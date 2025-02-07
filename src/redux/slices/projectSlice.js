import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
        id: 1,
        name: "Personal AI",
        sku: "personal-ai",
        tech: [
          "ReactJS",
          "Redux",
          "Tailwind",
          "API",
          "Axios"
        ],
        description: "Personal AI with LLM by Groq.",
        date: "2024.11",
        url: "https://oreoryza-ai.vercel.app/",
        img: "https://pbs.twimg.com/media/GhorwcEa4AATuiS?format=png&name=large",
    },
    {
        id: 2,
        name: "Personal Blog",
        sku: "personal-blog",
        tech: [
          "ReactJS",
          "Redux",
          "Tailwind",
          "API",
          "Axios",
          "PWA"
        ],
        description: "Personal blog about games.",
        date: "2024.11",
        url: "https://oreoryza-blog-lumos.vercel.app/blog",
        img: "https://pbs.twimg.com/media/GhorwcGaUAAcD_O?format=png&name=large",
    },
    {
        id: 3,
        name: "Dsgnr.",
        sku: "dsgnr",
        tech: [
          "ReactJS",
          "Redux",
          "Tailwind",
          "API",
          "Axios"
        ],
        description: "Design agency website. The content is created using a CMS website.",
        date: "2024.12",
        url: "https://oz-minimalist.vercel.app/",
        img: "https://pbs.twimg.com/media/GhorwcFaAAAMbA-?format=png&name=large",
    },
    {
        id: 4,
        name: "Exclusive",
        sku: "exclusive",
        tech: [
          "ReactJS",
          "Redux",
          "Tailwind",
          "PWA"
        ],
        description: "Online shopping marketplace website. (ft. Kevin Pangestu)",
        date: "2025.01",
        url: "https://exclusive-1.vercel.app/",
        img: "https://pbs.twimg.com/media/GhorwcFbwAAReC9?format=png&name=large",
    },
  ],
  projectPreview:"",
  project: {},
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjectPreview: (state, action) => {
      state.projectPreview = action.payload;
    },
    setProject: (state, action) => {
      const project = state.projects.find((project) => project.sku === action.payload);
      state.project = project;
    },
  }
})

export const {setProjectPreview, setProject} = projectSlice.actions;
export default projectSlice.reducer;