$(document).ready(function(){
    $.getJSON("members/members.json", function(json) {
        // if you are getting json like above response in ajax
        // then simply retrive slider and iterate over it
        var mhtml = '';

        $.each(json.members, function(key, val){
            mhtml += '<div>';
            mhtml += '<img src="./image/members/square2/'+val.first_name.toLowerCase()+"_"+val.last_name.toLowerCase()+'.jpg"'+'>';
            mhtml += '<div class="fixed-height"><a href='+val.link+' target="_blank"><h3>'+val.first_name+" "+val.last_name+'</h3></a>';
            mhtml += '<p>'+val.year+'</p>';
            mhtml += '<p>'+val.title+'</p>';
            mhtml += '<br/>';

            mhtml += '<p><strong>Fan Fact: </strong>'+val.fun_fact+'</p></div>';
            mhtml += '<div class="box"><span><i class="fa fa-plus" aria-hidden="true"></i><i class="fa fa-minus other" aria-hidden="true"></i></span>';
            mhtml += '<span>&nbsp;Biography</span></div>';
            mhtml += '<p class="draw">'+val.bio+'</p>';
            mhtml += '</div>';
        });
        $('.slideshow').append(mhtml);

        $('.slideshow').slick({
            adaptiveHeight: false,
            lazyLoad: 'ondemand',
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            slidesToShow: 1,
            mobileFirst:true,
            variableWidth: false,
            swipeToSlide: true,
            centerMode: true,
            centerPadding: '100px',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 4,
                        centerPadding: '100px',
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]
        });

        // bio functionality
        $(".box").click(function(){
            $(this).next().slideToggle("fast");
            $(this).find('i').toggle();
        });
    });
})