//COVID-19 tracker API 



function loadData(){

fetch('https://api.covidtracking.com/v1/us/daily.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        console.log('success')
    })
}

loadData()