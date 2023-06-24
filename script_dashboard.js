function check(){
    document.getElementById('f1').innerHTML=document.myform.name.value;
    document.getElementById('f3').innerHTML=document.myform.description.value;
    document.getElementById('f2').innerHTML=document.myform.select.value;
    document.getElementById('f4').innerHTML=document.myform.image.value;
    
    
}
let uploadbutton=document.getElementById("upload-button");
let chosenimage=document.getElementById("chosen-image");
let filename=document.getElementById("file-name");

uploadbutton.onchange = ()=>{
    let reader =new FileReader();
    reader.readAsDataURL(uploadbutton.files[0]);
    console.log(uploadbutton.files[0]);
    reader.onload = ()=>{
        chosenimage.setAttribute("src",reader.result);
    }
    filename.textContent = uploadbutton.files[0].name;
}