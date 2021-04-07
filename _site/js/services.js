/*
 * Calaca - Search UI for Elasticsearch
 * https://github.com/romansanchez/Calaca
 * http://romansanchez.me
 * @rooomansanchez
 * 
 * v1.2.0
 * MIT License
 */

/* Service to Elasticsearch */
Calaca.factory('calacaService', ['$q', 'esFactory', '$location', function($q, elasticsearch, $location){
    var client = elasticsearch({host: CALACA_CONFIGS.url});

    var search = function(query, mode, offset){

        var deferred = $q.defer();

        if (query.length == 0) {
            deferred.resolve({ timeTook: 0, hitsCount: 0, hits: [] });
            return deferred.promise;
        }

        client.search({
                "index": CALACA_CONFIGS.index_name,
                "body": {
                    "size": CALACA_CONFIGS.size,
                    "query": {
                        "match": {
                            "text": query
                        }
                    }
                }
        }).then(function(result) {

                // console.log(result)
                var i = 0, hitsIn, hitsOut = [], source;
                hitsIn = (result.hits || {}).hits || [];
                for(;i < hitsIn.length; i++){
                    s = {
                        _id: hitsIn[i]._id,
                        author: hitsIn[i]._source.author,
                        text: hitsIn[i]._source.text.substring(0, 200) + '...',
                    }
                    hitsOut.push(s);
                }
                // console.log(hitsOut)
                deferred.resolve({ timeTook: result.took, hitsCount: result.hits.total, hits: hitsOut });
        }, deferred.reject);

        return deferred.promise;
    };

    return {
        "search": search
    };

    }]
);
