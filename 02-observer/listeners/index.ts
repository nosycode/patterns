export default () => {
  const button = document.createElement('button');
  button.textContent = 'Should I do it?';
  button.addEventListener('click', () => console.log("Don't do it, you might reget it!"));
  button.addEventListener('click', () => console.log("Come on, do it!"));
  document.body.appendChild(button);
}
