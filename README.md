Calaca
=========

Calaca is a beautiful, easy to use, search UI for Elasticsearch. It's made for you if you need to do quick searches for your documents and don't need anything hard to setup, use.
  - Quick, easy and instant search
  - Looks good
  - Minimum configs required
  - Displays hits count and time taken for query
  - Supports pagination
  - Full support for lucene queries(boolean, range, etc)

Demo
=========
![calaca-demo](https://s3.amazonaws.com/calaca/calaca-demo.gif "Calaca demo")

Dependencies(Already included)
----
  - angular.js
  - angular-animate.js
  - elasticsearch.angular.js

Get Started
----
In **config.js** change the configs to match your Elasticsearch cluster. 
```js
/* Configs */
var indexName = "name"; //Ex: twitter
var docType = "type"; //Ex: tweet
var maxResultsSize = 10;
var host = "localhost"; //Ex: ec2-123-aws.com
var port = 9200;
var protocol = ""; //Default: same as browser
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

1.1.1

Author
----

[romansanchez.me]

[@rooomansanchez]

Need Elasticsearch cluster monitoring and alerting? Check out [Pulse].


License
----

MIT

[romansanchez.me]:http://romansanchez.me
[@rooomansanchez]:http://twitter.com/rooomansanchez
[Pulse]:http://www.espulse.com
