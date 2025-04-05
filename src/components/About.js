import React, { useState } from 'react'

export default function About() {
    const [myStyle, setMystyle] = useState({
        color: 'black',
        backgroundColor: "white",
        accordionBorder: "1px solid #dee2e6",
        accordionButtonBg: "white",
        accordionButtonColor: "black"
    })

    const [btext, setbtext] = useState("Enable Dark Mode")

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMystyle({
                ...myStyle,
                color: "white",
                backgroundColor: "black",
                accordionBorder: "1px solid #444",
                accordionButtonBg: "#333",
                accordionButtonColor: "white"
            })
            setbtext("Enable Light Mode")
        } else {
            setMystyle({
                ...myStyle,
                color: "black",
                backgroundColor: "white",
                accordionBorder: "1px solid #dee2e6",
                accordionButtonBg: "white",
                accordionButtonColor: "black"
            })
            setbtext("Enable Dark Mode")
        }
    }

    // Style objects
    const containerStyle = {
        color: myStyle.color,
        backgroundColor: myStyle.backgroundColor,
        padding: '20px'
    }

    const accordionItemStyle = {
        border: myStyle.accordionBorder,
        marginBottom: '15px',
        borderRadius: '5px',
        overflow: 'hidden'
    }

    const accordionButtonStyle = {
        color: myStyle.accordionButtonColor,
        backgroundColor: myStyle.accordionButtonBg,
        borderBottom: myStyle.accordionBorder
    }

    const accordionBodyStyle = {
        color: myStyle.color,
        backgroundColor: myStyle.backgroundColor,
        padding: '20px'
    }

    return (
        <div className='container' style={containerStyle}>
            <div className="accordion" id="accordionExample">
                <div className='container'>
                    <h1 className='my-3'>About Us</h1>
                </div>
                
                {/* Accordion Item 1 */}
                <div className="accordion-item" style={accordionItemStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" 
                                style={accordionButtonStyle}
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseOne" 
                                aria-expanded="true" 
                                aria-controls="collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" 
                         aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={accordionBodyStyle}>
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                        </div>
                    </div>
                </div>
                
                {/* Accordion Item 2 */}
                <div className="accordion-item" style={accordionItemStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" 
                                style={accordionButtonStyle}
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseTwo" 
                                aria-expanded="false" 
                                aria-controls="collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" 
                         aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={accordionBodyStyle}>
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                        </div>
                    </div>
                </div>
                
                {/* Accordion Item 3 */}
                <div className="accordion-item" style={accordionItemStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" 
                                style={accordionButtonStyle}
                                data-bs-toggle="collapse" 
                                data-bs-target="#collapseThree" 
                                aria-expanded="false" 
                                aria-controls="collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" 
                         aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={accordionBodyStyle}>
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
                        </div>
                    </div>
                </div>
                
                {/* Toggle Button */}
                <div className='container mt-4'>
                    <button type="button" 
                            className="btn btn-primary" 
                            onClick={toggleStyle}>
                        {btext}
                    </button>
                </div>
            </div>
        </div>
    )
}