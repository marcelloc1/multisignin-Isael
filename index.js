// Se ejecuta luego de que el contenido del DOM se haya cargado.
document.addEventListener('DOMContentLoaded', function() {

  // Variables.
  const actionsPoints = document.querySelector('#id-actions');
  const actionsMobile = document.querySelector('.actions-mobile');
  const actionsClass = actionsMobile.classList;

  
  // Funciones
  const handleToggle = () => {
    actionsClass.toggle('active');
  }


  // Listeners.
  actionsPoints.addEventListener('click', handleToggle);

});