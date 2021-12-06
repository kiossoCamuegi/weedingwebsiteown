
function autocomplete(){
    let search = document.querySelectorAll(".searchform");
    let complete = document.querySelectorAll(".auto-complete")
   if (complete.length >= 1) {
       if (search.length >= 1) {
           let input = search[0];
           let container = complete[0];

          const searchStates = async searchText =>{
              const result = await fetch('js/data.json');
              const states = await result.json(); 
              //get matches to current text input
              let matches = states.filter(state =>{
                  const regex = new RegExp(`^${searchText}`,  'gi');
                  return state.name.match(regex) || state.abbr.match(regex);
              }); 

              if (searchText.length === 0) {
                  matches = [];
                 container.innerHTML = ""; 
                 container.style.display = "none";
              }else{
                  container.style.display = "block";
              }

              if (matches.length === 0) { 
                container.innerHTML = ""; 
                container.style.display = "none";
             }else{
                 container.style.display = "block";
             }
             
              outputHtml(matches);
          } 

        const outputHtml = matches =>{
            if (matches.length > 0) {
                  const html = matches.map(match =>`
                  <article class="founded-item" data-search="${match.name}">
                        <h6 class="title">${match.name} <span> ${match.abbr}</span></h6>
                        <small>${match.capital}</small>
                        <img src="./images/icons/autocomplete/3.png" alt="">
                   </article> 
                  `).join('');
                  container.innerHTML = html;
                //
            }
        } 
          input.addEventListener("input",()=>searchStates(input.value)); 
          setInterval(() => {
            let links = container.querySelectorAll("article");
            if (links.length >= 1) {
                links.forEach(a => {
                  a.onclick = ()=>{
                    let target = a.getAttribute("data-search");
                   // alert(target);
                   setTimeout(() => {
                      // window.location.href = location.hostname +"/search.html?"+target;
                   }, 10);
                  } 
                });
            }
          }, 1);
          
       }
   }
}
autocomplete();


function Welcome() {
   let welcome = document.querySelectorAll(".welcome-screen");
   if (welcome.length >= 1) {
       let screen = welcome[0];
       setTimeout(() => {
           screen.classList.toggle("fade");
       }, 7000);
   }
} 
Welcome(); 

function modalbox() { 
   let modal = document.querySelectorAll(".message-modal");
   if (modal.length >= 1) { 
       let btn = modal[0].querySelectorAll(".modal-box .d-flex .btn");
      if (btn.length >= 1) {
       btn[1].onclick = ()=>{ 
           modal[0].classList.toggle("active"); 
       }
      }
   }
}
setInterval(() => {
   modalbox();
}, 1);



function messageTop(request, type, message, icon, info){
   if(request != null){
    let messageContainer = document.querySelectorAll(".msgcontainer");
    if (messageContainer.length >= 1) {
           let container = messageContainer[0];
           messageBox = `
            <div class="top-message `+type+`">
            <div class="space">
                <div class="flex">
                    <span class="text-light fa `+icon+` mr-2"></span>
                    `+info+`
                </div>
                <div class="fa fa-close"></div>
            </div>
            <p class="message-text">`+message+`</p>
         </div>`;

         function closeMessage(){
             let box = document.querySelectorAll(".top-message");
             if(box.length >= 1){
                let close = box[0].querySelector(".fa-close");
                close.onclick = ()=>{
                  if(box[0].classList[2] != "hide"){
                    box[0].classList.toggle("hide");
                  }
                }  
             }
         }
         setInterval(()=>{closeMessage();},1);
         container.innerHTML = messageBox;

         setInterval(() => {
            setTimeout(() => {
                let box = document.querySelectorAll(".top-message");
                if(box.length >= 1){ 
                   if(box[0].classList[2] != "hide"){ 
                      // box[0].classList.toggle("hide");
                  }
                }
            }, 8000);
        }, 1000);
    }
   }
} 



