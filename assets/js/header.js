 //show nav icon
    let toggle = document.querySelector('#toggle')
    //close nav icon
    let toggleOff = document.querySelector('#close')

    let nav = document.querySelector('nav')
    let box = document.querySelector('.box-list')
    let link = document.querySelector('.links')
    let links = link.querySelectorAll('li')
    let mainContent = document.getElementById("content")
    let bodyCo = document.getElementById("body")

    toggle.addEventListener('click', ()=>{
        nav.style.visibility = 'visible'
        nav.style.transition = 'opacity 2s'
        mainContent.style.visibility = 'hidden'
        bodyCo.style.backgroundImage = "none"
        box.style.height= '100vh'
        links.forEach(li=>{
            li.style.top = '0';
            li.style.textAlign = 'center';
        })
    })

    // close nav
    toggleOff.addEventListener('click', ()=>{
        nav.style.visibility = 'hidden' 
        mainContent.style.visibility = 'visible' 
        bodyCo.style.backgroundImage = "url(my-photo.jpg)"
        box.style.height = '0vh'
        links.forEach(li=>{
            li.style.top = '500px';
        })
    })