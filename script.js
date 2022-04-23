window.onload = () => {
  
  const paragraph = document.querySelectorAll('.box p');
  paragraph.forEach(string => {
    const limit = 100;
    
    if (string.textContent.length > limit) {
      const oldString = string.textContent;
      const newString = `${string.textContent.substr(0, 150)} ...`;
      string.textContent = newString;
      
      const button = string.nextElementSibling;
      button.style.display = 'block';
      
      readMoreAndLess(string, oldString, newString, button);
    }
  });
  
  function readMoreAndLess(string, oldString, newString, button) {
    button.addEventListener('click', function() {
      if (this.textContent == 'Read More') string.textContent = oldString;
      if (this.textContent == 'Read Less') string.textContent = newString;
      
      this.textContent = (this.textContent == 'Read More') ? 'Read Less' : 'Read More';
    });
  }
  
}