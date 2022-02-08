import Title from './Title'

interface LayoutProps {
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col w-2/3 
            bg-white text-gray-800 rounded-md
        `}>
            <Title>{props.titulo}</Title>
            <div className='p-6'>
                {props.children}
            </div>
        </div>
    )
}