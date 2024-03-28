
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "Team Formation";
    const filePath = "https://anansi-elearning-files-400.onrender.com/level400/general/enterpreneurship/slides/7. Team formation.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