function countCartItems() { 
   let cart =  document.querySelectorAll(".usercartdata");
   if (cart.length  >= 1) {
       let counter = document.querySelectorAll(".count-cart-items");
       if (counter.length >= 1) {
           let total = cart[0].querySelectorAll("tr");
           counter[0].innerHTML = total.length + " Items";
       }
   }

   let sidecart = document.querySelectorAll(".product-sidecart");
   if (sidecart.length >= 1){
       let count = document.querySelectorAll(".totalcart");
       if (count.length >= 1) {
          count.forEach(tot => {
             tot.innerHTML = sidecart[0].querySelectorAll("li").length;
          });
       }
   }
}
setInterval(() => {
   countCartItems();
}, 1);



function countComments() {
   let container = document.querySelectorAll(".comments-container");
   let counter = document.querySelectorAll(".countcomments");
   if (container.length >= 1) {
       if (counter.length >= 1) {
           let total = counter[0];
           let comment = container[0].querySelectorAll(".comment-box");
           if (comment.length >= 1) {
               total.innerHTML = comment.length;
           }else{
               total = 0;
           }
       }
   }
}
setInterval(() => {
   countComments();
}, 1);


function responsive_navbar(){
   let navbar = document.querySelectorAll(".responsive-navbar");
   if (navbar.length >= 1) {
       let toggle = document.querySelectorAll(".toggle-navbar");
       if (toggle.length >= 1) {
           for (let i = 0; i < toggle.length; i++) {
              toggle[i].onclick = ()=>{
                  navbar[0].classList.toggle("active");
              }
           }
       }
   }


   let search = document.querySelectorAll(".responsive-search");
   if (search.length >= 1) {
       let toggle = document.querySelectorAll(".toggle-search");
       if (toggle.length >= 1) {
           for (let i = 0; i < toggle.length; i++) {
              toggle[i].onclick = ()=>{
                  search[0].classList.toggle("active");
              }
           }
       }
   }


}
responsive_navbar();

function vendorAccount(){
   let vendor = document.querySelectorAll(".vendor-account");
   if (vendor.length >= 1) {
       let container = vendor[0].querySelectorAll(".vendor-account-item");
       if(container.length >= 1){
           let val = null;
           let val2 = null;
           function checkBoxes1() {
             let  choises = container[0].querySelectorAll("ul li");
               choises[0].classList.toggle("active-box");
               container[0].querySelector(".active-box input").checked = true;
               val = container[0].querySelector(".active-box input").value;
               for (let ip = 0; ip < choises.length; ip++) {
                   choises[ip].onclick = ()=>{ 
                       container[0].querySelector(".active-box").classList.remove("active-box");
                       let inputs =  container[0].querySelectorAll("input");
                       for(let input = 0; input < inputs.length; input++) {
                           inputs[input].checked = false;
                       }
                       choises[ip].classList.toggle("active-box");
                       choises[ip].querySelector("input").checked = true;
                       val = choises[ip].querySelector("input").value;
                   }
               }
           }
         checkBoxes1();

         function checkBoxes2() {
          let  choises2 = container[1].querySelectorAll("ul li");
           choises2[0].classList.toggle("active-box");
           container[1].querySelector(".active-box input").checked = true;
           val2 = container[1].querySelector(".active-box input").value;
           for (let ip = 0; ip < choises2.length; ip++) {
               choises2[ip].onclick = ()=>{ 
                   container[1].querySelector(".active-box").classList.remove("active-box");
                   let inputs =  container[1].querySelectorAll("input");
                   for(let input = 0; input < inputs.length; input++) {
                       inputs[input].checked = false;
                   }
                   choises2[ip].classList.toggle("active-box");
                   choises2[ip].querySelector("input").checked = true;
                   val2 = choises2[ip].querySelector("input").value;
               }
           }
         }
         checkBoxes2();
         
         let next = vendor[0].querySelectorAll(".next");
        if (val != null) {
           for (let n = 0; n < next.length; n++) {
               next[n].onclick = ()=>{
                   if (n == 0) {
                        container[n].classList.remove("active");
                        container[n+1].classList.add("active");
                   }else{
                      if(val2 != null){ 
                //       next[n+1].classList.toggle("d-none");
                      }
                   }
               }
           }
        }




       }
   }

}
vendorAccount();



