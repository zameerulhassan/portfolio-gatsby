import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: ASC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`
const Jobs = () => {
  const data = useStaticQuery(query)
  //console.log(data)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  //console.log(jobs)
  //using React-Use Hook
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]
  //console.log(company, position, date, desc)

  //console.log(value) //will be equal to index of Jobs array
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.strapiId}
                onClick={()=>setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
          <h4>{position}</h4>
          <h3>{company}</h3>
          <p className="job-date">{date}</p>
          {
            desc.map((x)=>{
              return <div key={x.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{x.name}</p>
              </div>
            })
          }
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
      more info
      </Link>
    </section>
  )
}

export default Jobs
