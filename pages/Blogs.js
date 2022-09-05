import React from 'react'
import { createClient } from "next-sanity";
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import {sanityClient} from '../sanity'

const Blogs = ({properties}) => {

    console.log(properties)
    const client = createClient({
        projectId: "imu39qh0",
        dataset: "production",
        useCdn: false
      });
      const builder = imageUrlBuilder(client)
      
      useEffect(() => {
        console.log("thsnks") 
        
      }, [])
  return (
    <div>
       
         <div className="bg-grey-50 my-12" id="blog">
        <div className="container mx-auto py-16 md:py-20">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            I also like to write
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10">

            {properties.map((item) => { 
              return <Link key={item.slug.current} href={"/agent/" + item.slug.current} >
             <div>
              <div className="bg-white py-6 px-5 xl:py-8 cursor-pointer">
                <span className="block font-body text-lg font-semibold text-black"> {item.title}</span>
                
              </div>
              </div>
            </Link>
             })}
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Blogs

export async function getServerSideProps(context) {
   
    const query = '*[_type == "agent" ]';
    const properties = await sanityClient.fetch(query); 
  
    return {
      props: {
        properties
      }
    }
  }