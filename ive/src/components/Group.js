import React from "react";
import Member from "./Member.js";
import useScrollFadeIn from "../hooks/useScrollFadeIn.js";
import yujin from "../src_assets/yujin.jpg"
import gaeul from "../src_assets/gaeul.jpg"
import rei from "../src_assets/rei.jpg"
import wonyoung from "../src_assets/wonyoung.jpg"
import liz from "../src_assets/liz.jpg"
import leeseo from "../src_assets/leeseo.jpg"

const Group = (props) => {
    const animatedItem = useScrollFadeIn();
    return (
        <section className="members" id="member">
            <div className="members-box">
                <h1 className="subtitle">MEMBER</h1>
                <div {...animatedItem} >
                    <div className="group">
                        <img className="member" src={yujin} />
                        <img className="member" src={gaeul} />
                        <img className="member" src={rei} />
                        <img className="member" src={wonyoung} />
                        <img className="member" src={liz} />
                        <img className="member" src={leeseo} />
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