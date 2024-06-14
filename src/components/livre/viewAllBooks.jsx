import * as React from 'react';

const AllBooks = () => {
    return(
        
        <div className="d-flex align-items-center bg-light justify-content-center" style={{height: "250px"}}>
            <h3>TOUS LES LIVRES <hr /></h3>
            <div>
                <div className="p-2 m-2 bg-info text-white shadow rounded-2">Flex item</div>
                <div className="p-2 m-2 bg-info text-white shadow rounded-2">Flex item</div>
                <div className="p-2 m-2 bg-info text-white shadow rounded-2">Flex item</div>
            </div>
            <h3>DISPONIBLES <hr /></h3>

            <h3>NON DISPONIBLE <hr /></h3>

        </div>
    )
}
export default AllBooks