function generate_filter_auto_ids(){
   let filters = document.querySelectorAll(".filters");
   if (filters.length >= 1){
       let form = filters[0];
       let labels = form.querySelectorAll("label");
       let inputs = form.querySelectorAll("input");
       let autoNumber = Math.floor(Math.random() * 193882);
       for (let i = 0; i < labels.length; i++) {  
           inputs[i].setAttribute("id", i+autoNumber*i*i*autoNumber);
           labels[i].setAttribute("for", i+autoNumber*i*i*autoNumber);

           inputs[0].setAttribute("id", i+autoNumber*i*i*9*32*22*autoNumber);
           labels[0].setAttribute("for", i+autoNumber*i*i*9*32*22*autoNumber);
       } 
   }
}
setInterval(() => {
   generate_filter_auto_ids();
}, 1);


function checkout(){
   let checkout = document.querySelectorAll(".checkout");
   if (checkout.length >= 1) {
       let go1 = null;
       function DeliveryChecks(){
           let del1 = checkout[0].querySelector("#del1");
           let del2 = checkout[0].querySelector("#del2"); 
           let pay1 = checkout[0].querySelector("#pay1");
           let pay2 = checkout[0].querySelector("#pay2"); 
           del1.onclick = ()=>{
           if (del1.checked == true) {
               del2.checked = false;
           } 
          }
          del2.onclick = ()=>{
           if (del2.checked == true) {
               del1.checked = false;
            } 
          }
          pay1.onclick = ()=>{
           if (pay1.checked == true) {
               pay2.checked = false;
           } 
          }
          pay2.onclick = ()=>{
           if (pay2.checked == true) {
               pay1.checked = false;
            } 
          }
       }
       DeliveryChecks();
       let header = checkout[0].querySelector(".checkout-header");
       let container = checkout[0].querySelector(".checkout-container");
       let header_item = header.querySelectorAll(".box");
       let container_item  = container.querySelectorAll(".checkout-item");
       for(let i = 0; i < header_item.length; i++) {
           let inputs1 = container_item[0].querySelectorAll("input");
           let selects1 = container_item[0].querySelectorAll("select");
           let inputs2 = container_item[1].querySelectorAll("input"); 
            function togglecheckout2(){
               header.querySelector(".checked").classList.remove("checked");
               if(container_item[0].classList[1] == "active") {
                   container_item[0].classList.remove("active");
                }
                if(container_item[1].classList[1] == "active") {
                   container_item[1].classList.remove("active");
                }
               container_item[2].classList.add("active");
            }
            let go = null;
             
            setInterval(() => {
                   if (pay1.checked == true){ 
                       if (del1.checked == true){ 
                           go1 = 1;
                       }else{
                           go1 = null;
                       }
                   }else{
                       if (pay2.checked == true){ 
                           if (del2.checked == true){ 
                               go1 = 1;
                           }else{
                               go1 = null;
                           }
                       }else{
                           go1 = null; 
                       }
                       if (pay2.checked == true){ 
                           if (del1.checked == true){ 
                               go1 = 1;
                           }else{
                               go1 = null;
                           }
                       }else{
                           go1 = null; 
                       }
                   } 
                   if (del2.checked == true){ 
                       if (pay1.checked == true || pay2.checked == true ){ 
                           go1 = 1;
                       }else{
                           go1 = null;
                       } 
                   } 
                    if(inputs1[0].value !=""){go = 1;
                    if(inputs1[1].value !=""){go = 1;
                    if(inputs1[2].value !=""){go = 1;
                    if(inputs1[3].value !=""){go = 1;
                    if(inputs1[4].value !=""){go = 1;
                    if(inputs1[5].value !=""){go = 1;
                    if(inputs1[6].value !=""){go = 1;
                    if(inputs1[6].value !=""){go = 1;
                    if(selects1[0].value !=""){go = 1;
                    inputs1[0].setAttribute("readonly", true);
                    inputs1[1].setAttribute("readonly", true);
                    inputs1[2].setAttribute("readonly", true);
                    inputs1[3].setAttribute("readonly", true);
                    inputs1[4].setAttribute("readonly", true);
                    inputs1[5].setAttribute("readonly", true);
                    inputs1[6].setAttribute("readonly", true); 
                    selects1[0].setAttribute("readonly", true);
                    if(container_item[0].classList[1] == "active") {
                     setTimeout(() => {
                          container_item[0].classList.remove("active");
                     }, 9000);
                    }
                    if(header_item[1].querySelectorAll(".checked").length >= 1) {
                      setTimeout(() => {
                           container_item[1].classList.remove("active");
                            togglecheckout2();
                      }, 9000);
                    }else{
                      setTimeout(() => {
                             container_item[1].classList.add("active");
                      }, 9000);
                    }
                    }else{go = null;}
                    }else{go = null;}
                    }else{go = null;}
                    }else{go = null;}  
                    }else{go = null;}
                    }else{go = null;}
                    }else{go = null;}
                    }else{go = null;}
                    }else{go = null;} 
                    if (go != null) {
                       header_item[0].querySelector(".count").classList.add("checked");
                       if (go1 != null) {
                           header_item[1].querySelector(".count").classList.add("checked");
                        }else{
                           header_item[1].querySelector(".count").classList.remove("checked");
                        } 
                    }else{
                       header_item[0].querySelector(".count").classList.remove("checked");
                    }  

                   
            }, 1);
            header_item[i].onclick =()=>{ 
               if(go != null){if(go1 != null){togglecheckout2();}}
              } 
           }
       }

   } 
