

import { Card,For,Stack } from "@chakra-ui/react"
import { Avatar } from "@/components/ui/avatar"
import "./Product.css"
function ProductCard(){
    return(
        <>
        <div className="product-container">
        <img src="https://images-static.nykaa.com/uploads/8d91e197-391d-4ee3-91e8-29bead845303.jpg?tr=cm-pad_resize,w-600" alt=""  />
        <img src="https://images-static.nykaa.com/creatives/a7af72f8-64c9-4ed0-8455-5d32a6e44430/default.png?tr=cm-pad_resize,w-600" alt="" />
        <img src="https://images-static.nykaa.com/creatives/2588a819-7acc-45ab-a1a1-b69d63bf1ffc/default.jpg?tr=cm-pad_resize,w-600" alt="" />

        </div>
        <div className="offer-img">
       <img src="https://images-static.nykaa.com/uploads/dd133d2a-9b0e-411d-ab27-f189fab8cfa0.jpg?tr=cm-pad_resize,w-1200" alt="" />
        </div>
         <div className="card-big-images">
          <img src="https://images-static.nykaa.com/uploads/6adba7cf-6dd6-4be8-ab33-6d64c0f89e0a.jpg?tr=cm-pad_resize,w-1200" alt="img" />
         </div>
         <div className="small-box5">
            <img src="https://images-static.nykaa.com/uploads/734b91db-46c9-4259-97ba-892da9098d0c.jpg?tr=cm-pad_resize,w-200" alt="icon" />
            <img src="https://images-static.nykaa.com/uploads/333a1b75-716e-4c12-b04d-fffcb09e26ac.jpg?tr=cm-pad_resize,w-200" alt="icon" />
            <img src="https://images-static.nykaa.com/uploads/7fb21df6-8430-417b-aa47-f6635a1e2c19.jpg?tr=cm-pad_resize,w-200" alt="icon" />
            <img src="https://images-static.nykaa.com/uploads/734b91db-46c9-4259-97ba-892da9098d0c.jpg?tr=cm-pad_resize,w-200" alt="icon" />
            <img src="https://images-static.nykaa.com/uploads/eb5dbd79-cd33-4fbc-a7be-4175f97ce569.jpg?tr=cm-pad_resize,w-200" alt="icon" />
         </div>
         <div className="perfect-last-card">
        <img src="https://images-static.nykaa.com/uploads/c3a5f784-0e8f-413d-84f0-cf63b91e634c.gif" alt="icon" />
        <div className="main-card">
            <img src="https://images-static.nykaa.com/media/catalog/product/3/c/3c461418901526588985-z_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
            <img src="https://images-static.nykaa.com/media/catalog/product/3/c/3c46141LOREA00000393-z_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
            <img src="https://images-static.nykaa.com/media/catalog/product/1/d/1df16528901526004171_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
            <img src="https://images-static.nykaa.com/media/catalog/product/b/1/b130d96LOREA00000502-new_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
            <img src="https://images-static.nykaa.com/media/catalog/product/b/1/b130d96LOREA00000502-new_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
            <img src="https://images-static.nykaa.com/media/catalog/product/b/1/b130d96LOREA00000502-new_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
            <img src="https://images-static.nykaa.com/media/catalog/product/1/d/1df16528901526004171_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
            <img src="https://images-static.nykaa.com/media/catalog/product/b/1/b130d96LOREA00000502-new_1.jpg?tr=w-344,h-344,cm-pad_resize" alt="icon" />
        </div>
         </div>
        </>
    )
}

export default ProductCard


// import React, { useState } from "react";
// import { Card, Button, Stack } from "@chakra-ui/react";
// import "./Product.css";

// function ProductCard() {
//   const images = [
//     "https://images-static.nykaa.com/uploads/8d91e197-391d-4ee3-91e8-29bead845303.jpg?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/creatives/a7af72f8-64c9-4ed0-8455-5d32a6e44430/default.png?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/creatives/2588a819-7acc-45ab-a1a1-b69d63bf1ffc/default.jpg?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/creatives/6ad439bc-2ba5-4a44-b4bb-9216c2515920/default.jpg?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/uploads/bb3d5883-b74d-4411-9a35-79028354b557.jpg?tr=cm-pad_resize,w-600"
//   ];

// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [startIndex, setStartIndex] = useState(0);

//   // Handle going to the next image
//   const handleNext = () => {
//     setStartIndex(() =>
//     //   prevIndex < images.length - 1 ? prevIndex + 1 : 0
//     setStartIndex((prev) => (prev + 3 >= images.length ? 0 : prev + 3))
//     );
//   };

//   // Handle going to the previous image
//   const handlePrevious = () => {
//     setStartIndex(() =>
//     //   prevIndex > 0 ? prevIndex - 1 : images.length - 1
//     setStartIndex((prev) => (prev - 3 < 0 ? images.length - 3 : prev - 3))
//     );
//   };

