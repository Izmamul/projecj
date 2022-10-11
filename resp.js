 burger=document.querySelector('.burger')
 navbar=document.querySelector('.navbar')
 navList=document.querySelector('.nav-list')
 rightnav=document.querySelector('.rightnav')
 burger.addEventListener('click',()=>{               // Added eventlistner javascript code to it
	rightnav.classList.toggle('v-class-resp');
        navList.classList.toggle('v-class-resp');
 	navbar.classList.toggle('h-nav-resp');
 })
