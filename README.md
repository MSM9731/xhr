# Ajax request function
### What is the xhr?
This is a function to make ajax requests faster and easier
### How to use:
First, add the xhr.js from your Javascript folder to the project:
```javascript
<script src="./js/xhr.js" type="text/javascript"></script>
```
Then, you can send an Ajax request and manage the response as follows:
```javascript
xhr({
  url: URL                                (requaired),
  method: 'GET | POST'                    (optional, POST by default),
  async: true | false                     (optional, true by default),
  data: FormData | Json                   (optional, empty string by default),
  contentType: String                     (optional, 'application/x-www-form-urlencoded; charset=UTF-8' by default),
  accept: String                          (optional, '*/*' by default),
  XRequestedWith: String                  (optional, 'XMLHttpRequest' by default),
  headers: Json                           (optional, null by default),
  success: callback(response)             (optional, empty function by default),
  fail: callback(response)                (optional, empty function by default),
  always: callback(response)              (optional, empty function by default),
  readystatechange: callback(response)    (optional, empty function by default)
})
```
