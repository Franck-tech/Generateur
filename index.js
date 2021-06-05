
const generatorColor = () =>{
    
   const random = (Math.random() * 0xFFFFFF << 0).toString(16);
        document.body.style.backgroundColor = "#" + random;
        // const text = document.querySelector('.code');
        // text.innerHTML = "#" + random;
        document.querySelector('.code').innerText = "#" + random;
}