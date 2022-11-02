
        //사이드바 메뉴 토글
        const burgermanu = document.querySelector('.btn-list-burger-manu');     /* 버튼 */
        const sidemanu = document.querySelector('.sidebar');                    /* 사이드바 메뉴 */
        const lay = document.querySelector('.overlay');
        var closeLay = lay.animate([
            {opacity:0}
        ],500);                     /* 사이드바 눌렀을시 배경색 */
        const closemanu = document.querySelector('.close-button');
        const X1 = document.querySelector('.X1');
        const X2 = document.querySelector('.X2');

        burgermanu.onclick = function(){

            lay.classList.add('active');
            setTimeout(()=>{
                sidemanu.classList.add('active');
            },600)
            setTimeout(()=>{
                X1.classList.add('on');
                X2.classList.add('on');
            },1400)
        }
        closemanu.onclick = function(){
                X1.classList.add('off');
                X2.classList.add('off');
            setTimeout(()=>{
                sidemanu.classList.remove('active');
                X1.classList.remove('on');
                X2.classList.remove('on');
                X1.classList.remove('off');
                X2.classList.remove('off');
            },300)
            lay.classList.remove('active')
            lay.classList.add('off');
            setTimeout(()=>{
                lay.classList.remove('off');
                },150)

                
        }


        //탑 후버 메뉴
        const topmanulist = document.querySelector('.topmanubar');
        const topnavlistul = document.querySelector('.top-nav-list-ul');
       
        topnavlistul.onmouseover = function(){
            topmanulist.classList.add('active');
        }
        topmanulist.onmouseover = function(){
            topmanulist.classList.add('active');
        }

        topnavlistul.onmouseout = function(){
            topmanulist.classList.remove('active');
        }
        topmanulist.onmouseout = function(){
            topmanulist.classList.remove('active');
        }



        const ulOn2_1 = document.querySelector('.on2-1');
        const ulOn2_2 = document.querySelector('.on2-2');
        const ulOn2_3 = document.querySelector('.on2-3');

        const liOn1_1 = document.querySelector('.on1-1');
        const liOn1_2 = document.querySelector('.on1-2');
        const liOn1_3 = document.querySelector('.on1-3');

        ulOn2_1.onmouseover = function(){
            liOn1_1.classList.add('active');
        }
        ulOn2_2.onmouseover = function(){
            liOn1_2.classList.add('active');
        }
        ulOn2_3.onmouseover = function(){
            liOn1_3.classList.add('active');
        }

        ulOn2_1.onmouseout = function(){
            liOn1_1.classList.remove('active');
        }
        ulOn2_2.onmouseout = function(){
            liOn1_2.classList.remove('active');
        }
        ulOn2_3.onmouseout = function(){
            liOn1_3.classList.remove('active');
        }



        const scroll_div = document.querySelector('.scroll-div');
        const scroll_manu = document.querySelector('.bottom-scrollbar');
        let siteHei = scroll_manu.offsetHeight+20;
        var scroll_count = 0;
        
        scroll_manu.style= 'display:none;height:0;';

        console.log(siteHei)

        scroll_div.onclick = function(){
            scroll_count++
            if(scroll_count % 2 == 1){
                scroll_manu.style= 'display:block;height:0;';
                // scroll_div.style='border-left: 1px solid #918b8b';
                //                 'border-right: 1px solid #918b8b';
                setTimeout(()=>{
                    scroll_manu.style= `height:${siteHei}px`;
                },10)
            }else if(scroll_count % 2 == 0){
                scroll_manu.style= `height:${siteHei}px`;
                setTimeout(()=>{
                    scroll_manu.style= 'height:0;';
                    // scroll_manu.style= 'display:none;';
                },10)
                setTimeout(()=>{
                    // scroll_manu.style= 'height:0;';
                    scroll_manu.style= 'display:none;';
                },350)
            }
          
        }

        console.log(scroll_count)


        //가운데 문자 애니메이션

        const top_b1 = document.querySelector('.top_b1');
        const top_b2 = document.querySelector('.top_b2');
        const top_p = document.querySelectorAll('.d1 p');
        const top_s = document.querySelectorAll('.d1 p span');

        const btm_b1 = document.querySelector('.btm_b1');
        const btm_b2 = document.querySelector('.btm_b2');
        const btm_p = document.querySelectorAll('.d2 p');
        const btm_s = document.querySelectorAll('.d2 p span');

        let num = 0, timer


        

        setTimeout(() => {
                top_b1.classList.add('on');
            },150);
            setTimeout(() => {
                top_b2.classList.add('on');
            },300);

            top_s.forEach((v,k)=>{
                timer = setTimeout(() => {
                    top_s[k].classList.add('on');
                },2000+k);
            });

            setTimeout(() => {
                btm_b1.classList.add('on');
            },150);
            setTimeout(() => {
                btm_b2.classList.add('on');
            },300);
            btm_s.forEach((v,k)=>{
                timer = setTimeout(() => {
                    btm_s[k].classList.add('on');
                },2000+k);
            });
