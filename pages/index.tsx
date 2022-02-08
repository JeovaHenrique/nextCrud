import { useState } from 'react'
import Layout from './components/Layout'
import Tabela from './components/Tabela'
import Cliente from '../core/Client'
import ButtonStl from './components/ButtonStl'
import Formulario from './components/Formulario'

export default function Home() {
  
  const [cliente,setCliente] = useState<Cliente>(Cliente.vazio())
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  
  const clientes = [
    new Cliente('Ana', 34,'1'),
    new Cliente('Bia', 45,'2'),
    new Cliente('Carlos', 23,'3'),
    new Cliente('Pedro', 54 ,'4'),
  ]

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`excluir ...${cliente.nome}`)
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }
  function salvarCliente(cliente: Cliente) {
    setVisivel('tabela')
  }


  return (
    <div className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-blue-500 to-purple-500 text-white
    `}>
      <Layout titulo='Cadastro Simples'>
        {visivel === 'tabela' ? (
          <>
            <div className='flex justify-end'>
              <ButtonStl cor='blue' className='mb-4' onClck={novoCliente}>
                Novo Cadastro
              </ButtonStl>
            </div>
            <Tabela clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}/>
          </>
        ) :(
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel('tabela')}
          />
        )}
      </Layout>
    </div>
  ) 
}
