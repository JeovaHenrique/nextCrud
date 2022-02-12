import Layout from './components/Layout'
import Tabela from './components/Tabela'
import ButtonStl from './components/ButtonStl'
import Formulario from './components/Formulario'
import useClient from '../hooks/useClient'

export default function Home() {

 const {
   cliente,
   clientes,
   novoCliente,
   selecionarCliente,
   excluirCliente,
   salvarCliente,
   exibirTabela,
   tabelaVisivel,
  } = useClient()

  return (
    <div className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        {tabelaVisivel? (
          <>
            <div className='flex justify-end'>
              <ButtonStl cor='blue' className='mb-4' onClck={novoCliente}>
                Novo Cadastro
              </ButtonStl>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}/>
          </>
        ) :(
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  ) 
}
