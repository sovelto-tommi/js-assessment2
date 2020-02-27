// TODO: toteuta seuraavat kolme funktiota
// Saat tarvittaessa muuttaa parametreja
// esimerkiksi XHR:n vaatiman callback-funktion
// välittämiseksi (jos siis käytät XHR:ia mieluumin
// kuin fetchiä)

export function getAllScooters() {
    return fetch('/api/scooters').then(resp=>{
        if (resp.status !== 200) {
            console.error("Heitetään virhe");
            throw new Error(`Unable to fetch, status: ${resp.status}`)
        }
        return resp.json();
    });    
}
export function getSingleScooter(id) {
    return fetch(`/api/scooters/${id}`).then(resp=>{
        if (resp.status !== 200) {
            console.error("Heitetään virhe");
            throw new Error(`Unable to fetch, status: ${resp.status}`)
        }
        return resp.json();
    });        
}
export function postSingleScooter(scooter) {
    throw new Error("Not implemented");
}

// Valmis metodi, ei tarvitse koskea. Formi käyttää tätä
// alustamaan mahdollisten skuuttien mallit alasvetovalikkoon
export function getAllModels() {
    return fetch('/api/models').then(resp=>{
        if (resp.status !== 200) {
            console.error("Heitetään virhe");
            throw new Error(`Unable to fetch, status: ${resp.status}`)
        }
        return resp.json();
    });
}

