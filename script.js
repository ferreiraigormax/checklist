const enviar = document.querySelector("#enviar")

function send(){
    //Definindo as variaveis
    let motorista = document.querySelector("#motorista").value.toUpperCase()
    let placa = document.querySelector("#placa").value.toUpperCase()
    let data = document.querySelector("#data").value
    let data_br = data.split('-').reverse().join('/')
    let boxes = document.querySelectorAll(".itens")
    let filial = document.querySelector(".filiais").value
    let lista = []
    let destinatarios = ''
    if(filial == 'FILIAL 2'){
        destinatarios = ''
    }
    if(filial == 'FILIAL 3'){
        destinatarios = ''
    }
    if(filial == 'FILIAL 4'){
        destinatarios = ''
    }
    if(filial == 'FILIAL 1'){
        destinatarios = ''
    }
    else{
    }
    for(var i = 0; i < boxes.length; i++){
        if(boxes[i].checked){
            lista.push(`%0D%0A${boxes[i].value}`)
        }
        else{
        }
    }
    window.open(
        `mailto:${destinatarios}?subject=CHECKLIST REPROVADO | ${data_br} | ${placa} | ${motorista} | ${filial}&body=Bom-dia!%0D%0AO motorista "${motorista}" do caminhão de placa "${placa}" entregou o checklist do dia "${data_br}" com os seguintes itens reprovados:${lista} %0D%0A %0D%0A Observação: Se ocorrer alguma autuação/multa referente aos itens que cada setor seja responsável e o problema já tenha sido comunicado, o departamento responsável pela solução é quem deverá arcar com o pagamento da multa do veículo.%0D%0AQualquer dúvida, estamos à disposição.%0D%0AMuito obrigado.`
    )

}

enviar.addEventListener('click', send)