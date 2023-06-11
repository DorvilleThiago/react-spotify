import LogoSvg from '../assets/LogoSvg.svg'

export default function Logo() {
    return (
        <div className="flex">
            <img
                className='w-100 h-100'
                src={LogoSvg}
                width={80}
                height={80}/>
            <div className='ml-2 relative'>
                <h1 className='mt-2 font-inter font-black text-[30px] leading-10'>HARMONIZE</h1>
                <h2 className=' absolute font-light bottom-5 leading-0'>Basta ouvir e sentir...</h2>
            </div>
        </div>
    )
}