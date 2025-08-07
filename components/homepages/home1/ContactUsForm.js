export default function ContactUsForm() {
  return (
    <div className="main-contact-form section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="heading2 mr50">
              {/* <small className="heading-top inner-heading-top">
                <img src="/assets/img/icons/hands.svg" alt="" />
                Our Success in Numbers
              </small> */}
              <h2>Let’s Work Together</h2>
              <p>
                Ready to transform one great business into a network of growth?
                Book a free franchise and expansion session today.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="main-form">
              <form>
                <div className="row">
                  <div className="col-lg-6">
                    <input type="text" name="fname" placeholder="First Name" />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" name="lname" placeholder="Last Name" />
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="service"
                      placeholder="Service Interested In"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input type="text" name="subject" placeholder="Subject" />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      cols={30}
                      rows={5}
                      placeholder="Tell Us About Your Projects"
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="full-btn theme-btn-11">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
