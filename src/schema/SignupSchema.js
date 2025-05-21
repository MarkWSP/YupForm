import * as Yup from 'yup';

export const SignupSchema = Yup.object({
  username: Yup.string()
    .min(3, "กรุณากรอกตัวอักษรอย่างน้อย 3 ตัว")
    .required("กรุณากรอกอีเมล")
    .matches(/^[a-zA-Z]{5,12}$/, "กรุณากรอก 5-12 ตัวอักษร"),

  nickname: Yup.string()
  .required("กรุณากรอก 3-10 ตัวอักษร")
  .min(3, ({ path, value }) =>
      `ตอนนี้มีแค่ ${value.length} ตัวอักษร กรุณากรอกความยาวระหว่าง 3-10 ตัวอักษร`
    )
  .max(10, ({ path, value }) =>
      `ตอนนี้มีแค่ ${value.length} ตัวอักษร`
    ),

  password: Yup.string()
    .min(6, ({ path, value }) =>
      `${path} ต้องมีอย่างน้อย 6 ตัว ตอนนี้มีแค่ ${value.length}`
    )
    .required("กรุณากรอกรหัสผ่าน"),

  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password")], "กรอกรหัสผ่านอีกครั้งให้ตรงกัน")
    .required("กรุณากรอกรหัสผ่านให้ตรงกัน"),

    age: Yup.number()
  .typeError("กรุณากรอกตัวเลข")
  .min(13, "กรุณากรอกตัวที่มากกว่า 13")
  .required('กรอกตัวเลขที่มากกว่า 13'),

  phone: Yup.string()
  .matches(/^\d{10}$/, "เบอร์โทรต้องมี 10 ตัวเลข"),

  terms: Yup.boolean().oneOf([true], "กรุณายอมรับเงื่อนไขก่อนสมัคร")
});