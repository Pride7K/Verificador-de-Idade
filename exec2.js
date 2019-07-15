var verificar = window.document.getElementById("verificar");
verificar.addEventListener("click",verific);

function verific()
{
    var anonascimento = Number(window.document.getElementById("anonasc").value);
    var sexo = window.document.getElementsByName("genero");
    var msg = window.document.getElementById("mensagem");
    var section = window.document.getElementById("section").style.height = "65%";
    var img = window.document.createElement("img");
    img.style.height="30%"
    img.style.width="30%"
    img.style.borderRadius="15px"
    img.setAttribute("id","foto");

    var objetodata = new Date();
    var anoatual = Number(objetodata.getFullYear());
    if (anonascimento<1900)
    {
        window.alert("Por favor coloque o ano de nascimento corretamente !")
    }
    else if(anonascimento>anoatual)
    {
        window.alert("Por favor coloque o ano de nascimento corretamente !")
    }
    else
    {
        
        var idade = anoatual - anonascimento;
        if(sexo[0].checked)
        {
            if (idade<=13)
            {
                img.setAttribute('src','/imagens/criancamasc.jpg');
                msg.style.textAlign = "center";
                msg.style.marginBottom="3%"
                msg.innerHTML=`Você é um homem de ${idade} anos de idade<br/><br/>`;
                msg.appendChild(img);
            }
            else if(idade >=14 && idade<18)
            {
                img.setAttribute("src","/imagens/adolescentemasc.jpg")
                msg.style.textAlign = "center";
                msg.style.marginBottom="3%"
                msg.innerHTML=`Você é um homem de ${idade} anos de idade<br/><br/>`;
                msg.appendChild(img);
            }
            else if(idade >18 && idade<60)
            {
                img.setAttribute("src","/imagens/adulto.jpg")
                msg.style.textAlign = "center";
                msg.style.marginBottom="3%"
                msg.innerHTML=`Você é um homem de ${idade} anos de idade<br/><br/>`;
                msg.appendChild(img);
            }
            else
            {
                img.setAttribute("src","/imagens/idoso.jpg")
                msg.style.textAlign = "center";
                msg.style.marginBottom="3%"
                msg.innerHTML=`Você é um homem de ${idade} anos de idade<br/><br/>`;
                msg.appendChild(img);
            }   
        }
        else if(sexo[1].checked)
        {
            if (idade<=14)
            {
                img.setAttribute("src","/imagens/crianca.jpg")
                msg.style.textAlign = "center";
                msg.style.marginBottom="3%"
                msg.innerHTML=`Você é uma mulher de ${idade} anos de idade<br/><br/>`;
                msg.appendChild(img);
            }
            else if(idade >=15 && idade<18)
            {
                img.setAttribute("src","/imagens/adolescente.jpg")
                msg.style.textAlign = "center";
                msg.style.marginBottom="3%"
                msg.innerHTML=`Você é uma mulher de ${idade} anos de idade<br/><br/>`;
                msg.appendChild(img);
            }
            else if(idade >18 && idade<60)
            {
                img.setAttribute("src","/imagens/adulta.jpg")
                msg.style.textAlign = "center";
                msg.style.marginBottom="3%"
                msg.innerHTML=`Você é uma mulher de ${idade} anos de idade<br/><br/>`;
                msg.appendChild(img);
            }
            else
            {
                img.setAttribute("src","/imagens/idosa.jpg")
                msg.style.textAlign = "center";
                msg.style.marginBottom="3%"
                msg.innerHTML=`Você é uma mulher de ${idade} anos de idade<br/><br/>`;
                msg.appendChild(img);
            }   
        }
        else
        {
            window.alert("Por favor escolha um sexo !");
        }
    }
}