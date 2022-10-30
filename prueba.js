console.log("Ingreso JS");

const ethereumButton = document.querySelector('.enableEthereumButton');

ethereumButton.addEventListener('click', () => {
   // var btn = document.getElementById("eth-btn");
   if(window.ethereum.selectedAddress != null){
     //votar alerta
   //   Swal.fire({
   //     position: 'top-end',
   //     icon: 'success',
   //     title: 'Estás Conectado',
   //     showConfirmButton: false,
   //     timer: 1500
   //   })
     $("eth-btn").html("CONECTADO");
   }else{
   //Will Start the metamask extension
     ethereum.request({ method: 'eth_requestAccounts' });
   }
 });
 