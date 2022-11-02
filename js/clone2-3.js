
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
        
        
        
        // ---------------------------------clone2-3-----------------------------------------------

        //offsetHeight
        // const txt_box_1 = document.querySelector('.txt-box-1') 
        // const icon1_1 = document.querySelector('.icon1-1');
        // const icon1_2 = document.querySelector('.icon1-2');
        // var button1_count = 0
        
        
        
        const button1 = document.querySelector('.button1');
        button1.onclick = function(){
            // txt_box_1.style='display : block;'
            // let offH = txt_box_1.offsetHeight;
            // txt_box_1.style='height : 0; display : block;'
            // setTimeout(()=>{
            //     button1_count++
            //     if(button1_count % 2 == 1){
            //         txt_box_1.style = `height : ${offH}px; display : block;`
            //         icon1_1.style = 'transform: rotateZ( -45deg ); background : #00aa9d;'
            //         icon1_2.style = 'transform: rotateZ( 45deg ); background : #00aa9d;'
            //     }
            // },100);
            // button1_count++
            // if(button1_count % 2 == 1){
            //     icon1_1.style = 'transform: rotateZ( -45deg ); background : #00aa9d;'
            //     icon1_2.style = 'transform: rotateZ( 45deg ); background : #00aa9d;'
            // }else{
            //     icon1_1.style = 'transform: rotateZ( 45deg ); background : #00aa9d;'
            //     icon1_2.style = 'transform: rotateZ( -45deg ); background : #00aa9d;'
            // }
            $('.txt-box-1').slideToggle(600);
            $('.button1').toggleClass('active');
        }

        const button2 = document.querySelector('.button2');


        button2.onclick = function(){

            $('.txt-box-2').slideToggle(600);
            $('.button2').toggleClass('active');
        }


        const button3 = document.querySelector('.button3');
        button3.onclick = function(){

            $('.txt-box-3').slideToggle(600);
            $('.button3').toggleClass('active');
        }

        
        const button4 = document.querySelector('.button4');
        button4.onclick = function(){

            $('.txt-box-4').slideToggle(600);
            $('.button4').toggleClass('active');
        }