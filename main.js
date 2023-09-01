

const dotAnimate = (e, interacting) => {
    const dot = document.getElementById("dot");    
    // const dot = document.getElementById("dot");
    const x = e.clientX - dot.offsetWidth/2, y = e.clientY - dot.offsetHeight/2;
    // const x = e.clientX, y = e.clientY;
    // var rot = 0;
    // dot.style.transform = `translate(${x}px, ${y}px)`;
    // const keyframe = {
    //     transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
    //     // transform: `translate(${x}px, ${y}px)`
    //     // transform: `scale(${interacting ? 8 : 1})`
    // };

    // const tKeyframe = {
    //     transform: `translate(${x}px, ${y}px)`
    //     // transform: `translate(${x}px, ${y}px)`
    //     // transform: `scale(${interacting ? 8 : 1})`
    // };

    
    const sKeyframe = {
        // transform: `scale(${interacting ? 8 : 1})`
        transform: `scale(${interacting ? 1 : .125})`
        
    };
    
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    
    dot.animate(sKeyframe, {
        duration: 250,
        fill: "forwards",
        easing: "ease-in-out"
    });
    // dot.animate(keyframe, {
    //     duration: 300,
    //     fill: "forwards"
    //     // fill: "both"
    // });
}

/*
// new
const dotBig = (e, clickedOn) => {
    const dot = document.getElementById("dot");    
    // const dot = document.getElementById("dot");
    const x = e.clientX - dot.offsetWidth/2, y = e.clientY - dot.offsetHeight/2;
    // const x = e.clientX, y = e.clientY;
    // var rot = 0;
    // dot.style.transform = `translate(${x}px, ${y}px)`;
    // const keyframe = {
    //     transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
    //     // transform: `translate(${x}px, ${y}px)`
    //     // transform: `scale(${interacting ? 8 : 1})`
    // };

    // const tKeyframe = {
    //     transform: `translate(${x}px, ${y}px)`
    //     // transform: `translate(${x}px, ${y}px)`
    //     // transform: `scale(${interacting ? 8 : 1})`
    // };


    const sKeyframe = {
        // transform: `scale(${interacting ? 8 : 1})`
        transform: `scale(${clickedOn ? 1000 : .125})`
        
    };
    
    dot.style.left = `${x}px`;
    dot.style.top = `${y}px`;
    
    dot.animate(sKeyframe, {
        duration: 250,
        fill: "forwards",
        easing: "ease-in-out"
    });
}
// -------------------------------------------------------------------------------------------------------------
*/

function dotScale(e, clickedOn) {
    let x = e.clientX - dot.offsetWidth/2, y = e.clientY - dot.offsetHeight
    const sKeyframe = {
        transform: `scale(${clickedOn ? 1000 : 1})`
    };

    

    dot.style.left = `${x}px`, dot.style.top = `${y}px`;
    dot.animate(sKeyframe, {
        duration: 400,
        fill: "fowards",
        easing: "ease-in"
    });
}


document.onmousemove = e => {
    // document.getElementById("test").style.maxWidth = `${document.getElementById("test").innerText.length}ch`;
    const interactable = e.target.closest(".interactable"),
    interacting = interactable !== null;
    dotAnimate(e, interacting);
}
    


document.onmousedown = e => {
    const clickedOn = e.target.closest(".interactable") !== null;
    
    
}

/*
// new
document.onmousedown = e => {
    console.log("down");
    const interactable = e.target.closest(".interactable"), clickedOn = interactable !== null;
    dotBig(e, clickedOn)
}

document.onmouseup = e => {
    console.log("up");
    const interactable = e.target.closest(".interactable"), interacting = interactable !== null;
    dotAnimate(e, interacting)
}
*/