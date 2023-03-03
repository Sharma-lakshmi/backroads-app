import React from "react"
import Title from "./Title"
import { serviceLinks } from "../data"
import ServiceLink from "./ServiceLink"
const services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {serviceLinks.map((service) => {
          return <ServiceLink key={service.id} {...service} />
        })}
      </div>
    </section>
  )
}

export default services
