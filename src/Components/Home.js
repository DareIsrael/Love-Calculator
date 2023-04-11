import React, { useState } from "react";
import {motion, animate} from "framer-motion";
import { useEffect, useRef } from "react";


function Home () {
   const [yourname, setYourname] = useState ("");
   const [partner, setPartner] = useState ("");
   const [love, setLove] = useState ("");
   const [comment, setComment] = useState(""); 
   const [error, setError] = useState("");
   
//    const [prog, setProg] = useState ("progressive");
   const progressiveRef = useRef(null);

   
    
   function Yname (event) {
    return setYourname(event.target.value);
    
   }
   function Pname (event) {
    return setPartner (event.target.value)
    
   }

        const random = Math.floor(Math.random() * 101);
        var OnlyAl = /^[A-Za-z]+$/;

     
         function Calculatelove ()  {


            if (yourname ==="" && partner === "" ) {
                   setError (" 🚫 Please refresh and Insert Partners name")
                   
                  }
                  
                  
                  else if (yourname < 3 && partner < 3 ){
                  setError (" 🚫 Please enter a valid name")
                  
                }
                else if (Number.isNaN(yourname) && Number.isNaN(partner)) {
                    setError (" 🚫 Please enter a valid name")
                    
                }
                else if (!yourname.match(OnlyAl) && !partner.match(OnlyAl)){
                     setError( " 🚫 Please enter a valid name" )
                     
                     }
                else {
                    return setLove(random)
                }
           
            }

            function calculateComment () {

                if (yourname === "" && partner === "") {
                    return setComment("")
                }
                else if (!yourname.match(OnlyAl) && !partner.match(OnlyAl)){
                    setComment( "" )
                    }
                else if (yourname < 3 && partner < 3) {
                    return setComment ("")
                }
                else if (random < 50) {
                 return setComment(random + "%" + " Oops " + yourname + " and " + partner + " are not Compatible😔💔 ")
             }
              else if (random > 50) {
              return setComment (random + "%" + " Wow, Congratulations😂👫 " + yourname + " and " + partner + " are perfect together!")
            }
         }

         

     
       
     

     

        
    //    var timerId = setInterval(calculateComment)


     useEffect (() => {
        if(progressiveRef.current != null) {
           animate(0,love,{
                duration: 2,
                onUpdate : (cv) => {
                     progressiveRef.current.textContent = cv.toFixed(0)
                 }
            })
         }
     }, [love]);


    return (
        <div className="home">
         <h1 className="home-h1">❤️</h1>
         <h4>Enter the names of two partners and hit "Calculate" to see what their relationship chances are. </h4>
        <div className="home_1">
        <h1>❤️ Love Calculator</h1>
        <div className="home_2">
        <form className="home_3">
        {/* <label>Your Name</label> */}
        <input type="text"  onChange={Yname} placeholder=" 👨🏾 Male Name "></input> <br/>
        {/* <label>Partner Name</label> */}
        <input type="text"  onChange={Pname} placeholder=" 👩🏽 Female Name"></input> <br/>
        <p className="error">{error}</p>
         <button onClick={() => { 
            Calculatelove();
           setTimeout(calculateComment, 3000);
        }}>Calculate</button> 
       
        </form>
        
        <div className="progressbar">
      <div className='progress'>
      <motion.div className='bar' 
        animate = {{
            width: `${love}%`
        }}
         transition = {{
             duration: 2
         }}
        
         
       /> 
      
      
        </div>  
         <div className="progressbar-text-container">
      <p ref={progressiveRef}>0</p>
      <p>%</p>
       
      </div> 
       
      
      
        

       
     </div>
      <div className="result">
       {comment}
       </div>
       
        </div>
         
       
        </div>
        <h3>BrightWeb © 2023</h3>
        <p>dareisrael4@gmail.com</p>
        </div>
    )
}

 export default Home;





// import React from "react"
// import { useEffect } from "react"
// import { useState } from "react"

// function Home() {
//     const [records, setRecords] = useState("")
//     const [container, setContainer] = useState([])

//     useEffect(() => {
//         fetchme()
//     }, [records])

//     const fetchme = () => {

    
    
//     fetch('https://imdb8.p.rapidapi.com/auto-complete?q=+${records}', {
//         "method": "GET",
//         "headers": {
//             'X-RapidAPI-Key': 'fa951e0844msh43c3225a58784a6p12d714jsnbde34828b878',
// 		'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
//         }
//     })
//     .then(response => {
//         return (response.json());
//     })
//     .then(data => {
//         setContainer(data.d)
//     })
//     .catch(err => {
//         console.error(err);
//     })
// }
//     const submitH = e => {
//         e.preventDefault()
//     }

//     const change = (e) => {
//         setRecords(e.target.value)
//     }
//  return (
//     <div>
//     <form onSubmit={submitH}>
//         <input type="text" value={records} onChange={change} ></input>
//         <button type="submit">submit</button>
//     </form>
//      {container.map((item) => {
//         return (
//             <p>{item.l}</p>
//         )
//      })}
//     </div>
//  )


// }

// export default Home;