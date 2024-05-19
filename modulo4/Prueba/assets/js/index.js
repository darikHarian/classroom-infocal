$(document).ready(function(){
    $('button').on('click', function(){
        let splashInfo = $('#splashInfo');
        let searchForm = $('#searchForm');
        let heroCards = $('#heroCards');
        let heroPowerStats = $('#heroPowerStats');

        let heroId = $('#heroId').val();
        if (heroId < 1 || heroId > 732 || heroId == '') {
           alert('Por favor ingrese un número entre 1 y 732')
        } else {
            let id = Number(heroId);
            let token = '449642e018eb9d8e729e50f825a1d62c';
            let url = `https://superheroapi.com/api.php/${token}/${id}`;

            $.ajax({
                type: "GET",
                url: url,
                dataType: "json",
                success: function(data) {
                    heroBiography(data);
                    heroStats(data);
                    splashInfo[0].classList.add('d-none');
                    searchForm[0].classList.add('d-none');
                    heroCards[0].classList.remove('d-none');
                    heroPowerStats[0].classList.remove('d-none');

                },
                error: function(error) {}
            });
        };
    });
});

const heroBiography = (data) => {
    document.getElementById('heroCard').innerHTML = 
    `
        <div class="card-image">    
            <img class="w-100 rounded-start-4" src="${data.image.url}" alt=""/>
        </div>
        <div class="card-body">
            <p class="fs-5">
                <span class="fw-bold">Nombre: </span>
                <span>${data.name}</span>
            </p>
            <p>
                <span class="fw-bold">Conexiones: </span>
                <span>${data.connections["group-affiliation"]}</span>
            </p>
            <p>
                <span class="fw-bold">Publicado por: </span>
                <span>${data.biography.publisher}</span>
            </p>
            <p>
                <span class="fw-bold">Ocupación: </span>
                <span>${data.work.occupation}</span>
            </p>
            <p>
                <span class="fw-bold">Primera aparición: </span>
                <span>${data.biography["first-appearance"]}</span>
            </p>
            <p>
                <span class="fw-bold">Altura: </span>
                <span>${data.appearance.height}</span>
            </p>
            <p>
                <span class="fw-bold">Peso: </span>
                <span>${data.appearance.weight}</span>
            </p>
            <p>
                <span class="fw-bold">Alias: </span>
                <span>${data.biography.aliases}</span>
            </p>
        </div>
    `;
};

const heroStats = (data) => {
    var options = {
        theme: "dark1",
        title: {
            text: `Estadísticas de poder para ${data.name}`
        },
        width: 600,
        animationEnabled: true,
        data: [{
            type: "pie",
            startAngle: 40,
            toolTipContent: "<b>{label}</b>: {y}%",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}%",
            dataPoints: [
                { y: data.powerstats.intelligence, label: "Inteligencia" },
                { y: data.powerstats.strength, label: "Fuerza" },
                { y: data.powerstats.speed, label: "Velocidad" },
                { y: data.powerstats.durability, label: "Durabilidad" },
                { y: data.powerstats.power, label: "Poder" },
                { y: data.powerstats.combat, label: "Combate" }
            ]
        }]
    };
    $("#heroPowerStats").CanvasJSChart(options);       
};

const searchAgain = () => {
    location.reload();
};