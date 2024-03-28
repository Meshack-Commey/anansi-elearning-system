
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "Coordination and Subordination";
    const filePath = "https://anansi-elearning-files.onrender.com/level100/general/comskills/slides/coordinationandsubordination.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

