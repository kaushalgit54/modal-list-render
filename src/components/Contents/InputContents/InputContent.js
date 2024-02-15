import React, {useState, useRef} from "react";
import classes from './InputContent.module.css';
import Button from "../../UI/Buttons/Button";
import ErrorWindow from "../../ModalWindows/ShowErrorWindow/ErrorWindow";
import Wrapper from "../../Helpers/Wrapper";

const InputContent = (props)=>{
    // const [enteredUserName, setuserName] = useState('');
    // const [enteredUserAge, setuserAge] = useState('');
    const [isValid, setIsValid] = useState(false);
    let [error, seterror]  = useState('');
    const nameInputRef =  useRef();
    const ageInputRef =  useRef();

     
     
   const formSubmitHandler = (event)=>{
      event.preventDefault();
      const enteredUserName =  nameInputRef.current.value;
     const enteredUserAge =  ageInputRef.current.value;
      if(enteredUserAge.trim().length == 0 || enteredUserName.trim().length == 0 ){
         seterror({
            title: 'Invalid Input',
            message: 'Please Enter a valid Name and Age(Non-empty values)',
         });
        setIsValid(true);
        return;
      }
      if(+enteredUserAge < 1){
        seterror({
            title: 'Invalid Age',
            message: 'Please Enter a valid Age  (> 0)',
        });
        setIsValid(true);
        return;
    }
      const userData = {
        username: enteredUserName,
        userage: enteredUserAge,
        id:  Math.random().toString(),
      }
    props.onaddUser(userData);
    console.log(enteredUserName);
    console.log(enteredUserAge);
    
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
   }
   
    const cancelWidowHandler = ()=>{
        setIsValid(false);
    }
    const modal = (isValid?<ErrorWindow title={error.title} message={error.message} onCancel = {cancelWidowHandler}/>:'');
    return (<Wrapper>
             {modal}
             <form onSubmit={formSubmitHandler} className={classes.inputbox}>
            <div className="form-labels">
            <label>Username</label><br/><input type="text" className={classes.input} ref={nameInputRef}/><br />
            <label>Age (Years)</label><br /><input type="number" className={classes.input} ref = {ageInputRef} /><br/>
            </div>
            <Button type='submit'>Add user</Button>
        </form>
        {/* Instead of Wrapper we can use React Fragment  */}
        </Wrapper>
    );
};

export default InputContent;