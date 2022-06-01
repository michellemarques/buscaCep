function getDadosEnderecoPorCep(cep) {

    let url = `http://viacep.com.br/ws/${cep}/json/`;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);
    xmlHttp.send();

    xmlHttp.onreadystatechange = () =>{
        if( xmlHttp.readyState === 4 && xmlHttp.status ==200 ){
            let dadosJSONText = xmlHttp.responseText;
            let dadosJSONObj = JSON.parse(dadosJSONText);

            document.getElementById('endereco').value = dadosJSONObj.logradouro; 
            document.getElementById('bairro').value = dadosJSONObj.bairro; 
            document.getElementById('cidade').value = dadosJSONObj.localidade; 
            document.getElementById('uf').value = dadosJSONObj.uf; 
        }; 
        

    };
};