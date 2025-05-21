import * as Yup from 'yup';

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("รูปแบบอีเมลไม่ถูกต้อง")
    .required("กรุณากรอกอีเมล"),

  // password: Yup.string().min(6, "รหัสผ่านต้องมีอย่างน้อย 6 ตัว").required("กรุณากรอกรหัสผ่าน")
  

  password: Yup.string()
    .min(6, ({ path, value }) =>
      `${path} ต้องมีอย่างน้อย 6 ตัว ตอนนี้มีแค่ ${value.length}`
    )
    .required("กรุณากรอกรหัสผ่าน"),

  day: Yup.number()
  .typeError("กรุณากรอกตัวเลข")
  .min(1, "กรุณากรอกตัวเลขระหว่าง 1-31")
  .max(31, "กรุณากรอกตัวเลขระหว่าง 1-31")
  .required('กรอกตัวเลข 1-31'),

    age: Yup.number()
  .typeError("กรุณากรอกตัวเลข")
  .min(10, "กรุณากรอกตัวที่มากกว่า 10")
  .required('กรอกตัวเลขที่มากกว่า 10')
});