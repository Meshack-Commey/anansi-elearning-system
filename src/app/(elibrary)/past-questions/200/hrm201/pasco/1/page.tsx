
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "HRM EXAM PAST QUESTIONS";
    const filePath = "https://anansi-elearning-files-200.onrender.com/level200/hrm/pasco/HRM EXAM PAST QUESTIONS.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

