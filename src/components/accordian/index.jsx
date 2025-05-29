// single selection
// multiple selection
import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);                     // for storing multiple ids to open

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);   // if the id is selected again close answer 
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMultiple = [...multiple];                                //here we copy the array of muultiple id to cpymultiple
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId); //finding the index of clicked dataid in array or it is present or not
    console.log(findIndexOfCurrentId);                              // -1 OUTPUT when not present
    if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(cpyMultiple);
  }
  console.log(selected, multiple);
  return (
    <div className="Wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multiple Selection
      </button>
      <div className="Accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className=" Item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className=" title"
              >
                <h3> {dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div> No data found</div>
        )}
      </div>
    </div>
  );
}
