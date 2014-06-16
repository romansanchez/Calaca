Calaca
=========

Calaca is a simple, easy to use search client for ElasticSearch. It's made for you if all you need to do is quick searches for your documents and don't need anything fancy or hard to setup, use. 
  - Quick and easy search
  - Looks good
  - Minimum configs required

Dependencies
----
  - angular.js
  - elasticsearch.angular.js

Get Started
----
In **calaca.js** change the configs to match your ElasticSearch cluster. 
```js
/* Configs */
var indexName = "name";
var docType = "type";
var maxResultsSize = 10;
var host = "localhost";
var port = "9200";
```

Styling
----
You can easily change the look and feel of Calaca by implementing the below CSS classes. 
```css
.title
.searchBox
.no-results
.results
.result
```


Version
----

1.0.0

Author
----
Roman Sanchez

[romansanchez.me]

[@rooomansanchez]


License
----

MIT

[romansanchez.me]:http://romansanchez.me
[@rooomansanchez]:http://twitter.com/rooomansanchez
