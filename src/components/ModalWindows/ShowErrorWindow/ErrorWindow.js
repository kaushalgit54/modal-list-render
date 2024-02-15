import React, {useState} from "react";
import classes from './ErrorWindow.module.css';
import Button from "../../UI/Buttons/Button";
import ReactDOM from "react-dom";
const Backdrop = props=>{
   return <div className={classes.backdrop} onClick={props.onCancelProp}></div>;
};

const ModalOverlay = props=>{
  return (
   <div className={classes.errorwindow}>
       <header>{props.title}</header>
       <button className={classes.cross} onClick={props.onCancelProp}>&times;</button>
       <h3>{props.message}</h3>
       <Button onClick={props.onCancelProp} className={classes.btn}>Okay</Button>
  </div>);
}
const ErrorWindow = (props)=>{
    
    return ( 
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop onCancelProp={props.onCancel}/>,document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay onCancelProp={props.onCancel} title={props.title} message={props.message}/>,document.getElementById('overlay-root'))}
    </React.Fragment>
    );
};
export default ErrorWindow;