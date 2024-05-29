import {radiologia, traumatologia, dental} from './registros.js'
let specialitiesNames = ['Radiología', 'Traumatología', 'Dental'];
let specialities = [radiologia, traumatologia, dental]
let firstLastRecord = document.querySelectorAll('.firstLastRecord');
let spRecord = document.querySelectorAll('.spRecord');
let i = 0;
let j = 0;

firstLastRecord.forEach(record => {
    let specialityRecords = specialities[i];
    record.innerHTML = 
    `
        <h5 class="text-uppercase fw-bold text-dark">${specialitiesNames[i]}</h5>
        <p>
            <span class="fs-4 fw-bold">Primera atención: </span>
            <span class="fs-4 text-capitalize">${specialityRecords[0].paciente} - ${specialityRecords[0].prevision} | </span>
            <span class="fs-4 fw-bold">Última atención: </span>
            <span class="fs-4">${specialityRecords[specialityRecords.length-1].paciente} - ${specialityRecords[specialityRecords.length-1].prevision}</span>
        </p>
    `;
    i+=1;
});

spRecord.forEach(record => {
    let specialityRecords = specialities[j];
    let dataRows = '';

    specialityRecords.forEach(records => {
        dataRows += `
            <tr>
                <td scope="row">${records.hora}</td>
                <td>${records.especialista}</td>
                <td>${records.paciente}</td>
                <td>${records.rut}</td>
                <td class="text-uppercase">${records.prevision}</td>
            </tr>
        `;
    });

    record.innerHTML = 
    `
        <h3>${specialitiesNames[j]}</h3>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Hora</th>
                    <th scope="col">Especialista</th>
                    <th scope="col">Paciente</th>
                    <th scope="col">Rut</th>
                    <th scope="col">Previsión</th>
                </tr>
            </thead>
            <tbody>
                ${dataRows}
            </tbody>
        </table>
    `;
    j+=1;
});