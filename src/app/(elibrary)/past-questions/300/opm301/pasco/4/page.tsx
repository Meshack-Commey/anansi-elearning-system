
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "OPERATIONS MANAGEMENT QUIZ";
    const filePath = "https://anansi-elearning-files-300.onrender.com/level300/general/operationsmanagement/pasco/OPERATIONS MANAGEMENT QUIZ.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

