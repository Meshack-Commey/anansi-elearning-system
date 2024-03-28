
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "Libraries";
    const filePath = "https://anansi-elearning-files.onrender.com/level100/general/infolit/slides/Session 2 - Libraries -Compatibility Mode-.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

