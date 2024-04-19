function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos =
      cookie.indexOf(
        "="
      ); /*it's a variable used to find the position of the equals sign (=) in each cookie string this position is essential for extracting the name of the cookie from the cookie string.*/
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

window.onload = function () {
  deleteAllCookies();
};
