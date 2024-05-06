import './src/App/components/card/cardComponent.js';

const divCards = document.querySelector('#container-cards');
const alumnos = [
    {
        nombre : 'Alumno A',
        apellidos : 'Apellido A'
    },
    {
        nombre : 'Alumno B',
        apellidos : 'Apellido B'
    },
    {
        nombre : 'Alumno C',
        apellidos : 'Apellido C'
    },
    {
        nombre : 'Alumno A',
        apellidos : 'Apellido D'
    },
    {
        nombre : 'Alumno A',
        apellidos : 'Apellido D'
    }
]
document.addEventListener('DOMContentLoaded', (e) => {
    alumnos.forEach(item =>{
        divCards.insertAdjacentHTML('beforeend',`
        <card-component class ="g-3 col-4 col-sm-6 col-lg-3">
        <span slot = "numero">${item.nombre}</span>
        <span slot = "contenido">${item.apellidos}</span>
        </card-component>`);
    })
});