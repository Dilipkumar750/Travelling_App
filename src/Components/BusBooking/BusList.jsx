import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from "react-icons/fa";
import TicketCard from '../TicketCard';
import { Link, useNavigate } from 'react-router-dom';
import busimg from '../../assets/bus.png'
import { API_URL } from '../../constant';
import axios from 'axios';


function BusList() {
    const navigate = useNavigate();
    const [array, setArray] = useState([])
  
    const storedData = JSON.parse(localStorage.getItem("BusSearchData"));
    if (!storedData) {
      alert("something went wrong try again");
      return null;
    }
    const from = storedData?.fromLocation
    const to = storedData?.toLocation
//   console.log(array)
    useEffect(() => {
      handleSubmit()
    }, [storedData])
  
    const handleSubmit = async () => {
      try {
        const response = await axios.post(`${API_URL}/booking/bus/get`, { from, to });
        setArray(response.data)
      } catch (err) {
        alert('something went wrong , try again');
      }
    };
  
    const goBack = () => {
      navigate(-1);
    };
    return (
        <div style={{ backgroundColor: "#F3E8D6", padding: '1rem', height: "100vh" }}>
            <div className="d-flex align-items-center mb-4">
                <FaArrowLeft className="fs-4 me-3 text-warning" onClick={goBack} />
                <h2 className="text-dark">Select Your Bus</h2>
            </div>
            <section style={{ padding: "30px 0" }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                    <img src={busimg} alt="" style={{ width: '50px',height:'50px',transform:'scaleX(-1)' }} />
                </div>
                <div style={{ borderTop: "1px dashed black", width: '100%', height: '20px', position: 'relative', }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', position: 'absolute', width: '100%', top: '-30px' }}>
                        <div style={{ backgroundColor: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'grid', alignItems: 'center', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }} >
                            CHE
                        </div>
                        <div style={{ backgroundColor: 'white', width: '50px', height: '50px', borderRadius: '50%', display: 'grid', alignItems: 'center', textAlign: 'center', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px' }} >
                            CHE
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="row g-3">
                    <div className="col-6">
                        <Button style={{ width: '100%', backgroundColor: "white", color: 'black', border: '0' }}>{storedData.departureDate}</Button>
                    </div>
                    <div className="col-6">
                        <Button style={{ width: '100%', backgroundColor: "white", color: 'black', border: '0' }}>{storedData.travellers}</Button>
                    </div>
                </div>
                    <div className="">
                        <Button style={{ width: '100%', backgroundColor: "#f08e2d", border: '0' }}>Economy</Button>
                    </div>
            </section>
            <section style={{ display: 'grid', gap: '1rem' }}>
            {
          array.map((data) => {
            return <Link key={data._id} to={`/BusDetails/${data._id}`} style={{textDecoration:'none'}}><TicketCard data={data} /></Link>
          })
        }
            </section>
        </div>
    )
}

export default BusList