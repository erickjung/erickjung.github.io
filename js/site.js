$(document).ready(function() {

    /*
    * Plugin intialization
    */
    $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['p1', 'p2', 'p3'],
        sectionsColor: ['white', 'white', 'white'],
        navigation: {
            'position': 'right',
            'tooltips': ['Page 1', 'Page 2', 'Page 3']
           },
        afterRender: function(){
            $('#pp-nav').addClass('custom');
        },
        afterLoad: function(anchorLink, index){
            if(index>1){
                $('#pp-nav').removeClass('custom');
            }else{
                $('#pp-nav').addClass('custom');
            }
        }
    });
});