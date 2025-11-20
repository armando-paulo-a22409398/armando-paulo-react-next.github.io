export default function MagiaDoJSX(){
   const magia = <strong>HTML dentro de JavaScript!</strong>
   const tecnologia = "React e Next.js"

    return(
        <div className='bg-blue-300 p-3 m-3 rounded-x1'>
         <p>Este e o meu componente MagiaDoJSX.</p>
         <p>Um componente e uma funcao que retorna JSX - {magia}</p>
         <p>Os componentes são usados em {tecnologia}</p>
        </div>
    )
}