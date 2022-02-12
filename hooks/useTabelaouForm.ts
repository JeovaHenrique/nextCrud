import { useState } from "react";

export default function useTabelaouForm() {
    const [visivel,setVisivel] = useState<'tabela' | 'form'>('tabela')
    
    const exibirTabela = () => setVisivel('tabela')
    const exibirformulario = () => setVisivel('form')

    return {
        formularioVisivel: visivel === 'form',
        tabelaVisivel: visivel === 'tabela',

        exibirTabela,
        exibirformulario,
        
    }
}