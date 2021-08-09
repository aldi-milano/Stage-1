

let printHasil = document.getElementById('ina')

const getDataApi = () => {

    const API = 'https://covid19.mathdro.id/api/countries/Indonesia';
    const option = {
        method: 'GET'
    }

    fetch (API, option)
    .then(response => response.json())
    .then(response => {
        console.log(response)

            printHasil.innerHTML += `
            <div id="box-hasil">
            <p id="result">${response.confirmed.value}</p>
            <p id="confirmed">Confirmed</p>
            </div>
            <div id="box-hasil">
            <p id="result">${response.recovered.value}</p>
            <p id="recovered">Recovered</p>
            </div>
            <div id="box-hasil">
            <p id=""result>${response.deaths.value}</p>
            <p id="deaths">Deaths</p>
            </div>
            `
    })
    .catch(error => console.log(error, 'ERROR'))
}

getDataApi()


let printHasil2 = document.getElementById('world')

const getDataApi2 = () => {

    const API = 'https://covid19.mathdro.id/api/';
    const option = {
        method: 'GET'
    }

    fetch (API, option)
    .then(response => response.json())
    .then(response => {
        console.log(response)

            printHasil2.innerHTML += `
            <div id="country">
            <div id="box-hasil">
            <p id="result">${response.confirmed.value}</p>
            <p id="confirmed">Confirmed</p>
            </div>
            <div id="box-hasil">
            <p id="result">${response.recovered.value}</p>
            <p id="recovered">Recovered</p>
            </div>
            <div id="box-hasil">
            <p id=""result>${response.deaths.value}</p>
            <p id="deaths">Deaths</p>
            </div>
            </div>
            `
    })
    .catch(error => console.log(error, 'ERROR'))
}

getDataApi2()


// let getValue = document.getElementById('search-input')
//         let regex = new RegExp(getValue.value, 'ig')
//         let print = document.getElementById('hasil')



        // let tombolSearch = document.getElementById('btn')
        // let inputText = document.getElementById('search-input')
        // let printHasil = document.getElementById('hasil')
        

        const getDataSearch = () => {
            let api2 = 'https://covid19.mathdro.id/api/confirmed';
            const option2 = {
                method : 'GET'
            }

            fetch(api2, option2)
            .then(response => response.json())
            .then(response =>{
                console.log(response);

                for(let i = 0; i < 30; i++) {
                    print.innerHTML += `
                        <div id="box-hasil">
                            <h3>${response[i].countryRegion}</h3>
                            <p>${response[i].provinceState}</p>
                            <div id="country">                     
                                <div class="boxes">
                                    <p id="confirmed">Confirmed</p>
                                    <p id="text-hasil">${response[i].confirmed}</p>
                                </div>
                                <div class="boxes">
                                    <p id="recovered">Recovered</p>
                                    <p id="text-hasil">${response[i].recovered}</p>
                                </div>
                                <div class="boxes">
                                    <p id="deaths">Deaths</p>
                                    <p id="text-hasil">${response[i].deaths}</p>
                                </div>
                            </div>
                        </div>
                    `
                }

            })
            .catch(error => console.log(error, 'ERROR'))
        }

//         getDataSearch()

