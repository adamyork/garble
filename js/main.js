$( document ).ready( function() {
    $.ajax( {
        url: "./samples/garbled/underscore-1.4.4.js.gz",
        method: 'get',
        headers: {
            'Content-Encoding': 'gzip, deflate',
            'Accept-Encoding': 'gzip, deflate'
        },
        success: function( response ) {
            //eval( response );
            //or
            Function( response )(); //prefered.
        },
        error: function( response ) {
            console.log( "error " + response );
        }
    } );
} );