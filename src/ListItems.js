import React from 'react'
import './ListItems.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'


const ListItems = (props) => {
     const fixdata = props.insertData;
        const printdata = fixdata.map( item => {
               return<div className="list" key={item.key}>
                <p>
                  <input type="text"
                      id={item.key}
                      value={item.text}
                      onChange={ e => {
                        props.setUpdates(e.target.value, item.key)
                      }  
                    }
                  />
                <span>
                  <FontAwesomeIcon className="faicons" icon="trash"
                    onClick={() => props.deleteitem(item.key)}/>
                </span>
                </p> 
              </div>
           })
  return (
    <div>
      <FlipMove duration={400} easing="ease-in-out">
            {printdata}
        </FlipMove>
    </div>
  )
}

export default ListItems
