
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "Organizational Strategy and Projects";
    const filePath = "https://anansi-elearning-files-400.onrender.com/level400/general/projectmanagement/slides/Lecture 02-Organizational Strategy and Projects.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

