Calaca
=========

Calaca is a beautiful, easy to use, search UI for Elasticsearch. It's made for you if you need to do quick searches for your documents and don't need anything hard to setup, use.
  - Quick, easy and instant search
  - Looks good
  - Simple configs
  - Query metrics(hits counts, time took)
  - Pagination
  - Lucene queries(boolean, range, etc)
  - Plugin install or stand-alone

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
url: "http://localhost:9200" //Cluster http url
index_name: "twitter" //Index name or comma-separated list
type: "tweet" //Type
size: 10 //Number of results displayed at a time
search_delay: 500 //Delay between actual search request in ms
```

In **index.html** append to ```result.``` the field name you want to show from your es document.
Using dot notation, you can access nested fields like such ```result.transactions.time ```.
```html
<h2>{{result.name}}</h2>
<p>{{result.description}}</p>
```

Plugin
----
You can also install as an elasticsearch plugin from elasticsearch home directory. Same config updates are required to **config.js** and **index.html**.
```bash
bin/plugin -i romansanchez/calaca
```

Should now be accessible by visiting url: http://your-host:9200/_plugin/calaca/


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

Common Issues
----
* No 'Access-Control-Allow-Origin' header is present on the requested resource.
 * Add ```http.cors.enabled: true``` to your ```elasticsearch.yml```

Version
----

1.2.0

Author
----

[@rooomansanchez]


License
----

MIT

[romansanchez.me]:http://romansanchez.me
[@rooomansanchez]:http://twitter.com/rooomansanchez
[Pulse]:http://www.espulse.com
