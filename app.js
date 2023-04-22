const light = document.querySelector(".Light-link");
const dark = document.querySelector(".Dark-link");
const neon = document.querySelector(".Neon-link");
const body = document.body;

const theme = localStorage.getItem('theme');
if(theme){
    body.classList.add(theme);
}

light.onclick = () => {
    if(body.classList.length < 2){
        body.classList.add("light");
        localStorage.setItem('theme','light');
    }
    if(body.classList.contains('neon') || body.classList.contains('dark')){
        body.classList.add("light");
        body.classList.remove("dark");
        body.classList.remove("neon");
        localStorage.setItem('theme','light');
    }
}

dark.onclick = () => {
    if(body.classList.length < 2 ){
        body.classList.add("dark");
        localStorage.setItem('theme','dark');
    }
    if(body.classList.contains('light') || body.classList.contains('neon')){
        body.classList.add("dark");
        body.classList.remove("light");
        body.classList.remove("neon");
        localStorage.setItem('theme','dark');
    }
}


neon.onclick = () => {
    if(body.classList.length < 2){
        body.classList.add("neon");
        localStorage.setItem('theme','neon');
    }
    if(body.classList.contains('light') || body.classList.contains('dark')){
        body.classList.add("neon");
        body.classList.remove("dark");
        body.classList.remove("light");
        localStorage.setItem('theme','neon');
    }
};