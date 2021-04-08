class myHeader extends HTMLElement {
  connectedCallback() { //terpanggil ketika element telah diterapkan pada DOM
    this.render(); //element ini langsung melakukan rendering begitu diterapkan 
  }

  render() {


    this.innerHTML = `
    <style>
      my-header {
        display: block;
        width: 100%;
      }
      
      #judul {
        margin-bottom: 5px;
        text-align: center;
        font-size: 1.5em;
        font-weight: 500;
        padding: 0.5em;
        background-color:lightseagreen;
      }
      
      .tanggal {
        text-align: center;
        background-color:darkcyan;
        color:whitesmoke;
        padding: 1.2em;
        margin: -5px 0px 0px 0px;
        font-weight: 500;
      }
    </style>

    <h3 id="judul">Jadwal Sholat <br>dengan<br> Prayer Times API</h3>
    <h4 class="tanggal"></h4>
    `
  }
}

customElements.define("my-header", myHeader);