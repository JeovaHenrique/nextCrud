import { useState } from "react"
import Cliente from "../../core/Client"
import Entrada from "./Entrada"
import ButtonStl from './ButtonStl'

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id =props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)

    return (
        <div>
            {id ? (
                <Entrada
                somenteLeitura
                texto='Codigo' 
                valor={id}
                className='mb-4'
            />
            ): false}
            <Entrada 
                texto='Nome'
                valor={nome}
                valorMudou={setNome}
                className='mb-4'
            />
            <Entrada 
                texto='Idade'
                valor={idade}
                tipo='number'
                valorMudou={setIdade}
            />
            <div className="flex justify-end mt-7">
                <ButtonStl 
                    cor="blue" 
                    className="mr-2"
                    onClck={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id? 'Alterar' : 'Salvar'}
                </ButtonStl>
                <ButtonStl cor="gray" onClck={props.cancelado}>Cancelar</ButtonStl>
            </div>
        </div>
    )
}