/*
 * Calaca
 * Simple search client for ElasticSearch
 * https://github.com/romansanchez/Calaca
 * Author - Roman Sanchez
 * http://romansanchez.me
 * @rooomansanchez
 * 
 * v1.0.0
 * MIT License
 */

/* Configs */
var indexName = "name";
var docType = "type";
var maxResultsSize = 10;
var host = "localhost";
var port = "9200";

/* Module */
window.Calaca = angular.module('calaca', ['elasticsearch'],
    ['$locationProvider', function($locationProvider){
        $locationProvider.html5Mode(true);
    }]
);

/* Service to ES */
Calaca.factory('calacaService',
    ['$q', 'esFactory', '$location', function($q, elasticsearch, $location){

     //Defaults if host and port aren't configured above
    var esHost = (host.length > 0 ) ? host : $location.host();
    var esPort = (port.length > 0 ) ? port : 9200;

    var client = elasticsearch({ host: esHost + ":" + esPort });

    var search = function(term, offset){

        var deferred = $q.defer();

        client.search({
                "index": indexName,
                "type": docType,
                "body": {
                    "size": maxResultsSize,
                    "query": {
                        "match": {
                            "_all": term
                        }
                    }
                }
            }).then(function(result) {
                var ii = 0, hits_in, hits_out = [];
                hits_in = (result.hits || {}).hits || [];
                for(;ii < hits_in.length; ii++){
                    hits_out.push(hits_in[ii]._source);
                }
                deferred.resolve(hits_out);
            }, deferred.reject);

            return deferred.promise;
        };
        return {
            "search": search
        };
    }]
);

/* Controller
 *
 * On change in search box, search() will be called, and results are bind to scope as results[]
 *
*/
Calaca.controller('calacaCtrl', ['calacaService', '$scope', '$location', function(results, $scope, $location){

        //Init empty array
        $scope.results = [];

        //On search, reinitialize array, then perform search and load results
        $scope.search = function(){
            $scope.results = [];
            $location.search({'q': $scope.query});
            $scope.loadResults();
        };

        //Load search results into array
        $scope.loadResults = function() {
            results.search($scope.query).then(function(results) {
                var ii = 0;
                for(;ii < results.length; ii++){
                    $scope.results.push(results[ii]);
                }
            });
        };


    }]
);
