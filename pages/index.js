import React from 'react'
import { createClient } from "next-sanity";
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import {sanityClient} from '../sanity'
import Blogs from './Blogs';


const index = ({properties}) => {

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
<>
 <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {properties.map((item) => { 
                return <Link key={item.slug.current} href={"/property/" + item.slug.current} >
              
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
          <p className="mt-1">{item.price} PKR</p>
        </div>
      </div>
      </Link>
               })}
              
    </div>
  </div>
</section>
                {/*  */}

 
      </>
       )
      }
export default index


export async function getServerSideProps(context) {
   
  const query = '*[_type == "properties" ]';
  const properties = await sanityClient.fetch(query); 

  return {
    props: {
      properties
    }
  }
}