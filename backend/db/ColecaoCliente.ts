import ClientRepository from "../../core/ClientRepository"
import Cliente from "../../core/Client"

export default class ColecaoCliente implements ClientRepository {
    async salvar(cliente: Cliente): Promise<Cliente> {
        return null
    }

    async excluir(cliente: Cliente): Promise<void> {
        return null
    }
    async obterTodos(): Promise<Cliente[]> {
        return null
    }
}