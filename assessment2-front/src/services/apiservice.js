
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
    return fetch(`/api/scooters`, {
        method: 'POST',
        body: JSON.stringify(scooter),
        headers: {
            'Content-Type': 'application/json'
          },
    }).then(resp=>{
        if (resp.status !== 201) {
            console.error("Heitetään virhe");
            throw new Error(`Unable to fetch, status: ${resp.status}`)
        }
        return resp.json();
    });        
    
}

export function getAllModels() {
    return fetch('/api/models').then(resp=>{
        if (resp.status !== 200) {
            console.error("Heitetään virhe");
            throw new Error(`Unable to fetch, status: ${resp.status}`)
        }
        return resp.json();
    });
}

