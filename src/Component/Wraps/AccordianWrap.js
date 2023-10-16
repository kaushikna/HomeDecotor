import React, { useState } from 'react';
import counter from '../../images/counter.png';
import kitchen from '../../images/kitchen.png';
import room from '../../images/room.png';

const accrodionData = [
    {
        count: "01",
        title: "Counter Tops",
        wrapImg: counter,
        id: "One"
    },
    {
        count: "02",
        title: "Kitchen Cabinets",
        wrapImg: kitchen,
        id: "Two"
    },
    {
        count: "03",
        title: "Room Doors",
        wrapImg: room,
        id: "Three"
    }, {
        count: "04",
        title: "TV Units",
        wrapImg: counter,
        id: "Four"
    }, {
        count: "05",
        title: "Wardrobes",
        wrapImg: kitchen,
        id: "Five"
    }, {
        count: "06",
        title: "Storage / Cabinetry",
        wrapImg: room,
        id: "Six"
    }, {
        count: "07",
        title: "Tables",
        wrapImg: counter,
        id: "Seven"
    }, {
        count: "08",
        title: "Shelving Units",
        wrapImg: kitchen,
        id: "Eight"
    },
]

const AccordianWrap = () => {
    const [idSelect, SetIdSelect] = useState(0);

    const handleChange = (id) => {
        SetIdSelect(id);
    }

    return (
        <div className='accordianMain'>
            <div className="accordion" id="accordionExample">
                {accrodionData.map((Data, id) => {
                    return (
                        <div className="accordion-item">
                            <h2 className="accordion-header" id={`heading${id}`}>
                                <button onClick={() => handleChange(id)} className={id === idSelect ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded={id === idSelect ? "true" : "false"} aria-controls={`collapse${id}`}>
                                    <p>{Data.count}</p>  {Data.title}
                                </button>
                            </h2>
                            <div id={`collapse${id}`} className={id === idSelect ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={`heading${id}`} data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <img src={Data.wrapImg} alt='counter' />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AccordianWrap


