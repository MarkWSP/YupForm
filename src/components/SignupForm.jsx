import { yupToFormErrors } from "../utils/yupToFormErrors"
import { useState, useRef } from "react"
import {SignupSchema} from "../schema/SignupSchema"

export default function SignupForm() {
  const styles = {
    textError: 'text-red-500 font-medium'
  }

  const [form, setForm] = useState({
    username: '',
    nickname: '',
    password: '',
    confirmpassword: '',
    age: '',
    terms: false,
    phone: ""
  })

  const refs = {
    username: useRef(null) ,
    nickname: useRef(null),
    password: useRef(null),
    confirmpassword: useRef(null),
    age: useRef(null),
    terms: useRef(false),
    phone: useRef(null)
  }

  const [errors, setErrors] = useState({})

const handleChange = (e) => {
  const {name, type, value, checked } = e.target
  setForm({...form, [name] : type === 'checkbox' ? checked : value})
}

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(e)
  try {
    await SignupSchema.validate(form, {abortEarly: false})
    setErrors({});
    alert("Successfully Registered")
  } catch(err) {
    console.log(err)

    const errorObj = yupToFormErrors(err, refs)
    setErrors(errorObj)
    }
}



  return (
    <div className="p-10 bg-amber-100 rounded-2xl shadow-2xl">
     <p className="text-2xl font-bold pb-10 text-center">CC 20 Registration Form</p>
     <form onSubmit={handleSubmit} className="space-y-2 border-1 rounded-lg p-8 bg-blue-50">

      <div className="flex flex-col gap-2">
      <label>Username:</label>
      <input className="border-1 rounded-lg pl-2 bg-white"
       type='text' name='username'
       value={form.username} 
       placeholder="Enter Your Username"
       onChange={handleChange}
       ref={refs.username} />
       <p className={styles.textError}>{errors.username}</p>
      </div>

       <div className="flex flex-col gap-2">
      <label>Nickname:</label>
      <input className="border-1 rounded-lg pl-2 bg-white" 
      type='text' name='nickname'
      value={form.nickname} 
      placeholder="Enter Your Nickname"
      onChange={handleChange}
      ref={refs.nickname} />
      <p className={styles.textError}>{errors.nickname}</p>
      </div>

       <div className="flex flex-col gap-2">
      <label>Password:</label>
      <input className="border-1 rounded-lg pl-2 bg-white" 
      type='password' name='password'
      value={form.password} 
      placeholder="Enter Your Password"
      onChange={handleChange}
      ref={refs.password} />
      <p className={styles.textError}>{errors.password}</p>
      </div>

       <div className="flex flex-col gap-2">
      <label>Confirm Password:</label>
      <input className="border-1 rounded-lg pl-2 bg-white" 
      type='password' name='confirmpassword'
      value={form.confirmpassword} 
      placeholder="Enter Your Password again"
      onChange={handleChange}
      ref={refs.confirmpassword} />
      <p className={styles.textError}>{errors.confirmpassword}</p>
      </div>

       <div className="flex flex-col gap-2">
      <label>Age:</label>
      <input className="border-1 rounded-lg pl-2 bg-white"
      name='age'
      type='number'
       value={form.age} 
       placeholder="Enter Your Age"
       onChange={handleChange}
       ref={refs.age} />
       <p className={styles.textError}>{errors.age}</p>
      </div>

      <div className="flex flex-col gap-2">
      <label>Telephone:</label>
      <input className="border-1 rounded-lg pl-2 bg-white"
      name='phone'
      type='number'
       value={form.phone} 
       placeholder="Enter Your Phone Number"
       onChange={handleChange}
       ref={refs.phone} />
       <p className={styles.textError}>{errors.phone}</p>
      </div>

       <div className="flex flex-row gap-2">
      
      <input className="border-1 rounded-lg pl-2 bg-white"
      name='terms'
      type='checkbox'
       value={form.terms} 
       onChange={handleChange}
       ref={refs.terms} />
       <label>Terms & Condition</label>
       <p className={styles.textError}>{errors.terms}</p>
      </div>

      <button className="outline-1 text-black px-4 py-2 rounded" type="submit">Sign Up</button>

     </form>
    </div>
  )
}