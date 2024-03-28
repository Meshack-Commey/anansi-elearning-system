
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "The Concept of Globalization";
    const filePath = "https://anansi-elearning-files-300.onrender.com/level300/general/operationsmanagement/slides/chapter 3 The Concept of Globalization.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

