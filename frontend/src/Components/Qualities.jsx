import React from 'react'
import {data} from '../restApi.json'

const Qualities = () => {
  return (
    <>
        <section className='qualities mt-20'>
            <div className="flex justify-center items-center">
            {
                data[0].ourQualities.map(element => {
                return (
                    <div className="flex flex-col items-center text-center p-4" key={element.id}
                    >
                    <img 
                        src={element.image} 
                        alt={element.title} 
                        className="mb-4" 
                    />
                    <p className="text-[30px] font-bold mb-2">
                        {element.title}
                    </p>
                    <p className="w-1/2">
                        {element.description}
                    </p>
                    </div>
                );
                })
            }
            </div>
        </section>
    </>
  )
}

export default Qualities