import React from 'react'

const Newlook = () => {
    const onLoad = () => {
        setTimeout(() => {
            document.getElementById("contentWrapper").classList.add("newClass");
        }, 1500)
        setTimeout(() => {
            document.getElementById("contentWrapper").classList.remove("loadbefore");
            document.getElementById("contentWrapper").classList.remove("newClass");
        }, 2150);
    }
    return (
        <div className='newlookwrap' onLoad={onLoad}>
            <div className='newlookmain'>
                <div className='newlookheading'>
                    <h1>Looking forward to glam up your home - but on a budget that doesn’t break your bank?</h1>
                </div>
                <div className='newlookpara'>
                    <p>
                        Say hello to HomeLane Pronto Wraps, quick and easy vinyl wrapping solutions for all types of furniture; the first of its kind in India. Give your kitchen cabinets a new look, add a summer theme to your wardrobe, or dress up your entertainment unit to suit your mood.  From textures to designs, from solid colours to vibrant hues - now you can transform your home whenever you want.
                    </p>
                    <p>
                        HomeLane Pronto Wraps delivers mint condition  furniture wraps  in <span>under 6 hours  and at a fraction of the cost,</span> so no more waiting for the dream look you've always wanted.
                    </p>
                </div>
            </div>
            <img className='newlook' src="./images/newlook.png" alt="newlook" />
            <img className='newlooksm' src="./images/newlookmd.png" alt="newlook" />
        </div>
    )
}

export default Newlook