 import { Box ,Input,Flex,Button} from "@chakra-ui/react"


import {useState,useEffect} from "react"
import { useNavigate } from 'react-router-dom';

import "./Navbar.css"
function Navbar(){
  // const [isFixed,setIsFixed] = useState(false)
  const [isFixed, setIsFixed] = useState(false);
  const navigate = useNavigate()


  useEffect(()=>{
    const handleScroll = ()=>{
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition >0)
    };
    window.addEventListener('scroll',handleScroll)
    return()=>{
      window.removeEventListener('scroll',handleScroll)
    }
  },[])
  const handleClick =()=>{
   navigate('/signin')
  }
 
// const [menuOpen,setMenuOpen] =useState(false)
// const [isOpen, setIsOpen] = useState(false);

// const handleOpen = () => setIsOpen(true);
// const handleClose = () => setIsOpen(false);

// const handleClick = () => {
//     setMenuOpen((prevState) => !prevState);
//   };

return(
    <>
    <nav className={`navbar ${isFixed ? 'fixed':" "}`} >
        <div className="first-pink-area-on-top">
        <div className="marquee-text">Welcome to Bonaza!</div>
        </div>
        <div className="container-of-navitems">
        <div className="nav-logo-links">
        <Flex   as="header"
          p={4}
          bg="white"
          align="center"
          justify="space-between"
          boxShadow="md">
        <div className="nav-logo">Nykaa</div>
        
        
        <Flex gap={6} align="center" display={{ base: "none", md: "flex" }}>
      
        <Box as="p" fontSize="sm" _hover={{ cursor: "pointer" ,color:"pink"}}>
              Categories
            </Box>
            <Box as="p" fontSize="sm" _hover={{ cursor: "pointer" ,color:"pink"}}>
              Brands
            </Box>
            <Box as="p" fontSize="sm" _hover={{ cursor: "pointer" ,color:"pink"}}>
              Luxe
            </Box>
            <Box as="p" fontSize="sm" _hover={{ cursor: "pointer", color:"pink"}} width="100%">
              Nykaa Fashion
            </Box>
            <Box as="p" fontSize="sm" _hover={{ cursor: "pointer",color:"pink" }}   width="100%">
              Beauty Advice
            </Box>
            <Input placeholder="Search on Nykaa" width="100%" />
         <Button
            variant="solid"
            colorScheme="pink"
            ml={4}
            display={{ base: "none", md: "block" }}
            hover={{cursor:"pointer",color:"skyblue"}}
            onClick={handleClick}
       
            
          >
            Sign In
          </Button>
         {/* <Input placeholder="Search on Nykaa" /> */}
         </Flex>
       
        </Flex>
        

        </div>
       

        </div>
   
    </nav>

    </>
)

}

export default Navbar