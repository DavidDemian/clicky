import React from "react";


const styles = {
    imgStyle: {
     width: 250,
     height: 150
    }
}


  

function PlayerCard(props) {
 
  return (

    <div style={styles.imgStyle} className="card" onClick={props.handleClick}>

      <div style={styles.imgStyle} className="img-container">

        <img style={styles.imgStyle} src={props.image} value={props.id}  />

      </div>

    </div>
  );
}

export default PlayerCard;