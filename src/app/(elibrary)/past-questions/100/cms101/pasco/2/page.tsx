
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "Communicative Skills Pasco #2";
    const filePath = "https://anansi-elearning-files.onrender.com/level100/general/comskills/pasco/com-skills-pasco.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}
