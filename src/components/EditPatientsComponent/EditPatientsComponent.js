import React, { Component } from 'react'
import './EditPatientsComponent.css'


class EditPatientsComponent extends Component {
    constructor(props)
    {
        super(props)

        this.state = {
            patientName : '',
            patientID : '',
            patientAge:'',
            patientGender:'',
            patientCity:'',
            patientMobile:'',
            patientEmail:''
        }
    }

    patientNameHandler = (event) => {
        this.setState({
            patientName : event.target.value
        })
    }
    patientIDHandler = (event) => {
        this.setState({
            patientID : event.target.value
        })
    }
    patientAgeHandler = (event) => {
        this.setState({
            patientAge : event.target.value
        })
    }
    patientGenderHandler = (event) => {
        this.setState({
            patientGender : event.target.value
        })
    }
    patientCityHandler = (event) => {
        this.setState({
            patientCity : event.target.value
        })
    }
    patientMobileHandler = (event) => {
        this.setState({
            patientMobile : event.target.value
        })
    }
    patientEmailHandler = (event) => {
        this.setState({
            patientEmail : event.target.value
        })
    }

    patientIDValidator = () => {
        if (this.state.patientID.length !== 0)
        {
            fetch('http://localhost:3500/api/v1/patients/validate',{
                method:'POST',
                crossDomain: true,
                headers: {
                    'Content-type':'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify({
                    patientID : this.state.patientID
                })
            })
            .then((response) => response.json())
            .then((data) => 
            {
                this.setState({
                    patientName : data.patientName,
                    patientAge: data.patientAge ,
                    patientGender: data.patientGender ,
                    patientCity: data.patientCity ,
                    patientMobile: data.patientMobile ,
                    patientEmail : data.patientEmail
                })
            }
        )
        }
    }

    formSubmitHandler = (event) =>{
        event.preventDefault()

        fetch('http://localhost:3500/api/v1/patients',{
        method:'PATCH',
        crossDomain: true,
        headers: {
            'Content-type':'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            patientName : this.state.patientName,
            patientID : this.state.patientID ,
            patientAge:this.state.patientAge ,
            patientGender:this.state.patientGender ,
            patientCity:this.state.patientCity ,
            patientMobile:this.state.patientMobile ,
            patientEmail :this.state.patientEmail 
        })
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.message)
            {
                alert(data.message)
            }
            else{
                alert(`Data of ${this.state.patientName} is updated successfully`)
                window.location.href = '/'
            }
        })
    }

  render() {
    const {patientName, patientID, patientAge, patientGender, patientCity, patientMobile, patientEmail} = this.state
    return (
        <form className='form-container' onSubmit={this.formSubmitHandler}>
            <h2>Updating patient data</h2>

        <div className='form-group'>
            <label>Patient ID</label>
            <input
            type='text'
            placeholder='Enter the patient ID'
            value={patientID}
            onChange={this.patientIDHandler}
            required
            />
        </div>
        <div>
            <button onClick={this.patientIDValidator}>Check</button>
        </div>

        <div className='form-group'>
            <label>Patient Name</label>
            <input
            type='text'
            placeholder='Enter the patient name'
            value={patientName}
            onChange={this.patientNameHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>Patient Age</label>
            <input
            type='text'
            pattern='[0-9]{2}'
            placeholder='Enter the patient age'
            value={patientAge}
            onChange={this.patientAgeHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>Patient Gender</label>
            <select
            value={patientGender}
            onChange={this.patientGenderHandler}
            required
            >
            <option value="">-- Please select --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
            </select>
        </div>

        <div className='form-group'>
            <label>Patient City</label>
            <input
            type='text'
            placeholder='Enter the patient city'
            value={patientCity}
            onChange={this.patientCityHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>Patient Mobile </label>
            <input
            type='text'
            placeholder='Enter the patient mobile'
            pattern='[789][0-9]{9}'
            value={patientMobile}
            onChange={this.patientMobileHandler}
            required
            />
        </div>

        <div className='form-group'>
            <label>Patient Email</label>
            <input
            type='text'
            placeholder='Enter the patient Email'
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={patientEmail}
            onChange={this.patientEmailHandler}
            required
            />
        </div>

        <div>
            <button type='submit'>Add</button>
        </div>
        </form>
        
    )
  }
}

export default EditPatientsComponent