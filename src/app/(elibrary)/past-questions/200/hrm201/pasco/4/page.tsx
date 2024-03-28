
import DocxViewerComponent from '@/components/elibrary/DocxViewerComponent'



export default function ReadFile(){

    const title = "HRM__.Passco Daakyehene";
    const filePath = "https://anansi-elearning-files-200.onrender.com/level200/hrm/pasco/HRM__.Passco Daakyehene.pdf#toolbar=0";
    
    return(
        <>
        
            <DocxViewerComponent fileTitle={ title } fileUrl={ filePath } />
    
        </>
    )     
    
}

