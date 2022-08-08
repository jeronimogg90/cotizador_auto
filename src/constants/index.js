export const MARCAS = [
    {
        id: 1, 
        nombre: 'Europeo'
    },{
        id: 2, 
        nombre: 'Americano'
    },{
        id: 3,
        nombre: 'Asiatico'
    }]
    
   const YEARMAX = new Date().getFullYear(); //Año actual 2022
   export const YEARS = Array.from( new Array(20), (valor, index) => YEARMAX - index)

   export const PLANES = [
       {
           id: 1, nombre: "basico"
       },{
           id:2, nombre: "completo"
       }
   ]