import React from "react";

function Credit(props) {

return (<div className="card darken">
   <img className="credit-img" src={props.img} />
   <div className="text">
   <h1 className="name">{props.name}</h1>
   <p className="company">{props.company}</p>
   </div>
</div>
   )


}

export default Credit;