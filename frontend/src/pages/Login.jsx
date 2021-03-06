import {useState, useEffect} from 'react'
import {FaSignInAlt, FaSign} from 'react-icons/fa'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {FaUser} from 'react-icons/fa'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'


function Login() {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
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

      const userData = {
        email,
        password
      }

      dispatch(login(userData))
    }

    if(isloading) {
      return <Spinner />
    }


    return <>
    <div className= "registration login-main">
      <section className="heading login-heading">
        <h2>
          <div className='fa'>
            <FaSign />
              Login
          </div>
        </h2>
        <p>Please Login to your Existing Account</p>
      </section>
      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className="form-content">
            <div className="placeholder login">
              E-Mail:
            </div>
            <div className="form-group">
              <input type="text" className='form-control' id='email' name='email' value={email} placeholder="Enter Your E-Mail" onChange={onChange}/>
            </div>
            <div className="placeholder login">
              Password:
            </div>
            <div className="form-group">
              <input type="password" className='form-control' id='password' name='password' value={password} placeholder="Enter Your Password" onChange={onChange}/>
            </div>
          </div>
          <div className="form-btn">
            <button type='submit' className='btn btn-thick login-btn'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
    </>
}

export default Login