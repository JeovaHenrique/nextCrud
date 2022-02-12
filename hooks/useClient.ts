import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente"
import Cliente from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useTabelaouForm from "./useTabelaouForm"

export default function useClientes() {

    const repo: ClientRepository = new ColecaoCliente()
  
    const {tabelaVisivel, exibirformulario, exibirTabela} = useTabelaouForm()

    const [cliente,setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes,setClientes] = useState<Cliente[]>([])
    
    
    useEffect(todosClientes, [])
  
    function todosClientes() {
      repo.obterTodos().then(clientes => {  
        setClientes(clientes)
        exibirTabela()
      })
    }
  
    function selecionarCliente(cliente: Cliente) {
      setCliente(cliente)
      exibirformulario()
    }
  
    async function excluirCliente(cliente: Cliente) {
      await repo.excluir(cliente)
      todosClientes()
    }
  
    function novoCliente() {
      setCliente(Cliente.vazio())
        exibirformulario()
    }
    async function salvarCliente(cliente: Cliente) {
      await repo.salvar(cliente)
      todosClientes()
    }
  
    return {
        cliente,
        clientes,
        novoCliente,
        selecionarCliente,
        excluirCliente,
        salvarCliente,
        exibirTabela,
        tabelaVisivel,
    }
}