export const projects = [];

export function addProject(name = undefined, timespan = undefined, description = undefined, github = undefined, website = undefined, youtube = undefined)
{
  const currProject = { name, timespan, description, github, website, youtube };
  projects.push(currProject);
  return currProject;
}