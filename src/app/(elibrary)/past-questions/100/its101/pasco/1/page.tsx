
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "TRIAL QUESTION 1";
    const filePath = "https://anansi-elearning-files.onrender.com/level100/general/infolit/pasco/TRIAL QUESTION 1.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

