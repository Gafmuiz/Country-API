
// const country = document.getElementById('countries');

// const newcountry = document.createElement('div')

// newcountry.innerHTML = country++
// async function getAllCountry() {
//     const country = await fetch('https://restcountries.com/v3.1/all')
//     const results = await country.json()
//     console.log(results);



//     results.map((data)=>{
//         console.log(data.flags.png);
//         const  imageCard = document.createElement('div')

//         const imageName = data.name.png
//         const imageFlag = data.flags.png

//         imageCard.innerHTML = `<img id="imagee" src="${imageFlag}" alt="${imageName}" style="height: 6rem;">`
//     })

//     results.map((data)=>{
//         console.log(data.population);
//         const p = document.getElementById("example");
//         const before = p.textContent
//         console.log(before)
//         p.textContent = `Population: ${data.population}`
//     })
//     results.map((data)=>{
//         console.log(data.region);
//         const p2 = document.getElementById("example2");
//         const before = p2.textContent
//         console.log(before)
//         p2.textContent = `Region: ${data.region}`
//     })
//     results.map((data)=>{
//         console.log(data.capital);
//         const p3 = document.getElementById("example3");
//         const before = p3.textContent
//         console.log(before)
//         p3.textContent = `Capital: ${data.capital}`
//     })  
// }


// getAllCountry()
let result;
let UrL = 'https://restcountries.com/v3.1/all'
fetch(UrL).then((data) => {
    // console.log(data);
    return data.json();
})
    .then((reneweData) => {
        console.log(reneweData);
        let getItem = "";

        result = reneweData;
        reneweData.map((dataIn) => {
            getItem += `<div id="countries">
        <img src="${dataIn.flags.png}" alt="" style="height: 5rem; width:10rem;"><br>
        ${dataIn.name.common}
        <p id="population">Population: ${dataIn.population}</p>
        <p id="region">Region: ${dataIn.continents}</p>
        <p id="capital">Capital: ${dataIn.capital}</p>
    </div>`
        });
        document.getElementById("country").innerHTML = getItem
        // console.log(reneweData[2].name.common);
        // document.getElementById('Colony').innerHTML = reneweData[2].name.common;
    }).catch((errrr) => {
        console.log(errrr);
    });




// function searchy() {
const searchykeyword = document.querySelector('#sachet')
console.log(searchykeyword)
searchykeyword.addEventListener('input', () => {
    console.log('input')
    displaySearchItem2(result);
})


function displaySearchItem2(result) {
    const searchKeyWord = document.getElementById('sachet').value.toLowerCase();
    const filteredCountries = result.filter(dataIn =>
        dataIn.name.common.toLowerCase().includes(searchKeyWord)
    );

    const getItem = filteredCountries.map(dataIn => `
            <div class="country" id="countries">
                <img src="${dataIn.flags.png}" alt="" style="height: 5rem; width:10rem;"><br>
                ${dataIn.name.common}
                <p class="info" id="population">Population: ${dataIn.population}</p>
                <p class="info" id="region">Region: ${dataIn.continents}</p>
                <p class="info" id="capital">Capital: ${dataIn.capital}</p>
            </div>`
    ).join('');

    clearResults();
    document.getElementById("country").innerHTML = getItem;
}
// }



function search() {
    const searchKeyWord = document.getElementById('sachet');
    const searchword = searchKeyWord.value.toLowerCase();


    let URl = `https://restcountries.com/v3.1/name/${searchword}`
    fetch(URl)
        .then((sdata) => {
            return sdata.json();
        })
        .then((newsdata) => {
            if (newsdata.status !== 404) {
                displaySearchItem(newsdata)
            } else {
                alert('error!!!')
            }
        })
        .catch((errr) => {
            console.log(errr);
        })
}
function displaySearchItem(result) {
    const getItem = result.map(dataIn => `<div class="country" id="countries">
    <img src="${dataIn.flags.png}" alt="" style="height: 5rem; width:10rem;"><br>
    ${dataIn.name.common}
    <p class="info" id="population">Population: ${dataIn.population}</p>
    <p class="info" id="region">Region: ${dataIn.continents}</p>
    <p class="info" id="capital">Capital: ${dataIn.capital}</p>
</div>`).join('');

    clearResults();
    document.getElementById("country").innerHTML = getItem;

    // Now, when you search for a country, it will display only the result of that search and clear any existing content.
}

function clearResults() {
    document.getElementById("country").innerHTML = '';
}
function toggle() {
    document.body.classList.toggle('dark-mode');
}

