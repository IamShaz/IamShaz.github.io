// JQUERY SMOOTH SCROLL
$(document).ready(function () {
    
// nav smooth scroll
	$('nav ul li a').click(function (e) {
        
		var link;
		link = $(this).attr('href');       
            
		$('html,body').animate({ 
			scrollTop: $(link).offset().top
		},2000); 
                    
            e.preventDefault();        
	});
// end - nav smooth scroll
    
// fixes home page height on safari

$(window).resize(function () {
    $('#home').height($(window).height()*1);
})
	
}); // end - document

document.body.onload = function () {
    
    // CONTENT FADE IN & FADE OUT
    function waypoints () {
        
        var currentPos = window.pageYOffset / document.body.clientHeight;
        var fadeAnim = document.getElementsByClassName('fadeAnimations');
        
    function trans () {
        for (var i=0; i < fadeAnim.length; i++) {
            fadeAnim[i].style.webkitTransition = '1s linear';
            fadeAnim[i].style.mozTransition = '1s linear';
            fadeAnim[i].style.msTransition = '1s linear';
            fadeAnim[i].style.oTransition = '1s linear';
            fadeAnim[i].style.transition = '1s linear';
        }
    }
        
    function styleShow (num) {
        fadeAnim[num].style["webkit" + 'opacity'] = 1;
        fadeAnim[num].style["moz" + 'opacity'] = 1;
        fadeAnim[num].style["ms" + 'opacity'] = 1;
        fadeAnim[num].style["o" + 'opacity'] = 1;
        fadeAnim[num].style['opacity'] = 1;
    }
        
    function styleHide (num) {
        fadeAnim[num].style["webkit" + 'opacity'] = 0;
        fadeAnim[num].style["moz" + 'opacity'] = 0;
        fadeAnim[num].style["ms" + 'opacity'] = 0;
        fadeAnim[num].style["o" + 'opacity'] = 0;
        fadeAnim[num].style['opacity'] = 0;
    }

        if (window.innerWidth > 1000) {         
            if ((currentPos > 0.08) && (currentPos < 0.355)) {
                styleShow(0);
                trans();
            } else {
                styleHide(0);
                trans();
            }
            
            if ((currentPos > 0.355) && (currentPos < 0.58)) {
                styleShow(1);
                trans();
            } else {
                styleHide(1);
                trans();
            }
            
            if ((currentPos > 0.58) && (currentPos < 0.75)) {
                styleShow(2);
                trans();
            } else {
                styleHide(2);
                trans();
            }
            
            if ((currentPos > 0.75)) {
                styleShow(3);
                trans();
            } else {
                styleHide(3);
                trans();
            }
        } // End window width greater than 1000
        if ((window.innerWidth > 600) && (window.innerWidth < 999)) {
            if ((currentPos > 0.06) && (currentPos < 0.39)) {
                styleShow(0);
                trans();
            } else {
                styleHide(0);
                trans();
            }
            
            if ((currentPos > 0.39) && (currentPos < 0.6)) {
                styleShow(1);
                trans();
            } else {
                styleHide(1);
                trans();
            }
            
            if ((currentPos > 0.6) && (currentPos < 0.79)) {
                styleShow(2);
                trans();
            } else {
                styleHide(2);
                trans();
            }
            
            if ((currentPos > 0.79)) {
                styleShow(3);
                trans();
            } else {
                styleHide(3);
                trans();
            }

        } // End window width less than 999, greater than 640
        if ((window.innerWidth > 320) && (window.innerWidth < 599)) {
            if ((currentPos > 0.06) && (currentPos < 0.42)) {
                styleShow(0);
                trans();
            } else {
                styleHide(0);
                trans();
            }
            
            if ((currentPos > 0.42) && (currentPos < 0.65)) {
                styleShow(1);
                trans();
            } else {
                styleHide(1);
                trans();
            }
            
            if ((currentPos > 0.65) && (currentPos < 0.85)) {
                styleShow(2);
                trans();
            } else {
                styleHide(2);
                trans();
            }
            
            if ((currentPos > 0.85)) {
                styleShow(3);
                trans();
            } else {
                styleHide(3);
                trans();
            }

        } // End window width less than 599, greater than 320
        if ((window.innerWidth < 320)) {
            for (var i = 0; i < fadeAnim.length; i++) {
                styleShow(i);
            }
        }
        

    } // end waypoints
    window.addEventListener('scroll', waypoints);

    // HAMBURGER MENU NAV
    var hamIcon = document.getElementById('hamburgerIcon');
    hamIcon.onclick = function () {
        
        function navStyle (obj,visib,opac) {
            obj.style.visibility = visib;
            obj.style.opacity = opac;
            obj.style.webkitTransition = '1s linear';
            obj.style.mozTransition = '1s linear';
            obj.style.msTransition = '1s linear';
            obj.style.oTransition = '1s linear';
            obj.style.transition = '1s linear';
        }      
        
        var nav = document.getElementsByTagName('nav')[0];    
        navStyle(nav,'visible',1);
        navStyle(hamIcon,'collapse',0);
        
        var hamClose = document.getElementById('hamburgerClose');
        navStyle(hamClose,'visible',1);
        
        hamClose.onclick = function () {
            navStyle(hamClose,'collapse',0);
            navStyle(hamIcon,'visible',1);
            navStyle(nav,'collapse',0);
        } 
    }

    // HOME PROFESSIONAL TITLES AND HOME ARROW MOVEMENTS AS PAGE SCROLLS
    window.onscroll = function homeMovements () {
        
        // home pro titles
        var proT = document.getElementById('proTitles');
        var webDev = proT.childNodes[1];
        var onlGur = proT.childNodes[3];
        var writ = proT.childNodes[5];
        
        function movingTitle (title,topNum) {
            title.style.paddingTop = (window.pageYOffset / topNum) + 'px';
        }
        
        movingTitle(webDev,6);
        movingTitle(onlGur,1.15);
        movingTitle(writ,6);
        
        function titleStyleShow (title) {
            title.style.display = 'initial';
            title.style.display = 'block';
        }
        
        function titleStyleHide (title) {
            title.style.display = 'none';
        }
        
        // home arrows
        var bot = (window.pageYOffset) / (window.innerHeight); // 0.42
        var scroll = document.getElementById('scroll');
        var scrImg = scroll.getElementsByTagName('img');

        function scrollMove (dis) {
            for (var i=0; i < scrImg.length; i++) {
                scrImg[i].style.display = dis;
            }          
        }
        
        if (bot < 0.445) {
            titleStyleShow(webDev);
            titleStyleShow(onlGur);
            titleStyleShow(writ);
            scrollMove('initial');
            scrollMove('inline-block');
        } else {
            titleStyleHide(webDev);
            titleStyleHide(onlGur);
            titleStyleHide(writ);
            scrollMove('block');
        }
    }
} // end body onload


// Fixes Internet Explorer issue with fixed images jumping when page scrolls using mouse wheel and keypad. Solution found on StackOverflow
//stackoverflow.com/questions/27966735/why-background-image-is-moving-when-scroll-at-ie
if(navigator.userAgent.match(/Trident/)) {
    $('body').on("mousewheel", function () {
        event.preventDefault();

        var wheelDelta = event.wheelDelta;
        var currentScrollPosition = window.pageYOffset;
        
        window.scrollTo(0, currentScrollPosition - wheelDelta);
    });

    $('body').keydown(function (e) {
        e.preventDefault(); // prevent the default action (scroll / move caret)
        var currentScrollPosition = window.pageYOffset;

        switch (e.which) {
            case 38: // up
                window.scrollTo(0, currentScrollPosition - 120);
                break;
            case 40: // down
                window.scrollTo(0, currentScrollPosition + 120);
                break;
            default: return; // exit this handler for other keys
        } 
    });
}