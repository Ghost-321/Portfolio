class Footer_L extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <div class="footer-lemos-nifme">

        <div class="pt-1 pb-2 px-md-5 container-fluid">
            <div class="row">
                <div class="col-auto col-md-6 align-middle">
                    <p class="mb-0 small" style="color: #DBE2EF;">
                        Built with ❤️ by Me — 
                        <span style="font-weight:bold; color:#f77f00;">please hire me 👀</span> 
                        <a style="color:#DBE2EF; text-decoration:underline;">let’s chat</a>
                    </p>
                </div>
                <div class="col-auto col-md-6 text-md-right align-middle">
                </div>
            </div>
        </div>

    </div>
    `;
  }
}

customElements.define('footer-component-lemos', Footer_L);
