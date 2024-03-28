
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "Coffee Bar buz concept -TeamCastyScholars";
    const filePath = "https://anansi-elearning-files-400.onrender.com/level400/general/enterpreneurship/pasco/Coffee Bar buz concept -TeamCastyScholars.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