checkout();





function fileView(container, input){  
    let cont = document.querySelectorAll(container);
    let toggle = document.querySelectorAll(input); 
    let allowed = ["image/jpeg", "image/jpg",  "image/jfif", "image/gif",  "image/png"];
    if(cont.length >=1){
        if(input.length >=1){
           if (toggle.length >=  1) {
               toggle[0].onchange = ()=>{
                   let type = toggle[0].files[0]["type"]; 
                   if(allowed.includes(type)){
                       cont[0].src = URL.createObjectURL(toggle[0].files[0])
                   }else{
                       toggle[0].value = null;
                   } 
                }   
           }   
        }
    }
}
   
fileView(".vendorimgcontainer", ".vendorimg");
fileView(".covervendorimagecontainer", ".covervendorimage");
fileView(".my-account .useraccount .user-image img", "#customer_pic");
fileView(".manager-picture", "#managerpic");




function fileLoader(){
   let filecontainer = document.querySelectorAll(".file-loader");
   let IMG = [];
   if (filecontainer.length >= 1) { 
       let form = filecontainer[0];
       let Display = form.querySelector(".file-loader-viewer");
       let input = form.querySelectorAll("input");
       let count = form.querySelector(".count");
       let allowed = ["image/jpeg", "image/jpg",  "image/jfif", "image/gif",  "image/png"];
       let images;
       input[0].onchange = ()=>{ 
           IMG = [];   
           images = input[0].files; 
          for (let i = 0; i < images.length; i++) { 
           let type = images[i].type; 
           if(allowed.includes(type)){ 
               IMG.push({
                   "name":images[i].name,
                   "url":URL.createObjectURL(images[i]),
                   "file":images[i],
                   "size":Math.floor(images[i].size / 100), 
                });
                console.table(IMG);
             }
         } 

        function SHOWIMAGES(){
           let single = "";
           IMG.forEach((image)=> { 
               let size = image.size;
               if(size >= 10500) {
                   size = Math.floor(size / 10000);  
                   size += " MB"; 
               }
               if(size <= 9000){
                     size += " KB";
               } 
               single += `
               <div class="image-box">
                    <img src="`+image.url+`" alt="">
                     <div class="overlay">
                         <div class="size">`+ size +`</div>
                     </div>
                 </div>
               `;
           });
           Display.innerHTML = single;
           console.log(input[0].files.length);
        }
        SHOWIMAGES();
        setInterval(() => {
           count.innerHTML= Display.querySelectorAll("img").length;
        }, 1);
       }   
   }
   
}
fileLoader();



