import AllProjects from "@/components/Projects/AllProjects";
import { getProjects } from "@/lib/dataFromDb/projectsFromDb";

export default function ProjectsDisplay() {

  const projects = getProjects('cover');  

  return(    
    <AllProjects projectsData={projects} />    
  )
}