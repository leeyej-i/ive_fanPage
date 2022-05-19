import React from "react";
import mainImg from "../src_assets/IVE_ELEVEN.jpg"
const Main = (props) => {
    return (
        <section className="main" id="main">
            <div className="jb-box">
                <img src={mainImg} />
            </div>
        </section>
    );
};

export default Main;