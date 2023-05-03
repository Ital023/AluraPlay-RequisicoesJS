async function listaVideos(){
    const conexao = await fetch("https://api-videos-4edpvdne6-ital023.vercel.app/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}

export const conectaAPI = {
    listaVideos
}