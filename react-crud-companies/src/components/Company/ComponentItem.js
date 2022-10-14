const ComponentItem=({company})=>{
    return(
        <div className="col-md-4 mb-4">
            {company.name === undefined || company.name === "" ? (
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>) : (
            <div className="card card-body">
                <h3 className="card title" ><a href={company.website}><strong>{company.name}</strong></a></h3>
                <p className="card ">La compañia {company.name}  fue fundada en el año de {company.foundation} en {company.location}</p>
            </div>  )}
        </div> 

    
    )
}
export default ComponentItem