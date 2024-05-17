import React from 'react';
import MemoryGame from './matchcards';
import NewMemoryGame from './matchcards';
import ColourMemory from './colourmemory';
import NewColourMemory from './colourmemory';
import { useNavigate } from 'react-router-dom/dist';


const MainPage = () => {
  const fixedParagraph = 'Quantitative Checklist for Autism in Toddlers (Q-CHAT) ' ;
  const navigate = useNavigate();
  return (
    <div>
    <div style={{backgroundImage: 'url("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pf-s104-0372.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=e1b1ad4ae2db4690837a34ecfeee1b7b")', backgroundSize: '100%', marginBottom: '0px', marginTop:'0px' }}>
    
    <div >
      <div style={{ marginLeft:"20px", fontSize:'30px', color:"white" }}>
      <p style={{marginTop:'5px'}}>Quantitative Checklist for Autism in Toddlers (Q-CHAT)</p>
    </div>
    <div>
      <h2 style={{ textAlign: 'left', marginTop: '10px', marginRight:'900px', color:"white", fontSize:"20px", marginLeft:"10px"}}> The Q-CHAT is a normally distributed quantitative measure of autistic traits in children 18-24 months old. If your child scores more than 3 out of 10, the health professional may consider referring your child for a multi-disciplinary assessment. Follow the link to attempt the assessment : 
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfu_oZ80BmIWdmbXij7PzdbRRpKeWH1SRHR480rUrI7mdpdlg/viewform?usp=sf_link">Start the assessment!</a>  
      </h2>
      <h2 style={{ textAlign: 'left', marginTop: '10px', marginRight:'900px', color:"white", fontSize:"20px", marginLeft:"10px"}}>
      For more details, visit https://www.cdc.gov/ncbddd/autism.
      </h2>
      <h2 style={{ textAlign: 'left', marginTop: '10px', marginRight:'900px', color:"white", fontSize:"20px",marginLeft:"10px"}} >
        <a style={{color: "red"}} href= "http://localhost:8501/">Click for a visualised view of the dataset</a>
      </h2>
    </div>

    </div>
    <div style={{ marginTop: '90px', fontSize:'30px', marginLeft:'550px', color:"white"}}>
      FUN GAMES FOR CHILDREN
    </div>
    <div style={{ marginTop: '10px', fontSize:'20px', fontWeight: 'bolder', marginLeft:"550px" , color:"white"}}>
      Match Cards Puzzle Game: Match all the similar cards on the screen.  
      <button type='button'  onClick= {()=> navigate('/matchcards')} style={{marginLeft: '6px', color:'red', borderWidth:'medium', background:'pink',height:'40px',width:'90px',fontSize:'15px', borderRadius:'7px'}}> Play Now

      </button>

    </div>
    <div style={{ marginTop: '7px', fontSize:'20px', fontWeight: 'bolder', marginLeft:"550px" , color:"white" }}>
    Color Memory Game: Do not click on the same colour more than once.  
      <button type='button'  onClick= {()=> navigate('/colourmemory')} style={{marginLeft: '6px', color:'red', borderWidth:'medium', background:'pink',height:'40px',width:'90px',fontSize:'15px', borderRadius:'7px'}}> Play now

      </button>

    </div>
    <div style={{ marginTop: '20px', fontSize:'30px', marginLeft:'550px', color:"white"}}>
      <p style={{fontSize:"30px"}}>QUICK LINKS FOR GUIDANCE</p>
      <h2 style={{ marginTop: '7px', fontSize:'20px',  color:"white"}}><a style={{color:"blue"}} href='https://getgoally.com/blog/best-autism-schools-in-india-parent-guide/'>Top 5 Best Autism Schools in India</a></h2>
      <h2 style={{ marginTop: '7px', fontSize:'20px',  color:"white"}}><a href='https://www.autismparentingmagazine.com/autism-schools/'>Best Schools for Autism Worldwide</a></h2>
      <h2 style={{ marginTop: '7px', fontSize:'20px',  color:"white"}}><a href='https://www.clinicspots.com/blog/autism-treatment-in-india-best-centers-doctors-and-costs-2022-clinicspots'>Best Hospitals and Doctors for treatment in India</a></h2>
      <h2 style={{ marginTop: '7px', fontSize:'20px',  color:"white"}}><a href='https://us-uk.bookimed.com/clinics/illness=autism/'>Best Hospitals for treatment Worldwide </a></h2>
      <h2 style={{ marginTop: '7px', fontSize:'20px',  color:"white"}}><a href='https://www.autismparentingmagazine.com/world-most-prominent-autism-researchers/'>Prominent Autism researchers in the world</a></h2>
      <p style={{fontSize:"30px", marginTop:"15px"}}>OTHER WEBSITE RECOMMENDATIONS</p>
      <h2 style={{ marginTop: '7px', fontSize:'20px',  color:"white"}}><a href='https://www.asdreading.com/resources/free-online-educational-games'>ASD Reading</a></h2>
      <h2 style={{ marginTop: '7px', fontSize:'20px',  color:"white"}}><a href='https://www.gympanzees.org/our-services/online-resource-hub/autism/21-games-to-play-to-stay-active-at-home-with-autism'>Gympanzees</a></h2>
    </div>
    <div style={{ marginTop: '30px', fontSize:'20px', fontWeight: 'bolder', marginLeft:"1250px" , color:"white" }} >
      For more help, visit https://www.practo.com/ 
    </div>

      
    </div>
    </div>
    
  );
};

export default MainPage;