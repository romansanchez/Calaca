/*
 * Calaca - Search UI for Elasticsearch
 * https://github.com/romansanchez/Calaca
 * http://romansanchez.me
 * @rooomansanchez
 * 
 * v1.2.0
 * MIT License
 */

/* Configs */
/**
 *
 * url - Cluster http url
 * index_name - Index name or comma-separated list
 * type - Type
 * size - Number of results to display at a time when pagination is enabled.
 * search_delay - Delay between actual search request in ms. Reduces number of queries to cluster by not making a request on each keystroke. 
 */

var CALACA_CONFIGS = {
	url: "https://elastic:7lErqi7N00pGNzr0B4xYstHu@i-o-optimized-deployment-ff5954.es.westus2.azure.elastic-cloud.com:9243",
	index_name: "climate_change",
	size: 200,
	search_delay: 500
}