function RichTextEditor(element){
  
}
RichTextEditor("#pr_description");



function refresh() {
   let btn  =  document.querySelectorAll(".refresh");
   if (btn.length >= 1) {
       for (let i = 0; i < btn.length; i++) {
          btn[i].onclick  = ()=>{
           btn[i].classList.toggle("rotate");
              setInterval(() => {
                location.reload();
              }, 600);
          }
       }
   }
}
refresh();


function checkoutDropbox() {
   let checkout = document.querySelectorAll(".checkout");
   if (checkout.length >= 1) {
       let dropbox = document.querySelectorAll(".small-box");
       for (let i = 0; i < dropbox.length; i++) {
           let toggle = dropbox[i].querySelector(".dropbox");
           toggle.onclick = ()=>{
               dropbox[i].querySelector(".dropbox").classList.toggle("fa-angle-down");
               dropbox[i].querySelector(".dropbox").classList.toggle("fa-angle-up");
               dropbox[i].classList.toggle("small");
           }
       }
   }
}
checkoutDropbox();



function vendorDropbox() {
   let menu = document.querySelectorAll(".vendor-menu");
   if (menu.length >= 1) {
       let dropbox = document.querySelectorAll(".menu-item .products-menu .box aside");
       for (let i = 0; i < dropbox.length; i++) {
           let toggle = menu[0].querySelector(".dropbox");
           toggle.onclick = ()=>{
               menu[0].querySelector(".dropbox").classList.toggle("fa-angle-down");
               menu[0].querySelector(".dropbox").classList.toggle("fa-angle-up");
               dropbox[i].classList.toggle("fill");
           }
       }
   }
}
vendorDropbox();



function DashSidebar(){
   let dashboard = document.querySelectorAll(".manager");
   if (dashboard.length >= 1) {
        let sidebar = dashboard[0].querySelector(".sidebar");
        let logo = dashboard[0].querySelector(".logo");
        let toggle = dashboard[0].querySelector(".toggle-sidebar");
        toggle.onclick = ()=>{ 
            sidebar.classList.toggle("fill");
            logo.classList.toggle("fill");
        } 
        let dropbox = sidebar.querySelectorAll("article");
        if (dropbox.length >= 1) { 
           for (let i = 0; i < dropbox.length; i++) {
                let toggle = dropbox[i].querySelector("a li");
                toggle.onclick = ()=>{  
                   dropbox[i].querySelector("ul").classList.toggle("show"); 
                }
           }
        }
   }
}
DashSidebar();

function carousel(){
   let carousel = document.querySelectorAll(".cs-carousel");
   if (carousel.length >= 1){
       for (let i = 0; i < carousel.length; i++) {
           let slider = carousel[i];
           let container = slider.querySelector(".cs-carousel-container");
           let prev= slider.querySelector(".prev");
           let next = slider.querySelector(".next");
           prev.onclick = ()=>{
               container.scrollLeft -= 100;
           }
           next.onclick = ()=>{
               container.scrollLeft += 100;
           }
       }
   }
}

