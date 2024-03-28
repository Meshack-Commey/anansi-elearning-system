
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "Project Management";
    const filePath = "https://anansi-elearning-files-400.onrender.com/level400/general/projectmanagement/pasco/PM ASS FULL.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

