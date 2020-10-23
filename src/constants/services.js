import React from "react"
import { FaCode, FaSketch, FaAndroid } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "web development",
    text: `End-to-end designing, developing and launching responsive web applications. Not only brochure websites, but interactive with back end and API intergrations.  `,
  },
  {
    id: 2,
    icon: <FaSketch className="service-icon" />,
    title: "databases",
    text: `Plan, design implement, NoSQL (MongoDb, FaunaDb) or Relational database (MariaDb, MySQL, MS SQL).`,
  },
  {
    id: 3,
    icon: <FaAndroid className="service-icon" />,
    title: "GraphQL / Rest API's",
    text: `API Architectures, and building external and internal Web APIs (Rest/GraphQL) using JavaScript/Node. Complete CRUD (Create, Read, Update, and Delete)`,
  },
]
