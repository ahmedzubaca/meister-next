import ProjectsDetails from '@/components/projects/ProjectDetails';
import { getProjectsDataById } from '@/lib/dataFromDb/projectsFromDb';

export default function SingleProject({params}) {
  const projectDetails = getProjectsDataById(params.singleProject); 

  console.log('singleProject page')
  
  return (   
    <ProjectsDetails projectDetails = { projectDetails } /> 
  )
}