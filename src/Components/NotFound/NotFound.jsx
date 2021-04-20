import React from 'react';
import { useParams } from 'react-router';
import { Simple } from '../ParticleComponent/ParticleComponent';
import notFound from './notFound.gif';
import './NotFound.css';
const NotFound = () => {
    const {page} = useParams();
    // console.log(page);
    return (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            
          }}
          className="m-0"
        >
            <div className='text-warning content my-0 bg-dark text-center'>
                <h5 style={{position:'relative', top: '50px',zIndex: '999'}}>Sorry!!! The (<span className="text-danger">{page}</span>) page is not Found-404</h5>
                <img className='img-fluid my-5' style={{height: '400px',zIndex: '100'}} src={notFound} alt=""/>
                <p className='text-light mt-5' style={{position:'relative', top: '50px'}}>Inshallah!!! The (<span className="text-success my-0" >{page}</span>) page is coming soon...</p>
            </div>

            <div style={{ 
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        zIndex: '10'
                    }
                }
            >
              <Simple/>
              <div className="particle"><Simple/></div>
              <div className="particle"><Simple/></div>
              <div className="particle"><Simple/></div>
              {/* <div className="simple-4"><Simple/></div> */}
            </div>
        </div>
    );
};

export default NotFound;