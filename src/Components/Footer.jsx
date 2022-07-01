const FooterComp = () => {
    return (
        <>
            <footer className='footer mb-2'>
                <div  className="d-flex flex-column alig-items-center">
                    <h4> <span><i className="fa-solid fa-truck-fast"></i></span> Envio Gratis</h4>
                    <p>Para compras mayor a $3000</p>
                </div>
                <div  className="d-flex flex-column alig-items-center">
                    <h4><span><i className="fa-solid fa-credit-card"></i></span> Tarjetas</h4>
                    <p>Hasta 12 cuotas sin interes</p>
                </div>
                <div  className="d-flex flex-column alig-items-center">
                    <h4><span><i className="fa-solid fa-lock"></i></span> Sitio Seguro</h4>
                    <p>Protege tus datos</p>

                </div>
            </footer>
        </>
    )
}

export default FooterComp