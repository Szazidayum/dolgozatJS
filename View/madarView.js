class MadarView{
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        
        szuloElem.append(`
        <div class="divMadar">
        <div class="kepe"><img src="${elem.kep}"></div>
        <div class="w3-panel w3-center">Madár: ${elem.madar}</div>
        <div class="ara">Ára: ${elem.ar}</div>
        <div class="elet">Élettartama: ${elem.elettartam}</div>
        <div class="darab">Elérhetőség: ${elem.db}</div>
        <div class="szama">ID:${elem.id}</div>
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