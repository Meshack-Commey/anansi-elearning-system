
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "Overview of Production and Operations Management";
    const filePath = "https://anansi-elearning-files-300.onrender.com/level300/general/operationsmanagement/slides/chapter 1 Overview of Production and Operations Management.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

