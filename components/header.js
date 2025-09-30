class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <h1><a class="navbar-brand" href="/Portfolio/index.html">Jonathan Morel</a></h1>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarCollapse" style="">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mr-2">
              <a class="nav-link" href="/Portfolio/index.html">Home</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="/Portfolio/pages/education.html">Education</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="/Portfolio/pages/experience.html">Experience</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="/Portfolio/pages/skills.html">Skills</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="/Portfolio/pages/teaching.html">Teaching</a>
            </li>
            <li class="nav-item mr-2">
              <a class="nav-link" href="/Portfolio/pages/projects.html">Projects</a>
            </li> 
          </ul>
        </div>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);
