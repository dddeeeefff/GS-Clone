
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


