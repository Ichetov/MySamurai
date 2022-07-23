import s from './FormController.module.css'


const FormControl = ({input, meta, ...props})=>{

  
   const showError = meta.touched && meta.error;
  
  return(
    <div className = {
      s.formControl + ' ' + (showError ? s.error : '')
    } >

     {props.children}
      {showError && <span>{meta.error}</span>}
      
    </div>
  )
}



export const Textarea = (props)=>{
 const {input, meta, ...restProps} = props
 const showError = meta.touched && meta.error;
  return(
    <FormControl {...props}><textarea {...input} {...restProps}/></FormControl> 
  )
}



export const Input = (props)=>{

 const {input, meta, child, ...restProps} = props
  return(

<FormControl {
  ...props
} > <input {...input} {...restProps}/></FormControl>

  )
}


// export const Input = ({input, meta, ...props})=>{
//  console.log(meta);
//  const showError = meta.touched && meta.error;
//   return(
//     <div className = {
//       s.formControl + ' ' + (showError ? s.error : '')
//     } >
//       <input {...input} {...props} />
//       {showError && <span>{meta.error}</span>}
      
//     </div>
//   )
// }


// export const Textarea = ({input, meta, ...props})=>{
//  console.log(meta);
//  const showError = meta.touched && meta.error;
//   return(
//     <div className = {
//       s.formControl + ' ' + (showError ? s.error : '')
//     } >
//       <textarea {...input} {...props} />
//       {showError && <span>{meta.error}</span>}

//     </div>
//   )
// }