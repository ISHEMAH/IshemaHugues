function Navbar(){
    return (
        <nav>
            <div className="name">
                <h2>
                    <span>H</span><span>u</span><span>g</span><span>u</span><span>e</span><span>s</span>
                </h2>
            </div>
            <div className="navigation">
                <a href="#Home">
                    <span>Ho</span>me
                </a>
                <a href="#Projects">
                    <span>Pro</span>jects
                </a>
                <a href="#About">
                    <span>Ab</span>out
                </a>
                <a href="#Contact">
                    <span>Co</span>ntact
                </a>
            </div>
        </nav>
    );

}

export default Navbar;