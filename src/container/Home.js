import { CardComponent } from '../Views/CardComponent';



const Home = () => {
    return (
        
        <div>
            <h1 className={' bg-slate-500 text-slate-300 hover:bg-slate- text-2xl align text-center'}>MENU MAKAN RESTAURANT SEDERHANA
            </h1>
            <CardComponent 
                time = "7.30"
                title = "Nasi Goreng "
                desc = "Rp 20.000 "
                img = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffthmb.tqn.com%2FUxujG6pQH92H5ZxheEC0Pp88UVI%3D%2F960x0%2Ffilters%3Ano_upscale()%2FGettyImages-594169929-58aef5e73df78c345b272abc.jpg&f=1&nofb=1&ipt=eb13662feb2e67a5e645eb95fc5953bfb5ad4542d93cb373498717fe2d522e03&ipo=images"
                />
            <CardComponent 
                time = "7.25"
                title = "Pasta "
                desc = "Rp 50.000"
                img = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP._cqVIA9Cun7PYWF8lKyJGQHaE6%26pid%3DApi&f=1&ipt=03c2c2c32c7b5b9012f4a76e2d26a6789af2bc8368dda891081a810e9ccb3a84&ipo=images"
                />
            <CardComponent 
                time = "7.50"
                title = "Burger"
                desc = "Rp 30.000"
                img = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2TyOchSROw_kz3qx8NF_tAHaE6%26pid%3DApi&f=1&ipt=2e4e6ee6f3492cb5e2c8c638944c28546bfc26bfcec83ffe6af26a082970f69a&ipo=images"
                />
            <CardComponent 
                time = "7.35"
                title = "Ikan Bakar"
                desc = "Rp 25.000"
                img = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.lMQg6LXJ2vSwWAUVbhgrPwHaEj%26pid%3DApi&f=1&ipt=fb736e220574aa488ccf0a598c856b54a3c2f37f2f0197404b8a8183c8b50b24&ipo=images"
                />    
        </div>

    )

    
}
export default Home