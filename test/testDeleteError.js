//testDeleteError.js

var app = {};

app[ "delete" ]( '*', function( req, res ) {
    console.log( "req " + req );
    console.log( "res " + res );
} );