
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "Introduction to Info Lit Skills";
    const filePath = "https://anansi-elearning-files.onrender.com/level100/general/infolit/slides/Session 1 information literacy -Compatibility Mode-.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

