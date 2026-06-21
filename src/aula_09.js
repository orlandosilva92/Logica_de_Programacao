let pedido = 'Peixe';
switch (pedido.toLowerCase()) {
  case 'peixe':
    console.log('Peixe frito');
    break;
  case 'carne':
    console.log('Carne guisada');
    break;
  case 'ovo':
    console.log('Omelete');
    break;
  default:
    console.log('Pedido não encontrado');
}