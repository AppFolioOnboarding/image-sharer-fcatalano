import React from 'react';

export default function Feedback() {
  return (
    <form style={{display: "flex", flexDirection: "column", flexWrap: "wrap", alignContent: "center", alignItems: "flex-start", justifyContent: "space-between", height: "250px"}}>
      <label htmlFor={"name"} style={{marginBottom: "0px"}} >Your Name:</label>
      <input type="text" name="name" size={75}/>
      <label htmlFor={"comments"} style={{marginBottom: "0px"}} >Comments:</label>
      <textarea name="comments" rows={5} cols={75}/>
      <input type="submit" value={"Submit"} style={{color: "white", backgroundColor: "blue"}} />
    </form>
  );
}
