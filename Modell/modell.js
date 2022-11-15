class MadarModell{
    #madarakTomb = [];
    constructor() {
        console.log("model");
    }
    dbModosit(adat){
        console.log("model",adat);
    }
    adatBe(vegpont, myCallBack){
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.#madarakTomb = data.madar;
                myCallBack(this.#madarakTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    getTomb(){
        return this.#madarakTomb;
    }
}

export default MadarModell;