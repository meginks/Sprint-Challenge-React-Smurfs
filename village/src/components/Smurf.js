import React from 'react';

const Smurf = props => {
console.log(props);
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p> 
      <button onClick={(e)=> props.deleteSmurf(e, props.id)}>Feed Smurf to Gargamel!</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

