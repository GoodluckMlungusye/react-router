import { useLoaderData, Link } from "react-router-dom"

export default function Careers() {

  const careers = useLoaderData()
  return (
    <div className="careers">
        {careers.posts.map(career => (
            <Link to={career.id.toString()} key={career.id}>
                <p>{career.title}</p>
            </Link>
        ))}
    </div>
  )
}
