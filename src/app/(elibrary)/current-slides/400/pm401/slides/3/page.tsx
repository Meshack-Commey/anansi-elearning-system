
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "Project Selection Portfolio Mgt";
    const filePath = "https://anansi-elearning-files-400.onrender.com/level400/general/projectmanagement/slides/Lecture 03-Project Selection _ Portfolio Mgt.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

