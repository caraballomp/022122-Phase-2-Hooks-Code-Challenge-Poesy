import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems}) {
  return (
    <div className="poems-container">
{poems.map(poems => <Poem key={poems.id} poems={poems}/>)}

</div>
  );
}

export default PoemsContainer;