function goBack() {
    const goBack = document.getElementById('backButton');
    goBack.addEventListener("click",()=>{
        const countryContainer = document.getElementById("country");

    fetch('https://restcountries.com/v3.1/all')
        .then((clicked) => {
            return clicked.json()
        })
        .then(Cdata => {
            showCountries(Cdata)
            CountryClick(Cdata);
        })
        .catch(error => console.error('Error fetching countries:', error));
    })
}




// country.js
document.addEventListener("DOMContentLoaded", function () {
    const countryContainer = document.getElementById("country");

    fetch('https://restcountries.com/v3.1/all')
        .then((clicked) => {
            return clicked.json()
        })
        .then(Cdata => {
            showCountries(Cdata)
            CountryClick(Cdata);
        })
        .catch(error => console.error('Error fetching countries:', error));
});

function showCountries(countries) {
    const countryyy = countries.map(dataIn => `
    <div class="country" id="countries" data-country="${dataIn.name.common}">
        <img src="${dataIn.flags.png}" alt="" style="height: 5rem; width:10rem;"><br>
        ${dataIn.name.common}
        <p class="info" id="population">Population: ${dataIn.population}</p>
        <p class="info" id="region">Region: ${dataIn.continents}</p>
        <p class="info" id="capital">Capital: ${dataIn.capital}</p>
    </div>`
    ).join('');
    document.getElementById("country").innerHTML = countryyy;
}

function CountryClick(countries) {
    const countryCards = document.querySelectorAll(".country");
    countryCards.forEach(card => {
        card.addEventListener("click", function () {
            const countryName = this.dataset.country;
            const country = countries.find(c => c.name.common == countryName);
            displayCountryDetails(country);
        });
    });
}

function displayCountryDetails(dataIn) {
    const detailsHTML = `
    <div class="country" id="countries">
    <img src="${dataIn.flags.png}" alt="" style="height: 5rem; width:10rem;"><br>
    ${dataIn.name.common}
    <p class="info" id="population">Population: ${dataIn.population}</p>
    <p class="info" id="region">Region: ${dataIn.continents}</p>
    <p class="info" id="capital">Capital: ${dataIn.capital}</p>
</div>`;

    document.getElementById("country").innerHTML = detailsHTML;
}

// function goUP() {
//     window.scrollTo({ top: 100, behavior: 'smooth' });
// }

// // Function to scroll to the bottom of the page
// function goDown() {
//     window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
// }

// function clickCard() {
//     let Count = document.querySelectorAll('#country')

// Count.forEach((card, index) => {
//     card.addEventListener('click', function displayCard() {
//          const selectCountry = countries[index];
//     //     displayCard(selectCountry);
//         const detailPage = window.open('newcountry', '_blank');
//          detailPage = document.write(`<html>
//          <head>
//          <title>${dataIn.name.common}</title>
//          </head>
//          <body>
//          <div>
//          <img src="${dataIn.flags.png}" alt="${dataIn.flags.png}" style="height: 5rem; width:10rem;"><br>
//         ${dataIn.name.common}
//         <p class="info" id="population">Population: ${dataIn.population}</p>
//         <p class="info" id="region">Region: ${dataIn.continents}</p>
//         <p class="info" id="capital">Capital: ${dataIn.capital}</p>
//     </div>
//     </body>
//          </html>
//         `);
//        return detailPage;
//     }
//     // function () {
//     //     const selectCountry = countries[index];
//     //     displayCard(selectCountry);
//     // }
//     )
// })

// }
// clickCard(detailPage);





// function beingCLicked(results) {
//     // console.log(reneweDatas);
//     const getItem = results.map(dataIn=>`<div class="country" id="countries">
//     <img src="${dataIn.flags.png}" alt="" style="height: 5rem; width:10rem;"><br>
//     ${dataIn.name.common}
//     <p class="info" id="population">Population: ${dataIn.population}</p>
//     <p class="info" id="region">Region: ${dataIn.continents}</p>
//     <p class="info" id="capital">Capital: ${dataIn.capital}</p>
// </div>`)
// }

// function searchCountries() {
//     const searchInput = document.getElementById('searchInput');
//     const searchTerm = searchInput.value.toLowerCase();

//     fetch(https://restcountries.com/v3.1/name/${searchTerm})
//         .then(response => response.json())
//         .then(data => {
//             if (data.status !== 404) {
//                 displayCountryDetail(data[0]);
//             } else {
//                 alert('Country not found!');
//             }
//         })
//         .catch(error => console.error('Error fetching country:', error));
// }