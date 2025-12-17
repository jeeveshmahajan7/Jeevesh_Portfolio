const Connect = () => {
  return (
    <>
      <section id="connect" className="py-5">
        <div className="container py-4">
          <div className="row py-4">
            <div className="col-lg-10 mx-auto">
              <div className="mb-4">
                <h2 className="display-4 fw-bold">Connect</h2>
                <p className="fs-5 text-white-50">
                  Let's work together to bring ideas to life
                </p>

                <div className="bg-success projects-separator"></div>
              </div>

              <div className="row g-4">
                <div className="col-md-6">
                  <a
                    href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=jeeveshmahajan00@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-decoration-none"
                  >
                    <div className="card bg-black h-100 border-0 project-card p-4">
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-envelope-fill text-success fs-3 me-3"></i>
                        <h3 className="fs-4 mb-0 text-white">Email</h3>
                      </div>
                      <p className="mb-0 text-white-50">
                        jeeveshmahajan00@gmail.com
                      </p>
                    </div>
                  </a>
                </div>

                <div className="col-md-6">
                  <a
                    href="https://github.com/jeeveshmahajan7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <div className="card bg-black h-100 border-0 project-card p-4">
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-github text-success fs-3 me-3"></i>
                        <h3 className="fs-4 mb-0 text-white">Github</h3>
                      </div>
                      <p className="mb-0 text-white-50">Follow on GitHub</p>
                    </div>
                  </a>
                </div>

                <div className="col-md-6">
                  <a
                    href="https://www.linkedin.com/in/jeeveshmahajan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <div className="card bg-black h-100 border-0 project-card p-4">
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-linkedin text-success fs-3 me-3"></i>
                        <h3 className="fs-4 mb-0 text-white">LinkedIn</h3>
                      </div>
                      <p className="mb-0 text-white-50">Connect on LinkedIn</p>
                    </div>
                  </a>
                </div>

                <div className="col-md-6">
                  <a
                    href="https://x.com/JeeveshMahajan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                  >
                    <div className="card bg-black h-100 border-0 project-card p-4">
                      <div className="d-flex align-items-center mb-3">
                        <i className="bi bi-twitter text-success fs-3 me-3"></i>
                        <h3 className="fs-4 mb-0 text-white">Twitter</h3>
                      </div>
                      <p className="mb-0 text-white-50">Follow on Twitter</p>
                    </div>
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

export default Connect;
