function Home(){
    return(
        <>
        <div className="af-nav" id="home">
            
            <div className="container">
                <div className="home">
                    <div className="home-left">
                        <h1 className="home-title">Hi, I'm <span className="home-title-color">Aekkarit</span></h1>
                        <span className="home-subtitle">I'm a Web Developer</span>
                        <br/>
                        <span className="home-detail">Front End Developer</span>
                        {/* button to contact me page */}
                        <div className="home-btn">
                            <a href="#contactme" className="btn btn-outline btn-contact">Contact Me</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}
export default Home;