document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    const confirmation = document.getElementById('confirmation');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
      form.classList.add('hidden');
      confirmation.classList.remove('hidden');
    });
  });
  