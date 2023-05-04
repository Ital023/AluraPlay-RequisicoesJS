async function listaVideos(){
    const conexao = await fetch("https://api-videos-4edpvdne6-ital023.vercel.app/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

async function criarVideo(titulo,descricao,url,imagem){
    const conexao = await fetch("https://api-videos-4edpvdne6-ital023.vercel.app/videos",{
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    })
}

export const conectarAPI = {
    listaVideos,
    criarVideo
}