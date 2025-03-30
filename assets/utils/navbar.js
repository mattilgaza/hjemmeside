class NavBar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <nav>
            <ul class="sidebar">
                <li class="closePosition" onclick=hideSidebar()><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="antiquewhite"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></a></li>
                <li class="active"><a href="index.html" aria-current="page">Forside</a></li>
                <li><a href="doner.html">Gi Her</a></li>
                <li><a href="om_foreningen.html">Om Foreningen</a></li>
                <li><a href="bakgrunn.html">Om Oss</a></li>
                <li><a href="bilder.html">Bilder</a></li>
            </ul>
            <ul>
                <a class="nav-brand" href="index.html">Mat til Gaza</a>
                <li class="hideOnMobile"><a href="doner.html">Gi Her</a></li>
                <li class="hideOnMobile"><a href="om_foreningen.html">Om Foreningen</a></li>
                <li class="hideOnMobile"><a href="bakgrunn.html">Om Oss</a></li>
                <li class="hideOnMobile"><a href="bilder.html">Bilder</a>
                    <ul class="dropdown" style="border-bottom-right-radius: 0.5rem; border-bottom-left-radius: 0.5rem;">
                        <li><a href="sending1.html">Okt-2024</a></li>
                        <li><a href="sending2.html">Nov-2024</a></li>
                        <li><a href="sending3.html">Des-2024</a></li>
                    </ul>
                </li>

                <li class="hideHamburger" onclick="showSidebar()"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="white"><path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a></li>
            </ul>
        </nav>
      `;
    }
  }
  customElements.define('nav-bar', NavBar);
  