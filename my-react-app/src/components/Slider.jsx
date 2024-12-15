
// import {useState} from "react"

// function Slider(){
//     const [currentIndex, setCurrentIndex] = useState(0);
//     return(

//         <>
//    const images=[
//     <img src="https://images-static.nykaa.com/media/catalog/product/3/c/3c461418901526588985-z_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
//             <img src="https://images-static.nykaa.com/media/catalog/product/3/c/3c46141LOREA00000393-z_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
//             <img src="https://images-static.nykaa.com/media/catalog/product/1/d/1df16528901526004171_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
//             <img src="https://images-static.nykaa.com/media/catalog/product/b/1/b130d96LOREA00000502-new_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
//             <img src="https://images-static.nykaa.com/media/catalog/product/b/1/b130d96LOREA00000502-new_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
//             <img src="https://images-static.nykaa.com/media/catalog/product/b/1/b130d96LOREA00000502-new_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
//             <img src="https://images-static.nykaa.com/media/catalog/product/1/d/1df16528901526004171_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
//             <img src="https://images-static.nykaa.com/media/catalog/product/b/1/b130d96LOREA00000502-new_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
// ]

//         </>
//     )
// }

// export default Slider

import  { useState, useEffect } from "react";

function Sliders() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "https://images-static.nykaa.com/media/catalog/product/3/c/3c461418901526588985-z_1.jpg?tr=w-344,h-344,cm-pad_resize",
    "https://images-static.nykaa.com/media/catalog/product/3/c/3c46141LOREA00000393-z_1.jpg?tr=w-344,h-344,cm-pad_resize",
    "https://images-static.nykaa.com/media/catalog/product/1/d/1df16528901526004171_1.jpg?tr=w-344,h-344,cm-pad_resize",
    "https://images-static.nykaa.com/media/catalog/product/b/1/b130d96LOREA00000502-new_1.jpg?tr=w-344,h-344,cm-pad_resize",
    "https://images-static.nykaa.com/media/catalog/product/b/1/b130d96LOREA00000502-new_1.jpg?tr=w-344,h-344,cm-pad_resize",
    "https://images-static.nykaa.com/media/catalog/product/b/1/b130d96LOREA00000502-new_1.jpg?tr=w-344,h-344,cm-pad_resize",
    "https://images-static.nykaa.com/media/catalog/product/1/d/1df16528901526004171_1.jpg?tr=w-344,h-344,cm-pad_resize",
    "https://images-static.nykaa.com/media/catalog/product/b/1/b130d96LOREA00000502-new_1.jpg?tr=w-344,h-344,cm-pad_resize",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div style={{ textAlign: "center", maxWidth: "100%", overflow: "hidden" }}>
      <img
        src={images[currentIndex]}
        alt="slider"
        style={{ width: "50%", transition: "all 0.5s ease", margin:"auto"}}
      />
    </div>
  );
}

export default Sliders;
