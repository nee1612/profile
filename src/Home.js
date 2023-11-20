import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Loading from './Loading';


function Home() {

    const history = useNavigate();
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(true);
    const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "8403dea648msh56c3c3bddee3a4fp1c8b12jsne84ab4487a20",
          "X-RapidAPI-Host": "aliexpress-datahub.p.rapidapi.com",
        },
      };
    const fetchData = async () => {
        setLoading(true);
        try {
          const url = "https://randomuser.me/api/?page=1&results=1&seed=abc";
          const response = await fetch(url, options);
          const result = await response.json();
          setData(result.results);
          setLoading(false);
        } catch (error) {
          console.error(error);
        }
        setLoading(false);
      };

      useEffect(()=>{
        fetchData();
      },[])

  return (
    <div className='mt-[7rem]' >
        {
            !loading?(
                <div>
                {
                   data.map((user) => 
                   <div className='flex justify-center'>
                   <div className='  p-6 pb-7 max-w-[50rem] w-[90vw]  rounded-md shadow-md  hover:shadow-xl hover:transition-all bg-slate-300 bg-opacity-90 backdrop-blur-sm   '>
                    <div className='    sm:flex  sm:justify-normal gap-4 items-center'>
                        <div className='w-[80vw] justify-center flex sm:block sm:w-[15rem]  '>
                            <img src={user.picture.large}  />
                       </div>
                       <div className=' w-[80vw] sm:w-[100vw] sm:mt-0 mt-[2rem]' >
                            <div className='flex-wrap mmobile:flex-nowrap flex justify-normal gap-0 smobile:gap-5 mb-3 '>
                                <p className=''><b>First Name:</b> {user.name.first}</p>
                                <p className=''><b>Last Name:</b> {user.name.last}</p>
                            </div>
                            <div className='mb-3'>
                                <p>
                                <b>Gender:</b> {user.gender.charAt(0).toUpperCase() + user.gender.slice(1)}
                                </p>
                            </div>
                            <div className='mb-3'>
                                <p>
                                <b>Contact No:</b> {user.phone}
                                </p>
                            </div>
                       </div>
                    </div>
                      
                   </div>
                   </div>
                )}
            </div>
            ):(

                <Loading/>
            )
        }
        



    </div>
  )
}

export default Home