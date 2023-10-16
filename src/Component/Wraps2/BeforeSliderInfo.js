import { React, useState } from "react";
import ReactCompareImage from "react-compare-image";
import { Tabs, Tab, Box } from "@mui/material";
import slideFirst from "../../images/slideFirst.png";
import slideSecond from "../../images/slideSecond.jpg";
import kitchenFirst from "../../images/slideFirst1.png";
import kitchenSecond from "../../images/slideSecond1.png";
import roomFirst from "../../images/roomFirst.png";
import roomSecond from "../../images/roomSecond.png";
import "../../Component/Wraps/Slider.css";


const BeforeSliderInfo = () => {
    const [value, setValue] = useState("one");

    const handleChange = (event, newValue) => {
        console.log("newValue", newValue)
        setValue(newValue);
    }

    const before = slideFirst;
    const after = slideSecond;
    const kitchenAfter = kitchenFirst;
    const kitchenBefore = kitchenSecond;
    const roomAfter = roomFirst;
    const roomBefore = roomSecond;
    const leftLabel = <div className="rightLabelText leftLabelText">BEFORE</div>;
    const rightLabel = <div className="rightLabelText">AFTER</div>;
    return (
        <div className="homelaneTransform">
            <div className="designerSlider">
                <div className="SliderMainWrap">
                    <div className="mainWrapper">
                        <div className="contentWrapper loadbefore" id="contentWrapper">
                            <ReactCompareImage
                                leftImage={value === 'one' ? roomAfter : (value === "two" ? before : value === "three" ? kitchenAfter : after)}
                                rightImage={value === 'one' ? roomBefore : (value === 'two' ? after : value === "three" ? kitchenBefore : after)}
                                leftImageLabel={leftLabel}
                                rightImageLabel={rightLabel}
                            />
                        </div>
                    </div>
                    <div className="mainWrapper-tab">
                        <Box sx={{ width: "100%" }}>
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                textColor="secondary"
                                indicatorColor="secondary"
                                aria-label="secondary tabs example"
                            >
                                <Tab value="one" label="Living Room" />
                                <Tab value="two" label="Kitchen" />
                                <Tab value="three" label="Bedroom" />
                            </Tabs>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeforeSliderInfo