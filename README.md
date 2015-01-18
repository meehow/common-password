This package was inspired by an article "[10,000 Top Passwords](https://xato.net/passwords/more-top-worst-passwords/)" by [Mark Burnett](https://xato.net/author/mb/).

![Popular passwords](http://i.imgur.com/9OzTQVk.png)

This package can be used as password requirement, but should be combined with length checking. Some passwords are not listed as popular because they don't meet length requirement in many systems. For example `1234` is listed as popular password, but `123` is not.

Installation
------------

```
npm install common-password
```

Example
-------

Check [example.js](./example.js).

```
$ node ./example.js passw0rd
password is too easy to guess
not OK
$ node ./example.js eiGoh8ou
OK
```
