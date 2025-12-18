const Hero = () => {
  return (
    <>
      <section id="hero" className="py-5">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-lg-10 mx-auto">
              <h1 className="display-2 fw-bold mb-0">Jeevesh Mahajan</h1>
              <p className="fs-2 fw-bold text-primary mb-9">
                Full Stack Developer
              </p>
              <div className="bg-success mb-4 hero-separator"></div>
              <div className="lead mb-4">
                <p className="mb-2 text-white-50">
                  Full-stack developer crafting intuitive and responsive web
                  applications with attention to detail and user experience.
                </p>
                <p className="mb-4 text-white-50">
                  Experienced with React, Node.js, Express, and MongoDB,
                  developing scalable backend APIs and sleek, modern frontend
                  interfaces.
                </p>
                <div className="d-flex gap-3">
                  <a href="#connect" className="btn btn-success px-4 py-2">
                    Contact Me
                  </a>
                  <a
                    href="https://drive.google.com/file/d/10KRTchyu_SRHmW8KWJlT6yj3OStoqIrt/view?usp=sharing"
                    className="btn btn-outline-secondary px-4 py-2"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open resume in a new tab"
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
