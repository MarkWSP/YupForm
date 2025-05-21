import { useState } from "react"
import { loginSchema } from "../schema/loginSchema"
import { yupToFormErrors } from "../utils/yupToFormErrors"


export default function LoginForm() {
  const styles = {
    textError: 'text-red-500 font-medium'
  }

  const [form, setForm] = useState({
    email: '',
    password: '',
    day: '',
    age: ''
  })

  const [errors, setErrors] = useState({})

const handleChange = (e) => {
  setForm({...form, [e.target.name] : e.target.value})
}

const handleSubmit = async (e) => {
  e.preventDefault();
  console.log(e)
  try {
    await loginSchema.validate(form, {abortEarly: false})
    alert("Successfully Registered")
    setErrors({});
  } catch(err) {
    console.log(err)
    const errorObj = yupToFormErrors(err)
    setErrors(errorObj)
    }
}



  return (
    <div className="p-10 bg-amber-100 rounded-2xl shadow-2xl">
     <p className="text-2xl font-bold pb-10 text-center">CC 20 Registration Form</p>
     <form onSubmit={handleSubmit} className="space-y-2 border-1 rounded-lg p-8 bg-blue-50">

      <div className="flex flex-col gap-2">
      <label>Email:</label>
      <input className="border-1 rounded-lg pl-2 bg-white"
       type='email' name='email'
       value={form.email} 
       placeholder="Enter Your Email"
       onChange={handleChange} />
       <p className={styles.textError}>{errors.email}</p>
      </div>

       <div className="flex flex-col gap-2">
      <label>Password:</label>
      <input className="border-1 rounded-lg pl-2 bg-white" 
      type='password' name='password'
      value={form.password} 
      placeholder="Enter Your Password"
      onChange={handleChange}/>
      <p className={styles.textError}>{errors.password}</p>
      </div>

       <div className="flex flex-col gap-2">
      <label>Day:</label>
      <input className="border-1 rounded-lg pl-2 bg-white"
      name='day'
       value={form.day}
       placeholder="Enter Your Date" 
       onChange={handleChange} />
       <p className={styles.textError}>{errors.day}</p>
      </div>

       <div className="flex flex-col gap-2">
      <label>Age:</label>
      <input className="border-1 rounded-lg pl-2 bg-white"
      name='age'
       value={form.age} 
       placeholder="Enter Your Age"
       onChange={handleChange} />
       <p className={styles.textError}>{errors.age}</p>
      </div>

      <button className="outline-1 text-black px-4 py-2 rounded" type="submit">Register</button>

     </form>
    </div>
  )
}