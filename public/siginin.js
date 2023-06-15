let signInBtn = document.querySelector('.signin');
signInBtn.addEventListener('click',function(){
    console.log("button clicked")

    let emailInput = document.querySelector('.email-input').value
    let password = document.querySelector('.password').value

    let info = {emailInput,password}

    if(!emailInput || !password){
        window.alert("enter email or password")
        return
    }

    fetch('http://localhost:8080/login',{
        method:'POST',
        headers:{'content-type': 'application/json'},
        body:JSON.stringify(info)
    }).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data)
        const redirectUrl = `homepage.html?username=${encodeURIComponent(data.username)}`;
        window.location.href = redirectUrl;
    })
})