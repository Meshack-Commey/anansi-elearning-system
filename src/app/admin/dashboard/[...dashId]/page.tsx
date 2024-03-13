//importing all Dashboards



export default function AllDashes({ 
        params, 
    }:{
        params: {
        dashId: String[],
    }
}){
    if(params.dashId[1] === "home"){
        return(
            <>
                {params.dashId[1]} Dashboard
            </>
        )
    }
}