function image_slider(){
   let carousel = document.querySelectorAll(".image-slider");
   if (carousel.length >= 1){
       for (let i = 0; i < carousel.length; i++) {
           let slider = carousel[i];
           let container = slider.querySelector(".other-images-slider");
           let prev= slider.querySelector(".prev");
           let next = slider.querySelector(".next");
           prev.onclick = ()=>{ 
               container.scrollLeft -= 100;
           }
           next.onclick = ()=>{ 
               container.scrollLeft += 100;
           }
       }
   }
}

setInterval(() => {
   carousel();
   image_slider();
}, 1);

function cartDrop(){
   let buttons = document.querySelectorAll(".cartdrop");
   if (buttons.length >= 1){
       let cartSidebar = document.querySelector(".cart-sidebar"); 
         buttons.forEach(btn => {
             btn.onclick = ()=>{
                 cartSidebar.classList.toggle("showcart");
             }
             cartSidebar.querySelector(".tag").onclick =()=>{
               cartSidebar.classList.toggle("showcart");
             }
         });
   }
}
cartDrop();


function toggleDarkTheme(){
   let btn = document.querySelectorAll(".changetheme");
  for (let i = 0; i < btn.length; i++) {
   setInterval(() => {
       if(JSON.parse(localStorage.getItem("chopShopTheme"))){
           document.body.classList.add("dark");  
           if (btn.length >= 1){
               btn[i].checked = true;
           }
        }else{
            document.body.classList.remove("dark");
            if (btn.length >= 1){
               btn[i].checked = false;
           }
        }
      }, 50);
   if (btn.length >= 1){ 
       btn[i].onclick = ()=>{
           if (btn[i].checked == true) {
               let dark = document.body.classList.toggle("dark");
               localStorage.setItem("chopShopTheme", dark);
           }else{
               let dark = document.body.classList.toggle("dark");
               localStorage.setItem("chopShopTheme", dark);
           }
       }
   }
  }
}
toggleDarkTheme(); 


function switch_pdimage(){
   let main = document.querySelectorAll(".main-image");
   let other = document.querySelectorAll(".other-images-slider");
   if (main.length >= 1) {
       if (other.length >= 1) {
           let item = other[0].querySelectorAll("img");
           let container = main[0].querySelector("img");
           for(let i = 0; i < item.length; i++) {
               item[i].onclick = ()=>{
                   let src = item[i].src;
                   container.src = src;
               }
           }
       }
   }
}
switch_pdimage();

 

function sidebar() {
   let sidebar = document.querySelectorAll(".account .sidebar");
   if (sidebar.length >= 1) {
       let btn = document.querySelectorAll(".toggle-sidebar");
       if (btn.length >= 1) {
           btn.forEach(button => {
               button.onclick = ()=>{
                   let logo = document.querySelectorAll(".dashboard .logo");
                   if (logo.length >= 1){
                       logo[0].querySelector('span').classList.toggle("d-none");
                       sidebar[0].classList.toggle("min");
                   }
                  let links =  sidebar[0].querySelector(".links");
                  sidebar[0].querySelector("h6").classList.toggle("d-none");
                  link = links.querySelectorAll("li"); 
                  for(let i = 0; i < link.length; i++) {
                          link[i].querySelector("span").classList.toggle("d-none"); 
                  }
               }
           });
       }

   }
}
sidebar();

function expand(){
   let dashboard = document.querySelectorAll(".dashboard");
   let expander = document.querySelectorAll(".expand");
   if (expander.length >= 1) {
       if (dashboard.length >= 1) {
           expander[0].onclick = ()=>{ 
               if (dashboard[0].classList[1] != "fs") {
                     dashboard[0].classList.add("fs");
                     openFullscreen(); 
               }else{
                      dashboard[0].classList.remove("fs");
                      closeFullscreen();
               } 
           }
       }
   }
 function openFullscreen(){
   if (dashboard[0].requestFullscreen) {
       dashboard[0].requestFullscreen();
     } else if (dashboard[0].webkitRequestFullscreen) { /* Safari */
       dashboard[0].webkitRequestFullscreen();
     } else if (dashboard[0].msRequestFullscreen) { /* IE11 */
       dashboard[0].msRequestFullscreen();
    }
 }

 
function closeFullscreen(){
   if (document.exitFullscreen) {
       document.exitFullscreen();
     } else if (document.webkitExitFullscreen) { /* Safari */
       document.webkitExitFullscreen();
     } else if (document.msExitFullscreen) { /* IE11 */
       document.msExitFullscreen();
     }  
 }
 
  
}
expand();


