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
  method: 'GET | POST',
  url: url,
  async: true | false,
  headers: {
    headerName1: headerValue1,
    headerName2: headerValue2
  },
  success: callback(response),
  fail: callback(response),
  always: callback(response),
  readystatechange: callback(response)
})
```
