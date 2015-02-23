/*
 * Calaca - Search UI for Elasticsearch
 * https://github.com/romansanchez/Calaca
 * http://romansanchez.me
 * @rooomansanchez
 * 
 * v1.1.1
 * MIT License
 */

/* Service to Elasticsearch */
Calaca.factory('calacaService', ['$q', 'esFactory', '$location', function($q, elasticsearch, $location){

    //Set defaults if host and port aren't configured
    var esHost = (host.length > 0 ) ? host : $location.host();
    var esProtocol = (protocol.length > 0 ) ? protocol : $location.protocol();

    var client = elasticsearch({ host: esProtocol + '://' + esHost + ":" + port });

    var search = function(query, mode, offset){

        var deferred = $q.defer();

        client.search({
                "index": indexName,
                "type": docType,
                "body": {
                    "size": maxResultsSize,
                    "from": offset,
                    "query": {
                        "query_string": {
                            "query": query
                        }
                    }
                }
        }).then(function(result) {

                var i = 0, hitsIn, hitsOut = [], source;
                hitsIn = (result.hits || {}).hits || [];
                for(;i < hitsIn.length; i++){
                    source = hitsIn[i]._source;
                    source._id = hitsIn[i]._id;
                    source._index = hitsIn[i]._index;
                    source._type = hitsIn[i]._type;
                    source._score = hitsIn[i]._score;
                    hitsOut.push(source);
                }
                deferred.resolve({ timeTook: result.took, hitsCount: result.hits.total, hits: hitsOut });
        }, deferred.reject);

        return deferred.promise;
    };

    return {
        "search": search
    };

    }]
);
