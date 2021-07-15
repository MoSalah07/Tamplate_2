

$( function ()
{
    // Click Menu open list nav 

    $( '.menu' ).on( 'click', function ()
    {
        $('.list').toggleClass('show')
    } );
    // event scroll window icone fadein
    $( window ).scroll( function ()
    {
        if ( $( window ).scrollTop() >= 1000 )
        {
            $( '.scroll' ).fadeIn( 900 );
        } else
        {
            $( '.scroll' ).fadeOut( 900 );
        }
    } );
    // when click in icon make scroll top for body and html
    $( '.scroll' ).on( 'click', function ()
    {
        $( 'body, html' ).animate( {
            scrollTop: 0
        },800)
    } );
} );





