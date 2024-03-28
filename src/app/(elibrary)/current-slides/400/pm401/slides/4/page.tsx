
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "Leadership";
    const filePath = "https://anansi-elearning-files-400.onrender.com/level400/general/projectmanagement/slides/Lecture 04-Leadership _ Project Management.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

