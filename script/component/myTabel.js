class Tabel extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      #listJadwal {
      display: table;
      width: 100%;
      text-align: center;
    }

    #listJadwal td {
      font-size: 1em;
      padding: 0.6em;
      font-weight: 200;
    }

    #listJadwal tr:nth-child(odd) {
      background-color:aliceblue;
    }

    #listJadwal tr:nth-child(even) {
      background-color:ghostwhite;
    }

    #listJadwal tr:hover {
      background-color: cadetblue;
      color:ghostwhite;
      cursor: pointer;
    }
    </style>
    <table id="listJadwal">
      <div id="itemJadwal"></div>
    </table>
    `
  }
}

customElements.define("my-tabel", Tabel);