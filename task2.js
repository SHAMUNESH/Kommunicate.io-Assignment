//Kommunicate.io Task 2 - Javascript Function Completion
var url = "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
var parameter  = "utm_medium";
function getUrlParameterValue (url,parameter){
    const queryParams = new URLSearchParams(url);
    const getParams = queryParams.get(parameter);
    return getParams;
}

let valueQuery = getUrlParameterValue(url,parameter);
console.log(valueQuery);