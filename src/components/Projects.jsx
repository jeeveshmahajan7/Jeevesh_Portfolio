const Projects = () => {
  return (
    <>
      <section id="projects" className="py-5">
        <div className="container py-4">
          <div className="row py-4">
            <div className="col-lg-10 mx-auto">
              <h2 className="display-4 fw-bold">Projects</h2>
              <p className="fs-5 text-white-50">
                Applications built to solve problems and enhance user
                experiences
              </p>
              <div className="bg-success projects-separator"></div>

              {/* PROJECTS LIST */}
              <div className="d-flex flex-column gap-5">
                {/* First Project */}

                <div className="card h-100 d-flex flex-column flex-lg-row border-0 bg-black rounded-4 mb-2 project-card">
                  <div className="project-image-wrapper">
                    <img
                      src="/images/AuraLiving_Home.png"
                      alt="AuraLiving e-commerce homepage showing product listings and filters"
                      className="project-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title my-4 text-primary fw-bold">
                      AuraLiving
                    </h3>
                    <p className="projects-tagline mb-0 text-secondary">
                      A modern e-commerce platform enabling product discovery,
                      wishlist management, cart operations, and checkout flows.
                    </p>
                    <div className="d-flex gap-4 pt-3">
                      <a
                        className="btn btn-dark bg-black border-0 px-0 project-link"
                        href="https://aura-living-frontend.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Preview AuraLiving project (opens in a new tab)"
                      >
                        Preview <i className="bi bi-arrow-up-right"></i>
                      </a>
                      <a
                        className="btn btn-dark bg-black border-0 px-0 project-link"
                        href="https://github.com/jeeveshmahajan7/AuraLiving_Frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Preview AuraLiving code on github (opens in a new tab)"
                      >
                        Source <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Second Project */}

                <div className="card h-100 d-flex flex-column flex-lg-row border-0 bg-black rounded-4 mb-2 project-card">
                  <div className="project-image-wrapper">
                    <img
                      src="/images/Anvaya_Home.png"
                      alt="Anvaya CRM homepage showing leads dashboard and leads status"
                      className="project-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title my-4 text-primary fw-bold">
                      Anvaya
                    </h3>
                    <p className="projects-tagline mb-0 text-secondary">
                      Full Stack CRM application for managing leads, sales
                      agents, and pipelines with filtering, prioritization, and
                      analysis.
                    </p>
                    <div className="d-flex gap-4 pt-3">
                      <a
                        className="btn btn-dark bg-black border-0 px-0 project-link"
                        href="https://anvaya-gamma.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Preview Anvaya project (opens in a new tab)"
                      >
                        Preview <i className="bi bi-arrow-up-right"></i>
                      </a>
                      <a
                        className="btn btn-dark bg-black border-0 px-0 project-link"
                        href="https://github.com/jeeveshmahajan7/Anvaya"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Preview Anvaya code on github (opens in a new tab)"
                      >
                        Source <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Third Project */}

                <div className="card h-100 d-flex flex-column flex-lg-row border-0 bg-black rounded-4 mb-2 project-card">
                  <div className="project-image-wrapper">
                    <img
                      src="/images/Meetup_Home.png"
                      alt="Meetup homepage image showing meetup listings"
                      className="project-image"
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="card-title my-4 text-primary fw-bold">
                      Meetup
                    </h3>
                    <p className="projects-tagline mb-0 text-secondary">
                      Web application for discovering meetups, enabling users to
                      browse events, view details, and filter by interests.
                    </p>
                    <div className="d-flex gap-4 pt-3">
                      <a
                        className="btn btn-dark bg-black border-0 px-0 project-link"
                        href="https://meetup-app-smoky.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                         aria-label="Preview Meetup project (opens in a new tab)"
                      >
                        Preview <i className="bi bi-arrow-up-right"></i>
                      </a>
                      <a
                        className="btn btn-dark bg-black border-0 px-0 project-link"
                        href="https://github.com/jeeveshmahajan7/Meetup-App-Frontend"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Preview Meetup code on github (opens in a new tab)"
                      >
                        Source <i className="bi bi-arrow-up-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
