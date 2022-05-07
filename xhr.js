function xhr(setting) {
  // requierd
  if (!setting.url) {
    console.error('The url is requierd')
    return false;
  }

  const xhr = new XMLHttpRequest();

  // onload
  if (!setting.success) {
    setting.success = function() {}
  }
  if (!setting.fail) {
    setting.fail = function() {}
  }
  if (!setting.always) {
    setting.always = function() {}
  }
  xhr.onload = function () {
    if (xhr.status === 200 && xhr.statusText === 'OK') {
      setting.success(xhr.response);
    } else {
      setting.fail(xhr.response);
    }
    setting.always(xhr.response);
  };

  // onreadystatechange
  if (!setting.readystatechange) {
    setting.readystatechange = function() {}
  }
  xhr.onreadystatechange = function () {
    setting.readystatechange(xhr.response);
  };

  // open
  if (!setting.method) {
    setting.method = 'GET';
  }
  if (!setting.async) {
    setting.async = true;
  }
  xhr.open(setting.method.toUpperCase(), setting.url, setting.async);

  // headers
  if (!setting.headers) {
    setting.headers = {};
  }
  Object.entries(setting.headers).forEach(function(header) {
    xhr.setRequestHeader(header[0], header[1]);
  });

  // send
  xhr.send();
}