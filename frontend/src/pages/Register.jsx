import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {FaUser} from 'react-icons/fa'
import { register, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function Register() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      password2: '',
    })

    const {name, email, password, password2} = formData


    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isloading, isError, isSuccess, message} = useSelector((state) => state.auth)

    useEffect(() => {
      if(isError){
        toast.error(message)
      }

      if(isSuccess || user){
        navigate('/')
      }

      dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])

    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }
    
    const onSubmit = (e) => {
      e.preventDefault()

      if(password !== password2){
        toast.error("Passwords Do not Match")
      } else{
        const userData = {
          name,
          email,
          password,
        }

        dispatch(register(userData))
      }
    }

    if(isloading) {
      return <Spinner />
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
              <input 
                    type="text"
                    className='form-control'
                    id='name'
                    name='name'
                    value={name}
                    placeholder="Enter Your Name"
                    onChange={onChange}/>
            </div>
            <div className="placeholder">
              E-Mail:
            </div>
            <div className="form-group">
              <input
                    type="text"
                    className='form-control'
                    id='email'
                    name='email'
                    value={email}
                    placeholder="Enter Your E-Mail"
                    onChange={onChange}/>
            </div>
            <div className="placeholder">
              Password:
            </div>
            <div className="form-group">
              <input
                    type="password"
                    className='form-control'
                    id='password'
                    name='password'
                    value={password}
                    placeholder="Enter Your Password"
                    onChange={onChange}/>
            </div>
            <div className="placeholder">
              Confirm Password:
            </div>
            <div className="form-group">
              <input
                    type="password"
                    className='form-control'
                    id='password2'
                    name='password2'
                    value={password2}
                    placeholder="Confirm Your Password"
                    onChange={onChange}/>
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