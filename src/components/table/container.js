import React, { useState, useEffect } from "react";
import { apiData } from "./api-data";
import { SensorTable } from "./table";
import './styles.css'

const axios = () => {
  return new Promise(res => {
    setTimeout(() => {
      return res({ data: apiData });
    }, 3000);
  });
};

function SensorContainer() {
    const [sensors, setSensors] = useState([]);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      console.log("componentDidMount");
      setLoading(true);
      axios()
        .then(response => {
          const requiredDataFromResponse = response.data;
          const data = requiredDataFromResponse.map(eachSensorItem => ({
            id: eachSensorItem.id,
            name: eachSensorItem.name,
            price: eachSensorItem.price,
            status: eachSensorItem.status
          }));
          setSensors(data);
        })
        .catch(error => {
          setSensors([]);
          console.log(error);
        })
        .finally(() => setLoading(false));
    }, []);
  
    const columns = React.useMemo(
      () => [
        {
          Header: "ID",
          accessor: "id"
        },
        {
          Header: "Name",
          accessor: "name"
        },
        {
          Header: "Price",
          accessor: "price"
        },
        {
          Header: "Status",
          accessor: "status"
        }
      ],
      []
    );
  
    if (sensors.length === 0 && !loading) {
      return <div>No Senors data available</div>;
    }
  
    return (
      <div>
        {loading && <span>Please wait we are fetching data</span>}
        <SensorTable columns={columns} data={sensors} />
      </div>
    );
  }

export { SensorContainer }