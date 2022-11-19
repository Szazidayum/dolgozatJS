class MadarModell{
    #madarakTomb = [];
    constructor() {
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