# Ajax Request Func
### What is the xhr?
This is a function to make Ajax requests faster and easier
### How to use:
First, add the xhr.js from your Javascript folder to the project:
```javascript
<script src="./js/xhr.js" type="text/javascript"></script>
```
Then, you can send an Ajax request and manage the response as follows:
```javascript
xhr({
  method: 'GET | POST' (optional, POST by default),
  url: URL (requaired),
  Async: true | false (optional, true by default),
  data: FormData | Json (optional, empty string by default),
  contentType: String (optional, 'application/x-www-form-urlencoded; charset=UTF-8' by default),
  accept: String (optional, '*/*' bby default),
  XRequestedWith: String (optional, 'XMLHttpRequest' by default),
  headers: Json (optional, null by default),
  success: callback(response) (optional, POST by default),
  fail: callback(response) (optional, POST by default),
  always: callback(response) (optional, POST by default),
  readystatechange: callback(response) (optional, POST by default)
})
```
