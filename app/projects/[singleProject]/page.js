import ProjectsDetails from '@/components/projects/ProjectDetails';
import { getProjectsDataById } from '@/lib/dataFromDb/projectsFromDb';

export default function SingleProject({params}) {
  const projectDetails = getProjectsDataById(params.singleProject); 

  return (   
    <ProjectsDetails projectDetails = { projectDetails } /> 
  )
}