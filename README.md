Calaca
=========

Calaca is a simple, easy to use search client for Elasticsearch. It's made for you if all you need to do is quick searches for your documents and don't need anything fancy or hard to setup, use. 
  - Quick, easy and instant search
  - Looks good
  - Minimum configs required


![calaca-screenshot](https://s3.amazonaws.com/calaca/calaca.png "Calaca screenshot")

Dependencies(Already included)
----
  - angular.js
  - elasticsearch.angular.js

Get Started
----
In **calaca.js** change the configs to match your Elasticsearch cluster. 
```js
/* Configs */
var indexName = "name";
var docType = "type";
var maxResultsSize = 10;
var host = "localhost";
var port = 9200;
```

In **index.html** append to ```result.``` the field name you want to show from your es document.
Using dot notation, you can access nested fields like such ```result.transactions.time ```.
```html
<h2>{{result.name}}</h2>
<p>{{result.description}}</p>
```

Styling
----
You can easily change the look and feel of Calaca by implementing the below CSS classes. 
```css
.title
.search-box
.no-results
.results
.result
```


Version
----

1.0.1

Author
----
Roman Sanchez

[romansanchez.me]

[@rooomansanchez]

Need Elasticsearch cluster monitoring and alerting? Check out [Pulse].


License
----

MIT

[romansanchez.me]:http://romansanchez.me
[@rooomansanchez]:http://twitter.com/rooomansanchez
[Pulse]:https://espulse.com
