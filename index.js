//COVID-19 tracker API 


function loadUSHistoric(){

fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        console.log('successful load loadUSHistoric')
    })
}

function loadUSCurrent(){
    fetch('https://api.covidtracking.com/v1/us/current.json')
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data)
            console.log('successful load loadUSCurrent')
        })
    }

function loadStateDailyHistoric(){

        fetch('https://api.covidtracking.com/v1/states/daily.json')
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                console.log(data)
                console.log('successful load loadStateDailyHistoric')
            })
        }

function loadStateDailyCurrent(){

    fetch('https://api.covidtracking.com/v1/states/current.json')
        .then(function(response){
             return response.json()
        })
        .then(function(data){
            console.log(data)
            console.log('successful load loadStateDailyCurrent')
        })
    }
    
loadUSHistoric() //
loadUSCurrent()
loadStateDailyHistoric()
loadStateDailyCurrent()