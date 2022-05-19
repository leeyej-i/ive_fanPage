import React from "react";
import Member from "./Member.js";
import useScrollFadeIn from "../hooks/useScrollFadeIn.js";

const Group = (props) => {
    const animatedItem = useScrollFadeIn();
    return (
        <section className="members" id="member">
            <div className="members-box">
                <h1 className="subtitle">MEMBER</h1>
                <div {...animatedItem} >
                    <div className="group">
                        <img className="member" src="./img/yujin.jpg" />
                        <img className="member" src="./img/gaeul.jpg" />
                        <img className="member" src="./img/rei.jpg" />
                        <img className="member" src="./img/wonyoung.jpg" />
                        <img className="member" src="./img/liz.jpg" />
                        <img className="member" src="./img/leeseo.jpg" />
                    </div>
                    <div className="info">
                        <h3>YUJIN</h3>
                        <h3>GAEUL</h3>
                        <h3>REI</h3>
                        <h3>WON<br />YOUNG</h3>
                        <h3>LIZ</h3>
                        <h3>LEE<br />SEO</h3>
                    </div>
                </div>
            </div>
            <Member memberIndex={0} />
            <Member memberIndex={1} />
            <Member memberIndex={2} />
            <Member memberIndex={3} />
            <Member memberIndex={4} />
            <Member memberIndex={5} />

        </section>
    );
};

export default Group;