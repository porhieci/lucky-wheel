class Student {
    constructor(firstname, lastname, promo, td_group, tp_group, pic) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._promo = promo;
        this._td_group = td_group;
        this._tp_group = tp_group;
        this._pic = pic;
    }
    get firstname() {
        return this._firstname;
    }
    get lastname() {
        return this._lastname;
    }
    get promo() {
        return this._promo;
    }
    get td_group() {
        return this._td_group;
    }
    get tp_group() {
        return this._tp_group;
    }
    get pic() {
        return this._pic;
    }
    set firstname(value) {
        this._firstname = value;
    }
    set lastname(value) {
        this._lastname = value;
    }
    set promo(value) {
        this._promo = value;
    }
    set td_group(value) {
        this._td_group = value;
    }
    set tp_group(value) {
        this._tp_group = value;
    }
    set pic(value) {
        this._pic = value;
    }
    toString() {
        console.log(this.firstname, this.lastname, this.promo, this.td_group, this.tp_group, this.pic);
    }
}