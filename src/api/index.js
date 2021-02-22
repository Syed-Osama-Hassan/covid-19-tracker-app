const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changeURL = url;
    // Changing URL based on country && remains same if global
    if(country && country !== 'global'){
        changeURL = `${url}/countries/${country}`;
    }

    try{
        const response = await fetch(changeURL);
        const data = await response.json();

        const modifiedData = {
            confirmed: data.confirmed ,
            recovered: data.recovered ,
            deaths: data.deaths,
        }
    
        return modifiedData;
    }
    catch(e){
        console.log(e);
    }
}

export const fetchGlobalData = async () => {
    try{
        const response = await fetch(`${url}/daily`);
        const data = await response.json();

        const modifiedData = data.map((globalData) => ({
            confirmed: globalData.confirmed.total,
            deaths: globalData.deaths.total,
            date: globalData.reportDate
        }));
        return modifiedData;
    }
    catch(e){
        console.log(e);
    }
}
    export const fetchCountries = async () => {
        try{
            const response = await fetch(`${url}/countries`);
            const {countries} = await response.json();
            
            return countries.map((country) => country.name);
        }
        catch(e){
            console.log(e);
        }
    }