

const AvailablePlants = ({ data }) => {
   
    return (
        <div className="plant-table">
            {(typeof data == 'undefined') ? (<>Loading...</>) :
                <div className="table-wrapper">
                    <h5>{data.common_name}</h5>
                    <table>
                        <tr>
                            <td>Botanical_name</td>
                            <td>{data.botanical_name}</td>
                        </tr>
                        <tr>
                            <td>Family</td>
                            <td>{data.family_name}</td>
                        </tr>
                        <tr>
                            <td>Native Area</td>
                            <td>{data.native_area}</td>
                        </tr>
                        <tr>
                            <td>Plant Type</td>
                            <td>{data.plant_type}</td>
                        </tr>
                        <tr>
                            <td>Sun Exposure</td>
                            <td>{data.sun_exposure}</td>
                        </tr>
                        <tr>
                            <td>Watering Schedule</td>
                            <td>{data.watering_schedule}</td>
                        </tr>
                    </table>
                </div>
            }

        </div>
    )
}

export default AvailablePlants