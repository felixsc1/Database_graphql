import { Consultant, Project } from "../db.js";

export const resolvers = {
  Query: {
    consultants: async () => await Consultant.findAll(),
    consultant: async (_, args) => await Consultant.findById(args.id),
    projects: async () => await Project.findAll(),
    project: async (_, args) => await Project.findById(args.id),
  },
  // the project field for a consultant needs a special resolver:
  Consultant: {
    projects: async (consultant) => {
      const projects = await Project.findAll((project) => {
        return consultant.projects.includes(project.id);
      });
      return projects;
    },
  },
};
