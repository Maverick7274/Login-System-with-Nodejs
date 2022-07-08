import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      password2: '',
    })

    const {name, email, password, password2} = formData

    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
    
    const onSubmit = (e) => {
      e.preventDefault()
    }

    return <>
    <div className= "registration">
      <section className="heading">
        <h2>
          <FaUser />Register
        </h2>
        <p>Please Create an Account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-content">
            <div className="placeholder">
              Name:
            </div>
            <div className="form-group">
              <input type="text" className='form-control' id='name' name='name' value={name} placeholder="Enter Your Name" onChange={onChange}/>
            </div>
            <div className="placeholder">
              E-Mail:
            </div>
            <div className="form-group">
              <input type="text" className='form-control' id='email' name='email' value={email} placeholder="Enter Your E-Mail" onChange={onChange}/>
            </div>
            <div className="placeholder">
              Password:
            </div>
            <div className="form-group">
              <input type="password" className='form-control' id='password' name='password' value={password} placeholder="Enter Your Password" onChange={onChange}/>
            </div>
            <div className="placeholder">
              Confirm Password:
            </div>
            <div className="form-group">
              <input type="password" className='form-control' id='password2' name='password2' value={password2} placeholder="Confirm Your Password" onChange={onChange}/>
            </div>
          </div>
          <div className="form-btn">
            <button type='submit' className='btn btn-thick'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
    </>
}

export default Register