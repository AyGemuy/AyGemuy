function toggleStyle(el, styleName, value) {
    if (el.style[styleName] !== value) {
        el.style[styleName] = value;
        document.cookie = fp+"=1";
    } else {
        el.style[styleName] = '';
        document.cookie = fp+"=0";
    }
}			
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}