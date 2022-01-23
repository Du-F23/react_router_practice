import React from 'react';
import Menu from '../routes/Menu';

const num1=10;
const num2=5;

const numeros={n1:10,n2:7, n3:11} //Arreglo

export default function Datos1(){
return(
    <div>
        
    <Menu/>
    <hr/>
    <h2>Operador Matematico</h2>
    <br/>
    {numeros.n1} + {num1} = {numeros.n1+num1}
    <br/>
    {num2}*{numeros.n3} = {num2*numeros.n3}
    <br/>
    {(numeros.n2 < 100) ? 'El numero es menor a 100' : 'El numero es mayor a 100'}
</div>
)
} 



