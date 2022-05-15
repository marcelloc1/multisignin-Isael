// Se ejecuta luego de que el contenido del DOM se haya cargado.
document.addEventListener('DOMContentLoaded', function() {

  // Variables.
  const actionsPoints = document.querySelectorAll('.points-actions');
  const actionsMobile = document.querySelectorAll('.actions-mobile');

  // Funciones
  const handleToggle = (index) => {
    actionsMobile.forEach((action, indexAction) => {
      if(index !== indexAction) {
        action.classList.remove('active');
      }
    });
    actionsMobile[index].classList.toggle('active');
  }


  // Listeners.
  actionsPoints.forEach((action, index) => (
    action.addEventListener('click', () => handleToggle(index))
  ))

});