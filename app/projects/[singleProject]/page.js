import ProjectsDetails from '@/components/Projects/ProjectDetails';
import PageTransition from '@/lib/animations/pageTransition';
import { getProjectsDataById } from '@/lib/dataFromDb/projectsFromDb';


export default function SingleProject({params}) {
  const projectDetails = getProjectsDataById(params.singleProject); 
  
  return (
    <PageTransition>
      <ProjectsDetails projectDetails = { projectDetails } />
    </PageTransition>
  )
}