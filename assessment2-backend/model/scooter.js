class Scooter {
    constructor(id, model, lat, lon, max_electricity, current_electricity, added, modelname) {
        this.id = id;
        this.model = {id: model, name: modelname};
        this.position = {lat, lon};
        this.electricity = {max: max_electricity, current: current_electricity};
        this.added = added
    }
}

module.exports = Scooter;