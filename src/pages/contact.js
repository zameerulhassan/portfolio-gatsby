import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return (
    <Layout>
      <section className="contact-page">
        <article className="contact-form">
          <h3>get in touch</h3>
          <h5>Email: zameerulhassan@gmail.com</h5>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
          >
            <div className="form-group">
              <p class="hidden">
                <label>
                  Don’t fill this out if you're human:{" "}
                  <input name="bot-field" />
                </label>
              </p>
              <div data-netlify-recaptcha="true"></div>
              <input type="text" placeholder="name" className="form-control" />
              <input
                type="email"
                placeholder="email"
                className="form-control"
              />
              <input type="hidden" name="form-name" value="contact" />
              <textarea
                name="message"
                id=""
                rows="5"
                placehodler="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit
            </button>
          </form>
        </article>
      </section>
    </Layout>
  )
}

export default contact