function admin_sidebar(){
    let links = document.querySelectorAll(".sidebar .links");
    let container = document.querySelectorAll(".dashboard .container-box");
    if(container.length >= 1) {
       let  content = container[0];
       if (links.length >= 1) {
           let link  = links[0].querySelectorAll("li");
           let box  = content.querySelectorAll(".page-content");
           for(let i = 0; i < link.length; i++) {
               link[i].onclick  = ()=>{
               links[0].querySelector(".active").classList.remove("active");
               link[i].classList.add("active");
               content.querySelector(".page-content.active").classList.remove("active");
                box[i].classList.add("active");
              }
           }
        }
    }
} 

function scrollNavbar() { 
    let navbars = document.querySelectorAll(".navbar-weed");
   if (navbars.length >= 1) {
    Navbar = navbars[0];
    window.addEventListener("scroll", function(){
           let position = window.screenY > 0;
          Navbar.classList.toggle("scrolling-active", position);
    });  
   }
}
//scrollNavbar();


function navbarsticky(){
    let navbar = document.querySelectorAll(".navbar-weed"); 
    if (navbar.length >= 1){
        let nav = navbar[0];
         window.onscroll = ()=>{
           if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
               if (nav.classList[1] != "navbar-sticky"){
                   nav.classList.add("navbar-sticky");
               } 
             } else {
                if (nav.classList[1] == "navbar-sticky") { 
                   nav.classList.remove("navbar-sticky");
                }
             }
         }
    }
}
navbarsticky();





function vendorTabs() {
   let menu = document.querySelectorAll(".vendor-menu");
   if(menu.length >= 1) {
      let  header = menu[0].querySelector(".vendor-menu-header");
      let  content = menu[0].querySelector(".vendor-menu-container");
      let header_item = header.querySelectorAll("li");
      let content_item = content.querySelectorAll(".menu-item");
      for(let i = 0; i < header_item.length; i++){
         header_item[i].onclick = ()=>{
             header.querySelector(".active").classList.remove("active");
             header_item[i].classList.add("active");
             content.querySelector(".active").classList.remove("active");
             content_item[i].classList.add("active");
         }
      }
   }
}
vendorTabs();



function account_tabs(){
   let account = document.querySelectorAll(".signin-box");
   if (account.length >= 1){
       let Account = account[0];
       let header = Account.querySelector(".signin-header");
       let header_item = header.querySelectorAll("li");
       let container = Account.querySelector(".signin-container");
       let container_item = container.querySelectorAll(".box");
       for (let i = 0; i < header_item.length; i++) {
            header_item[i].onclick = ()=>{
                header.querySelector(".active").classList.remove("active");
                header_item[i].classList.add("active");
                container.querySelector(".active").classList.remove("active");
                container_item[i].classList.add("active");
            }
       }
   }
}
account_tabs()


function edit_modal(){
   let modal =document.querySelectorAll(".modal-edit-item");
   if(modal.length >= 1){
      let modalbox = modal[0];
      let close = modalbox.querySelectorAll(".close-modal");
      for (let i = 0; i < close.length; i++) {
           close[i].onclick = (e)=>{
               e.preventDefault();
               modalbox.classList.toggle("active");
           }
      }   
   }
}
edit_modal();


