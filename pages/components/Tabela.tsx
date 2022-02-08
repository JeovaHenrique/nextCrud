import Cliente from '../../core/Client'
import {IconEdicao, IconLixo} from './icon'

interface TabelaProps {
    clientes: Cliente[]
    clienteSelecionado?: (clientes: Cliente) => void
    clienteExcluido?: (clientes: Cliente) => void
}

export default function Tabela(props: TabelaProps) {

    function renderizarCabecalho() {
        return (
            <tr>
                <th className='text-left p-4'>codigo</th>
                <th className='text-left p-4'>Nome</th>
                <th className='text-left p-4'>Idade</th>
                <th className="p-4">Açoes</th>
            </tr>
        )      
    }

    function renderizarDados() {
        return props.clientes?.map((cliente,i) =>{
            return(
                <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}>
                    <td className='text-left p-4'>{cliente.id}</td>
                    <td className='text-left p-4'>{cliente.nome}</td>
                    <td className='text-left p-4'>{cliente.idade}</td>
                    {renderizacaoAcao(cliente)}
                </tr>
            )
            })
        
    }

    function renderizacaoAcao(clientes: Cliente) {
        return (
            <td className='flex justify-center'>
                <button onClick={() => props.clienteSelecionado?.(clientes)} className={`
                    flex justify-center items-center
                    text-green-600 rounded-full 
                    hover:bg-purple-50 p-2 m-1
                `}>
                    {IconEdicao}
                </button>
                <button onClick={() => props.clienteExcluido?.(clientes)} className={`
                    flex justify-center items-center
                    text-red-500 rounded-full 
                    hover:bg-purple-50 p-2 m-1
                    `}>
                        {IconLixo}
                </button>
            </td>
        )
    }

    return (
        <table className='w-full rounded-xl overflow-hidden'>
            <thead className={`
            text-ggray-100
            bg-gradient-to-r from-purple-500 to-purple-800 `}>
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )

}