class MadarView{
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        
        szuloElem.append(`
        <div class="divMadar">
        <div class="kepe"><img src="${elem.kep}"></div>
        <div class="w3-panel w3-center"><p>Madár: ${elem.madar}</p></div>
        <div class="ara"><p>Ára: ${elem.ar}</p></div>
        <div class="elet"><p>Élettartama: ${elem.elettartam}</p></div>
        <div class="darab"><p>Elérhetőség: ${elem.db}</p></div>
        <div class="szama"><p>ID:${elem.id}</p></div>
        <div><button id="K${elem.id}">csökken</button></div>
        </div>
        `);
        this.kivonDb = $(`#K${elem.id}`);
        this.kivonDb.on("click", ()=>{
            elem.db = elem.db-1;
            this.kattintasTrigger("dbValtozik");
            console.log(elem.db);
        });
    }

    kattintasTrigger(esemeny){
        const event = new CustomEvent(esemeny,{detail:this.#elem.id})
        window.dispatchEvent(event);
    }
}

export default MadarView;