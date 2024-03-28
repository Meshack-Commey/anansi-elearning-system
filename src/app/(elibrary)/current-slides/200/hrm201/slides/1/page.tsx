
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "Learning Theories and Organisations";
    const filePath = "https://anansi-elearning-files-200.onrender.com/level200/hrm/slides/HRM_Week_Seven_Learning_Theories_and_Organisations.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

