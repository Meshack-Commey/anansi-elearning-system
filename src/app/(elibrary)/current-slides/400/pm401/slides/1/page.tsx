
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "Introduction to Project Management";
    const filePath = "https://anansi-elearning-files-400.onrender.com/level400/general/projectmanagement/slides/Lecture 01-Introduction to PM.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

