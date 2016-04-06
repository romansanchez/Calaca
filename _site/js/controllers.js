/*
 * Calaca - Search UI for Elasticsearch
 * https://github.com/romansanchez/Calaca
 * http://romansanchez.me
 * @rooomansanchez
 * 
 * v1.2.0
 * MIT License
 */

/* Calaca Controller
 *
 * On change in search box, search() will be called, and results are bind to scope as results[]
 *
*/
Calaca.controller('calacaCtrl', ['calacaService', '$scope', '$location', function(results, $scope, $location){

        //Init empty array
        $scope.results = [];

        //Init offset
        $scope.offset = 0;

        var paginationTriggered;
        var maxResultsSize = CALACA_CONFIGS.size;
        var searchTimeout;

        $scope.delayedSearch = function(mode) {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(function() {
                $scope.search(mode)
            }, CALACA_CONFIGS.search_delay);
        }

        //On search, reinitialize array, then perform search and load results
        $scope.search = function(m){
            $scope.results = [];
            $scope.offset = m == 0 ? 0 : $scope.offset;//Clear offset if new query
            $scope.loading = m == 0 ? false : true;//Reset loading flag if new query

            if(m == -1 && paginationTriggered) {
                if ($scope.offset - maxResultsSize >= 0 ) $scope.offset -= maxResultsSize;
            }     
            if(m == 1 && paginationTriggered) {
                $scope.offset += maxResultsSize;
            }
            $scope.paginationLowerBound = $scope.offset + 1;
            $scope.paginationUpperBound = ($scope.offset == 0) ? maxResultsSize : $scope.offset + maxResultsSize;
            $scope.loadResults(m);
        };

        //Load search results into array
        $scope.loadResults = function(m) {
            results.search($scope.query, m, $scope.offset).then(function(a) {

                //Load results
                var i = 0;
                for(;i < a.hits.length; i++){
                    $scope.results.push(a.hits[i]);
                }

                //Set time took
                $scope.timeTook = a.timeTook;

                //Set total number of hits that matched query
                $scope.hits = a.hitsCount;

                //Pluralization
                $scope.resultsLabel = ($scope.hits != 1) ? "results" : "result";

                //Check if pagination is triggered
                paginationTriggered = $scope.hits > maxResultsSize ? true : false;

                //Set loading flag if pagination has been triggered
                if(paginationTriggered) {
                    $scope.loading = true;
                }
            });
        };

        $scope.paginationEnabled = function() {
            return paginationTriggered ? true : false;
        };


    }]
);