
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "Developing Strategy, Missions And Competitiveness";
    const filePath = "https://anansi-elearning-files-300.onrender.com/level300/general/operationsmanagement/slides/chapter 4 Developing Strategy, Missions And Competitiveness.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

