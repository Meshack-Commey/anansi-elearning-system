
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "Entrepreneurial financing";
    const filePath = "https://anansi-elearning-files-400.onrender.com/level400/general/enterpreneurship/slides/9. Entrepreneurial financing.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