//-------------------------------지우기--------------------------------------
            setTimeout(() => {
                top_b1.classList.add('off');
                btm_b1.classList.add('off');
            },5000);
            setTimeout(() => {
                top_b2.classList.add('off');
                btm_b2.classList.add('off');
            },5000);

            top_p.forEach((v,k)=>{
                timer = setTimeout(() => {
                    top_p[k].classList.add('off');
                    
                },5200+k);
            });
            btm_p.forEach((v,k)=>{
                timer = setTimeout(() => {
                    btm_p[k].classList.add('off');
                },5200+k);
            });
            setTimeout(() => {
                top_b1.classList.remove('on');
                top_b2.classList.remove('on');
                btm_b1.classList.remove('on');
                btm_b2.classList.remove('on');
                top_b1.classList.remove('off');
                top_b2.classList.remove('off');
                btm_b1.classList.remove('off');
                btm_b2.classList.remove('off');
            },7600);
            top_s.forEach((v,k)=>{
                timer = setTimeout(() => {
                    top_s[k].classList.remove('on');
                    top_s[k].classList.remove('off');
                    top_p[k].classList.remove('off');
                },8000+k);
            });
            btm_s.forEach((v,k)=>{
                timer = setTimeout(() => {
                    btm_s[k].classList.remove('on');
                    btm_s[k].classList.remove('off');
                    btm_p[k].classList.remove('off');
                    
                },8000+k);
            });



        function textIn(){
            setTimeout(() => {
                top_b1.classList.add('on');
            },150);
            setTimeout(() => {
                top_b2.classList.add('on');
            },300);

            top_s.forEach((v,k)=>{
                timer = setTimeout(() => {
                    top_s[k].classList.add('on');
                },2000+k);
            });

            setTimeout(() => {
                btm_b1.classList.add('on');
            },150);
            setTimeout(() => {
                btm_b2.classList.add('on');
            },300);
            btm_s.forEach((v,k)=>{
                timer = setTimeout(() => {
                    btm_s[k].classList.add('on');
                },2000+k);
            });
//-------------------------------지우기--------------------------------------
            setTimeout(() => {
                top_b1.classList.add('off');
                btm_b1.classList.add('off');
            },5000);
            setTimeout(() => {
                top_b2.classList.add('off');
                btm_b2.classList.add('off');
            },5000);

            top_p.forEach((v,k)=>{
                timer = setTimeout(() => {
                    top_p[k].classList.add('off');
                    
                },5100+100*k);
            });
            btm_p.forEach((v,k)=>{
                timer = setTimeout(() => {
                    btm_p[k].classList.add('off');
                },5100+100*k);
            });
            setTimeout(() => {
                top_b1.classList.remove('on');
                top_b2.classList.remove('on');
                btm_b1.classList.remove('on');
                btm_b2.classList.remove('on');
                top_b1.classList.remove('off');
                top_b2.classList.remove('off');
                btm_b1.classList.remove('off');
                btm_b2.classList.remove('off');
            },7600);
            top_s.forEach((v,k)=>{
                timer = setTimeout(() => {
                    top_s[k].classList.remove('on');
                    top_s[k].classList.remove('off');
                    top_p[k].classList.remove('off');
                },8000+k);
            });
            btm_s.forEach((v,k)=>{
                timer = setTimeout(() => {
                    btm_s[k].classList.remove('on');
                    btm_s[k].classList.remove('off');
                    btm_p[k].classList.remove('off');
                    
                },8000+k);
            });

        }
        window.setInterval(textIn,9000);



        // const topcolor1 = document.querySelectorAll('.on1');
        // const topcolor2 = document.querySelector('.on2');

        // topcolor1.onmouseover = function(){
        //     topcolor1.classList.add('active');
        // }
        // topcolor2.onmouseover = function(){
        //     topcolor2.classList.add('active');
        // }

        // topcolor1.onmouseout = function(){
        //     topcolor1.classList.remove('active');
        // }
        // topcolor2.onmouseout = function(){
        //     topcolor2.classList.remove('active');
        // }
        const m_scroll_div_btn = document.querySelector('.m-scroll-div-btn');

        m_scroll_div_btn.onclick = function(){
            $('.m-bottom-scrollbar').show();
            $('html, body').scrollTop( $(document).height() );
            if(!$('.m-scroll-div-btn').hasClass('active')){
                $('.m-bottom-scrollbar').hide();
            }else{
                $('.m-bottom-scrollbar').show();
            }
            setTimeout(() => {                
                $('.m-bottom-scrollbar').slideToggle(600);
                $('.m-scroll-div-btn').toggleClass('active');
            },10 );
            // document.body.scrollTop = document.body.scrollHeight;
        }

