import React, {useState} from 'react';
import './App.css';
import InputContent from './components/Contents/InputContents/InputContent';
import OutputContent from './components/Contents/OutputContents/OutputContent';

import Card from './components/UI/Cards/Card';
const preUser = [
  {username: 'kaushal_001', userage: '21',id: 'id1'},
  {username: 'martin_g1', userage: '22',id: 'id2'},
];
function App() {

 const [userDetails, setUserDetails] = useState(preUser);
 let content = (<p style={{textAlign:'center'}}>No goals found Maybe add one!</p>);
 
 const addUserhandler = (userData)=>{
   setUserDetails((prevUserData) =>{
      return [...prevUserData,{username: userData.username, userage: userData.userage, id: Math.random().toString()}];
    }); 
 }
 const deleteItemHandler = (uId)=>{
    setUserDetails(prevUserData =>{
      const updatedData = prevUserData.filter(data => data.id !== uId);
      return updatedData;
    });
 }
 if(userDetails.length > 0){
  content = (<OutputContent items = {userDetails} onDeleteItem = {deleteItemHandler}/>)
 }
 const showErrorWindowhandler = (data)=>{

 }
  return (
    <>
    {/* Here we can also use React Fragmetns as <React.Fragment> */}
    <div className="App">
      <Card className="inputform">
        <InputContent onaddUser = {addUserhandler} onShowError = {showErrorWindowhandler}/>
      </Card>
      <Card className="output-box">
        {content}
      </Card>
    </div>
    </>
  );
}

export default App;
