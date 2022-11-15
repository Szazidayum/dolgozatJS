import MadarModell from "../Modell/modell.js";
import MadarakView from "../View/madarakView.js";
import MadarView from "../View/madarView.js";

class MadarController{
    constructor() {
        const madarModell = new MadarModell();
        madarModell.adatBe("../adat.json", this.madarAdatok);
        
        $("#fooldal").on("click", ()=>{
            this.madarAdatok(madarModell.getTomb());
        })
        $(window).on("dbValtozik",(event)=>{
            madarModell.dbModosit(event.detail);
        });
    }

    madarAdatok(tomb){
        let szuloElem = $(".madarakLista");
        new MadarakView(tomb, szuloElem);
    }
    tombAdatok(tomb){
        new MadarView(tomb);
    }
}

export default MadarController;