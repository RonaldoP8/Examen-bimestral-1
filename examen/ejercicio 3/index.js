let login = prompt('Ingrese una letra entre A,B,C,D') 

let message = (login == 'A') ? 'ACERTO' :
  (login == 'B') ? 'ACERTO' :
  (login == 'C') ? 'ERROR' :
  (login == 'D') ? 'ACERTO' :
  '';
  alert (message);