function myaccount_tabs(){
   let myaccount = document.querySelectorAll(".my-account");
   if (myaccount.length >= 1) {
       let container = myaccount[0];
       let content = container.querySelector(".my-account-container");
       let header  = container.querySelector(".my-account-header");
       let content_item = content.querySelectorAll("ul");
       let header_item = header.querySelectorAll("li");
       for (let i = 0; i < header_item.length; i++) {
           header_item[i].onclick = ()=>{
               header.querySelector(".active").classList.remove("active");
               header_item[i].classList.add("active");
               content.querySelector(".active").classList.remove("active");
               content_item[i].classList.add("active");
           }
      }
       
   }
}
myaccount_tabs();


function Blog_comments(){
   let comments = document.querySelectorAll(".blog-comments");
   if (comments.length >= 1){
       let drop = comments[0].querySelector(".drop-comments");
       let container = comments[0].querySelector(".comments-container");
      drop.onclick = ()=>{
       if (drop.classList[2] == "fa-angle-down") {
           drop.classList.remove("fa-angle-down");
           drop.classList.add("fa-angle-up");
           if (container.classList[1] == "active") {
               container.classList.remove("active");
           }
        }else if(drop.classList[2] == "fa-angle-up"){
           drop.classList.remove("fa-angle-up");
           drop.classList.add("fa-angle-down");
           if (container.classList[1] != "active") {
               container.classList.add("active");
           }
        }
      }
   }
}
Blog_comments();



   

function Homeslider(){
   let s = document.querySelectorAll(".header .inner");
   if (s.length >= 1) {
   let slides  = document.querySelector(".inner .slider").children;
   const prev  = document.querySelector(".inner .prev");
   const next  = document.querySelector(".inner .next");
   const indicator = document.querySelector(".inner .indicators");
   let index = 0;
   
   
   prev.addEventListener("click", function(){
       PrevSlider();
       updatecircleIndicator();
       resetTimer();
   })
   
   next.addEventListener("click", function(){
       NextSlider();
       updatecircleIndicator();
       resetTimer();
    })

    setInterval(() => { 
       let ind = indicator.querySelectorAll("div");
       for (let e = 0; e < ind.length; e++) {
          ind[e].onclick = ()=>{ 
            index= ind[e].id;
            changeSlide()
            updatecircleIndicator();
            resetTimer();
          }
       }
     }, 1);
   
   
    function NextSlider(){
        if(index == slides.length-1){
          index=0;
        }else{
            index++;
        }
        changeSlide();
   }
   
   
   
   function PrevSlider(){
        if(index==0){
           index = slides.length-1;
        }else{
            index--;
        }
        changeSlide();
   }
   
   function changeSlide(){
       /**remove active class for each slide */
        for(let i=0; i <slides.length; i++){
              slides[i].classList.remove("active")
        }
       slides[index].classList.add("active");
   }
   
   
   
    /*create  Circle indicators */
   
    function circleIndicator(){
       for(let i=0; i< slides.length; i++){
            const div = document.createElement("div");
           // div.innerHTML = i+1;
            //div.setAttribute("onclick","indicateSlide(this)")
             div.id=i;
            /* To add the  active class to the circle */
               if(i==0){
                   div.className="active";
               }
            /* end */
   
            indicator.appendChild(div);
       }
   }
   
   circleIndicator()
    
   
   function updatecircleIndicator(){
       for(let i=0; i< indicator.children.length; i++){
             indicator.children[i].classList.remove("active");
       }
       indicator.children[index].classList.add("active");
   }
   

   
   function resetTimer(){
       // when click to indicator or controls button
       //stop timer
       clearInterval(timer);
       // then started again timer
       timer =  setInterval(autoplay, 6000)
   }
   
   
   function autoplay(){
       NextSlider()
       updatecircleIndicator()
   }
   
   let timer = setInterval(autoplay, 6000);
   }   
}


Homeslider();


function translate(){ 
   function googleTranslateElementInit() {
     new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
   } 
}
 