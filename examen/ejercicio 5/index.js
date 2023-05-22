let login = prompt('Hola, ¿Que desea?') 

let message = (login == 'vino') ? 'vaya a la barra, en caso contrario dirijase a la tienda' :
  (login == 'cerveza') ? 'dirijase a la tienda' :
  (login == '') ? 'dirijase a la tienda' :
  '';
  alert (message);