 $(document).ready(function(){

    navFunctions();
    aboutFunctions();
    socialMediaName();
    mainHeadingAnimations();
    idxSquareAnimations();
    agentAnimations();

    function navFunctions(){
        var body_plusNav = $('.main-content-plusNav');
        var body = $('.main-content');
        var nav_btn = $('.nav');
        var filter = $('.nav-close');
        var nav = $('.navigation');
        var properties = $('.navigation-menu-list#dropdown-properties');
        var about = $('.navigation-menu-list#dropdown-about');
        var agents = $('.navigation-menu-list#dropdown-agents');
        var follow = $('.navigation-menu-list#dropdown-follow');
        var dropdown_properties = $('.dropdown-content#dropdown-properties-list');
        var dropdown_about = $('.dropdown-content#dropdown-about-list');
        var dropdown_agents = $('.dropdown-content#dropdown-agents-list');
        var dropdown_follow = $('.dropdown-content#dropdown-follow-list');
        var about_click = $('.dropdown-content>a');
        var header_click = $('.navigation>a');
        var show = $('.show');

        var properties_isClicked = true;
        var about_isClicked = true;
        var agents_isClicked = true;
        var follow_isClicked = true;

        nav_btn.click(function(){
            nav.animate({
                    left: '0'
                }, 500, function(){});
            filter.fadeIn();
            body_plusNav.css('opacity', '.5');
        });
        filter.click(function(){
            nav.animate({
                left: '-275px'
            }, 500, function(){});
            body_plusNav.css('opacity', '1');
            filter.hide();
        });
        header_click.click(function(){
            nav.animate({
                left: '-275px'
            }, 500, function(){});
            body_plusNav.css('opacity', '1');
            filter.hide();
        });
        about_click.click(function(){
            nav.animate({
                left: '-275px'
            }, 500, function(){});
            body_plusNav.css('opacity', '1');
            filter.hide();
        });
        properties.click(function(){
            if(properties_isClicked){
                dropdown_properties.show(200);
                properties_isClicked = false;
            } else {
                dropdown_properties.hide(200);
                properties_isClicked = true;
            }
        });
        about.click(function(){
            if(about_isClicked){
                dropdown_about.show(200);
                about_isClicked = false;
            } else {
                dropdown_about.hide(200);
                about_isClicked = true;
            }
        });
        agents.click(function(){
            if(agents_isClicked){
                dropdown_agents.show(200);
                agents_isClicked = false;
            } else {
                dropdown_agents.hide(200);
                agents_isClicked = true;
            }
        });
        follow.click(function(){
            if(follow_isClicked){
                dropdown_follow.show(200);
                follow_isClicked = false;
            } else {
                dropdown_follow.hide(200);
                follow_isClicked = true;
            }
        });
    }
    function aboutFunctions(){

        var commitment = $('.module#commitment-btn');
        var history = $('.module#history-btn');
        var philosophy = $('.module#philosophy-btn');
        var page_popout = $('.page-popout');
        var commitment_popout = $('.commitment');
        var history_popout = $('.history');
        var philosophy_popout = $('.philosophy');
        var popout_filter = $('.filter');
        var popout_close = $('.page-popout-close');

        commitment.click(function(){
            page_popout.fadeIn();
            commitment_popout.fadeIn();
            popout_filter.show();
        });
        (popout_filter, popout_close).click(function(){
            page_popout.fadeOut();
            commitment_popout.fadeOut();
            popout_filter.hide();
        });

        history.click(function(){
            page_popout.fadeIn();
            history_popout.fadeIn();
            popout_filter.show();
        });
        (popout_filter, popout_close).click(function(){
            page_popout.fadeOut();
            history_popout.fadeOut();
            popout_filter.hide();
        });

        philosophy.click(function(){
            page_popout.fadeIn();
            philosophy_popout.fadeIn();
            popout_filter.show();
        });
        (popout_filter, popout_close).click(function(){
            page_popout.fadeOut();
            philosophy_popout.fadeOut();
            popout_filter.hide();
        });


    }
    function socialMediaName(){

        var twitter = $('.twitter');
        var facebook = $('.facebook');
        var instagram = $('.instagram');
        var linkedIn = $('.linkedIn');
        var exit_twitter = $('.icon-exit.twitter');
        var exit_facebook = $('.icon-exit.facebook');
        var exit_instagram = $('.icon-exit.instagram');
        var exit_linkedIn = $('.icon-exit.linkedIn');
        var span_socialMedia = $('.spans span:first-child');
        var span_twitter = $('.spans span:nth-child(2)');
        var span_facebook = $('.spans span:nth-child(3)');
        var span_insta = $('.spans span:nth-child(4)');
        var span_linkedIn = $('.spans span:nth-child(5)');

        twitter.hover(function(){
            span_socialMedia.hide();
            span_twitter.fadeIn(250);
        }, function(){
            span_socialMedia.show();
            span_twitter.hide();
        })

        facebook.hover(function(){
            span_socialMedia.hide();
            span_facebook.fadeIn(250);
        }, function(){
            span_socialMedia.show();
            span_facebook.hide();
        })

        instagram.hover(function(){
            span_socialMedia.hide();
            span_insta.fadeIn(250);
        }, function(){
            span_socialMedia.show();
            span_insta.hide();
        })

        linkedIn.hover(function(){
            span_socialMedia.hide();
            span_linkedIn.fadeIn(250);
        }, function(){
            span_socialMedia.show();
            span_linkedIn.hide();
        })
    }
    function mainHeadingAnimations(){

        var headings = $('.main-headings-wrapper');
        var javier = $('.main-img');
        var javier2 = $('.main-img-2');

        setTimeout(function(){
            headings.fadeIn("500");
        }, 500);

        setTimeout(function(){
            javier.animate({
                left: '0'
            }, "500");
        }, 500);
    }
    function idxSquareAnimations(){

        var img_1 = $('#prop1');
        var img_2 = $('#prop2');
        var img_3 = $('#prop3');
        var img_4 = $('#prop4');
        var img_5 = $('#prop5');
        var img_6 = $('#prop6');
        var img_7 = $('#prop7');
        var img_8 = $('#prop8');
        var img_9 = $('#prop9');



        img_1.hover(function(){
            img_1.animate({ height: "250px"}, 400);
        }, function(){
            img_1.animate({ height: "150px"}, 400);
        });
        img_2.hover(function(){
            img_2.animate({ height: "250px"}, 400);
        }, function(){
            img_2.animate({ height: "150px"}, 400);
        });
        img_3.hover(function(){
            img_3.animate({ height: "250px"}, 400);
        }, function(){
            img_3.animate({ height: "150px"}, 400);
        });
        img_4.hover(function(){
            img_4.animate({ height: "250px"}, 400);
        }, function(){
            img_4.animate({ height: "150px"}, 400);
        });

        img_5.hover(function(){
            img_5.animate({ height: "307px"}, 400);
        }, function(){
            img_5.animate({ height: "207px"}, 400);
        });
        img_6.hover(function(){
            img_6.animate({ height: "307px"}, 400);
        }, function(){
            img_6.animate({ height: "207px"}, 400);
        });
        img_7.hover(function(){
            img_7.animate({ height: "307px"}, 400);
        }, function(){
            img_7.animate({ height: "207px"}, 400);
        });

        img_8.hover(function(){
            img_8.animate({ height: "420px"}, 400);
        }, function(){
            img_8.animate({ height: "320px"}, 400);
        });
        img_9.hover(function(){
            img_9.animate({ height: "420px"}, 400);
        }, function(){
            img_9.animate({ height: "320px"}, 400);
        });

    }
    function agentAnimations(){

        var agent_JEG_b = $('.agent-info.before');
        var agent_filter = $('.agentFilter');
        var agent_info = $('.agentInfo-wrapper');
        var agents_h3 = $('.agents h3');
        var agents_h4 = $('.agents h4');
        var agent_close = $('.agent-close');

        agent_JEG_b.click(function(){
            agent_JEG_b.css("display", "none");

            agents_h4.css("display", "none");
            agent_filter.css("display", "inherit");
            agent_info.css("display", "inherit");
        });
        agent_close.click(function(){
            agent_JEG_b.css("display", "inherit");
            agents_h3.css("display", "inherit");
            agents_h4.css("display", "inherit");
            agent_filter.css("display", "none");
            agent_info.css("display", "none");
        })
    }

});
