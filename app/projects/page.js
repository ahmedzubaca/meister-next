import AllProjects from "@/components/Projects/AllProjects";
import { getProjects } from "@/lib/dataFromDb/projectsFromDb";

export const metadata = {
  title: 'Projekti',
  description: 'Uspješno realizujemo projekte od relativno jednostavnih do najzahtjevnijih.' + 
  'Izgradili smo više od 250 000 metara kvadratnih stambeno poslovnih prostora.'  
};

export default function ProjectsDisplay() {

  const projects = getProjects('cover');  

  return(    
    <AllProjects projectsData={projects} />    
  )
}