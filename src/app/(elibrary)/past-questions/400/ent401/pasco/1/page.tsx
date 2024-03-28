
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "B-PLAN NEW";
    const filePath = "https://anansi-elearning-files-400.onrender.com/level400/general/enterpreneurship/pasco/B-PLAN NEW.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

