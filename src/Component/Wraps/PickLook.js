import React, { useState } from 'react'
import kitchenLook1 from "../../images/kitchenLook1.png";
import kitchenLook2 from "../../images/kitchenLook2.png";
import kitchenLook3 from "../../images/kitchenLook3.png";
import kitchenLook4 from "../../images/kitchenLook4.png";
import kitchenLook5 from "../../images/kitchenLook5.png";
import LivingRoomLook1 from "../../images/LivingRoomLook1.png";
import LivingRoomLook2 from "../../images/LivingRoomLook2.png";
import LivingRoomLook3 from "../../images/LivingRoomLook3.png";
import LivingRoomLook4 from "../../images/LivingRoomLook4.png";
import LivingRoomLook5 from "../../images/LivingRoomLook5.png";
import bedroomLook1 from "../../images/bedroomLook1.png";
import bedroomLook2 from "../../images/bedroomLook2.png";
import bedroomLook3 from "../../images/bedroomLook3.png";
import bedroomLook4 from "../../images/bedroomLook4.png";
import bedroomLook5 from "../../images/bedroomLook5.png";
import bedroomLook6 from "../../images/bedroomLook6.png";
import labelDesign1 from "../../images/labelDesign1.png";
import labelDesign2 from "../../images/labelDesign2.png";
import './Wraps.scss'

const pickLabel = [
    {
        id: "1",
        key: "1",
        labelText: "Counter Tops",
        img: kitchenLook4,
        name: "kitchen"
    },
    {
        id: "2",
        key: "2",
        labelText: "Room Doors",
        img: bedroomLook4
    },
    {
        id: "3",
        key: "3",
        labelText: "TV Units",
        img: LivingRoomLook4
    },
    {
        id: "4",
        key: "4",
        labelText: "Wardrobes",
        img: kitchenLook4
    },
    {
        id: "5",
        key: "5",
        labelText: "Storage / Cabinetry",
        img: bedroomLook4
    },
    {
        id: "6",
        key: "6",
        labelText: "Tables",
        img: LivingRoomLook4
    },
    {
        id: "7",
        key: "7",
        labelText: "Shelving Units",
        img: kitchenLook4
    }
];
const pickLookLabelData = [
    {
        key: "1",
        labelImg: kitchenLook1,
        label: "Label",
        labelColorImg: labelDesign1
    },
    {
        key: "2",
        labelImg: kitchenLook2,
        label: "Label",
        labelColorImg: labelDesign2
    },
    {
        key: "3",
        labelImg: kitchenLook3,
        label: "Label",
        labelColorImg: labelDesign2
    },
    {
        key: "4",
        labelImg: kitchenLook4,
        label: "Label",
        labelColorImg: labelDesign2
    },
    {
        key: "5",
        labelImg: kitchenLook5,
        label: "Label",
        labelColorImg: labelDesign2
    }
]

function PickLook() {
    const [isActive, setActive] = useState(true);
    const [isCollapse, setCollapse] = useState(true);

    const [pickLook, setPickLook] = useState(kitchenLook4);
    const [pickLookLabel, setPickLookLabel] = useState(kitchenLook1);

    const PickCategory = (data) => {
        setPickLook(data.img)
    }

    const PickLabel = (data) => {
        setPickLookLabel(data.labelImg)
    }
    return (
        <>
            <div className="main-look">
                <div className="row">
                    <div className="col-12 col-md-4 order-md-1 order-2 add-accordion">
                        <h3 className='title'>Pick a look</h3>
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseTwo" onClick={() => setCollapse(!isCollapse)} >
                                        <div className="d-block">
                                            <h5>Room</h5>
                                            <h4>Kitchen</h4>
                                        </div>
                                    </button>
                                </h2>
                                <div id="collapseOne" className={!isCollapse ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Room</p>
                                        {pickLabel.map((data) => {
                                            return (
                                                <div className='label1' onClick={() => { PickCategory(data); PickLabel(false); setCollapse(!isCollapse) }}>
                                                    <span>{data.labelText}</span>
                                                </div>
                                            )
                                        })}
                                        <button className='accordianButton' onClick={() => setCollapse(!isCollapse)}>Cancel</button>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" onClick={() => setActive(!isActive)}>
                                        <div className="d-block">
                                            <h5>Palette</h5>
                                            <h4 style={{ display: "flex" }}><img src={labelDesign2} alt="" className='me-2' />Espanyol</h4>
                                        </div>
                                    </button>
                                </h2>
                                <div id="collapseTwo" className={!isActive ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <p>Pick a palette</p>
                                        {pickLookLabelData.map((data) => {
                                            return (
                                                <div className='label1' onClick={() => { PickLabel(data); PickCategory(false); setActive(!isActive) }}>
                                                    <img src={data.labelColorImg} alt="" />
                                                    <span>{data.label}</span>
                                                </div>
                                            )
                                        })}
                                        <button className='accordianButton' onClick={() => setActive(!isActive)}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 order-md-2 order-1">
                        <h3 className='title1'>Pick a look</h3>
                        <div className='lookImg'>
                            {pickLook ? <img src={pickLook} alt="" /> : <img src={pickLookLabel} alt="" />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PickLook
