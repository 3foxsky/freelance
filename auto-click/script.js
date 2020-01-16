function OperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
  {
    return 'iOS';
  }
  else if( userAgent.match( /Android/i ) )
  {
    return 'Android';
  }
  else
  {
    return 'unknown';
  }
}

function onLoad(){

  let youtube = "https://www.youtube.com/watch?v=jFlh-KByU24";
  switch(OperatingSystem()){
      case 'Android':

        youtube = "vnd.youtube://watch?v=jFlh-KByU24";
        break;
      case 'iOS':

        youtube = "youtube://watch?v=_8ylWl9zUiY";
        break;
      default:
        break;
  }

  document.getElementById('youtube').setAttribute('href', youtube);
  document.getElementById('youtube').click()
}
window.onload = onLoad
