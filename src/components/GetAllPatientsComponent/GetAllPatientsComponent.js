import React, { useState, useEffect } from 'react'
import PatientComponent from './PatientComponent'
import './GetAllPatientsComponent.css'

function GetAllPatientsComponent() {

    const [patients, setPatients] = useState([])

    const fetchAllPatients  = async() => {
        const response = await fetch('http://localhost:3500/api/v1/patients')
        const data = await response.json()
        console.log(data);
        setPatients(data)
    }

    useEffect(() => {
        fetchAllPatients()
    }, [])

  return (
    <div className='patients'>
        {patients.map(patient=>(
            <PatientComponent patient={patient}/>
        ))}
    </div>
  )
}

export default GetAllPatientsComponent