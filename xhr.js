function xhr(setting) {
  // requierd
  if (!setting.url) {
    console.error('The url is requierd');
    alert('The url is requierd');
    return false;
  }

  const xhr = new XMLHttpRequest();

  // onload
  if (!setting.success) setting.success = function() {};
  if (!setting.fail) setting.fail = function() {};
  if (!setting.always) setting.always = function() {};
  xhr.onload = function () {
    xhr.status === 200 && xhr.statusText === 'OK' ?
    setting.success(xhr.response):
    setting.fail(xhr.response);
    setting.always(xhr.response);
  };

  // onreadystatechange
  if (!setting.readystatechange) setting.readystatechange = function() {};
  xhr.onreadystatechange = function () {
    setting.readystatechange(xhr.response);
  };

  // data rendering
  let data = '';
  if (setting.data) {
    if (setting.data instanceof FormData) {
      data = setting.data;
    } else {
      let dataArray = Object.entries(setting.data);
      dataArray.forEach(function(d, index) {
        data += d[0] + '=' + d[1];
        if (index < dataArray.length - 1) data += '&';
      });
    }
  }

  // open
  if (!setting.method) setting.method = 'GET';
  if (setting.method === 'GET') setting.url += '?' + data;
  if (setting.async !== false) setting.async = true;
  xhr.open(setting.method.toUpperCase(), setting.url, !setting.async);

  // headers
  if (!setting.contentType && setting.contentType !== '') {
    setting.contentType = 'application/x-www-form-urlencoded; charset=UTF-8';
  }
  if (!setting.data || !(setting.data instanceof FormData)) {
    xhr.setRequestHeader('Content-Type', setting.contentType);
  }

  if (!setting.accept && setting.accept !== '') {
    setting.accept = '*/*';
  }
  xhr.setRequestHeader('Accept', setting.accept);

  if (!setting.XRequestedWith && setting.XRequestedWith !== '') {
    setting.XRequestedWith = 'XMLHttpRequest';
  }
  xhr.setRequestHeader('X-Requested-With', setting.XRequestedWith);

  if (setting.headers) {
    Object.entries(setting.headers).forEach(function(header) {
      xhr.setRequestHeader(header[0], header[1]);
    });
  }

  // send
  xhr.send(data);
}
