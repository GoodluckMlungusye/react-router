import React from 'react'
import { useLoaderData} from 'react-router-dom'

export default function CareerDetails() {

    const career = useLoaderData()

  return (
    <div className="career-details">
        <h2>Career Details for {career.title}</h2>
        <div className="details">
           <p>
            {career.body}
           </p>
        </div>
    </div>
  )
}