//   return (
//     <>
//       <div className="product-container">
//         <div className="image-container">
//           {/* <img src={images[currentImageIndex]} alt="product" /> */}
//           {images.slice(startIndex, startIndex + 3).map((image, index) => (
//             <img key={index} src={image} alt={`product-${index}`} />
//           ))}
//         </div>
//         <div className="button-container">
//           {/* Backward Button */}
//           <button className="arrow-button" onClick={handlePrevious}>
//             &#10094;
//           </button>
//           {/* Forward Button */}
//           <button className="arrow-button" onClick={handleNext}>
//             &#10095;
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProductCard;


// import React, { useState } from "react";
// import { Button, Stack, Box, Image } from "@chakra-ui/react";

// function ProductCard() {
//   // List of images
//   const images = [
//     "https://images-static.nykaa.com/uploads/8d91e197-391d-4ee3-91e8-29bead845303.jpg?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/creatives/a7af72f8-64c9-4ed0-8455-5d32a6e44430/default.png?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/creatives/2588a819-7acc-45ab-a1a1-b69d63bf1ffc/default.jpg?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/uploads/abc123456789.jpg?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/creatives/pqr234567890.png?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/uploads/8d91e197-391d-4ee3-91e8-29bead845303.jpg?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/creatives/a7af72f8-64c9-4ed0-8455-5d32a6e44430/default.png?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/creatives/2588a819-7acc-45ab-a1a1-b69d63bf1ffc/default.jpg?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/uploads/abc123456789.jpg?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/creatives/pqr234567890.png?tr=cm-pad_resize,w-600",
    
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Handle the forward navigation
//   const handleForward = () => {
//     if (currentIndex + 3 < images.length) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   // Handle the backward navigation
//   const handleBackward = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <>
//       <Stack direction="row" spacing={4} align="center" justify="center">
//         {/* Backward Button */}
//         <Button onClick={handleBackward} isDisabled={currentIndex === 0}>
//           ◀️ Back
//         </Button>

//         {/* Images */}
//         <Stack direction="row" spacing={2}>
//           {images.slice(currentIndex, currentIndex + 3).map((src, index) => (
//             <Box key={index} width="120px" height="120px" overflow="hidden">
//               <Image src={src} alt={`image-${index}`} boxSize="100%" objectFit="cover" />
//             </Box>
//           ))}
//         </Stack>

//         {/* Forward Button */}
//         <Button
//           onClick={handleForward}
//           isDisabled={currentIndex + 3 >= images.length}
//         >
//           Next ▶️
//         </Button>
//       </Stack>
//     </>
//   );
// }

// export default ProductCard;


// import React, { useState } from "react";
// import { Button, Stack, Box, Image, Text } from "@chakra-ui/react";

// function ProductCard() {
//   // List of images (example image URLs)
//   const images = [
//     "https://images-static.nykaa.com/uploads/8d91e197-391d-4ee3-91e8-29bead845303.jpg?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/creatives/a7af72f8-64c9-4ed0-8455-5d32a6e44430/default.png?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/creatives/2588a819-7acc-45ab-a1a1-b69d63bf1ffc/default.jpg?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/uploads/abc123456789.jpg?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/creatives/pqr234567890.png?tr=cm-pad_resize,w-600",
//     "https://images-static.nykaa.com/creatives/2588a819-7acc-45ab-a1a1-b69d63bf1ffc/default.jpg?tr=cm-pad_resize,w-600"
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Handle the forward navigation
//   const handleForward = () => {
//     if (currentIndex + 3 < images.length) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   // Handle the backward navigation
//   const handleBackward = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <>
//       <Stack direction="row" spacing={4} align="center" justify="center">
//         {/* Backward Button */}
//         <Button
//           onClick={handleBackward}
//           isDisabled={currentIndex === 0}
//           colorScheme="teal"
//         >
//           ◀️ Back
//         </Button>

//         {/* Images */}
//         <Stack direction="row" spacing={2}>
//           {images.slice(currentIndex, currentIndex + 3).map((src, index) => (
//             <Box
//               key={index}
//               width="120px"
//               height="120px"
//               overflow="hidden"
//               display="flex"
//               alignItems="center"
//               justifyContent="center"
//               border="1px"
//               borderColor="gray.200"
//             >
//               {/* Handle image loading issues */}
//               <Image
//                 src={src}
//                 alt={`carousel-img-${index}`}
//                 boxSize="100%"
//                 objectFit="cover"
//                 onError={(e) => {
//                   e.target.src = "https://via.placeholder.com/120";
//                 }}
//               />
//             </Box>
//           ))}
//         </Stack>

//         {/* Forward Button */}
//         <Button
//           onClick={handleForward}
//           isDisabled={currentIndex + 3 >= images.length}
//           colorScheme="teal"
//         >
//           Next ▶️
//         </Button>
//       </Stack>
//     </>
//   );
// }

// export default ProductCard;
