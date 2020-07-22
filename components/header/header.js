 //show nav icon
    let toggle = document.querySelector('#toggle')
    //close nav icon
    let toggleOff = document.querySelector('#close')
    let content = document.querySelector('#content')

    let nav = document.querySelector('nav')
    let box = document.querySelector('.box-list')
    let link = document.querySelector('.links')
    let links = link.querySelectorAll('li')

    toggle.addEventListener('click', ()=>{
        nav.style.visibility = 'visible'
        box.style.height= '100vh'
        links.forEach(li=>{
            li.style.top = '0';
            // content.style.visibility = 'hidden';
        })
    })

    // close nav
    toggleOff.addEventListener('click', ()=>{
        nav.style.visibility = 'hidden'  
        box.style.height = '0vh'
        links.forEach(li=>{
            li.style.top = '500px';
        })
    })