import MadarView from "./madarView.js";

class MadarakView{
    constructor(tomb, szuloElem){
        szuloElem.html("");
        szuloElem.append(`<div class="divMadarak"></div>`);
        this.divElem = szuloElem.children("div:last-child");
        tomb.forEach(madar => {
            const madarObj = new MadarView(madar, this.divElem);
            this.madarMegjelenit(madarObj);
        });
    }

    madarMegjelenit(elem){
        //console.log(elem);
    }
}

export default MadarakView;