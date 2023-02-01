import React, { FC } from "react";

import scss from "./index.module.scss";

const Hero: FC = () => {

    return (
        <section className={ scss.hero }>
            <div className="inner">
                主に自分用のツールを置いています。<br />
                生成結果に関しては制限なくご自由にお使いいただけます。<br />
                不明点, 機能要望, バグ報告等ありましたら、
                <a href="https://github.com/kyoya0819/tools/issues" target="_blank" rel="noreferrer">GitHubのIssues</a>か、
                <a href="mailto:kyoya0819@gmail.com">kyoya0819@gmail.com</a>までご連絡いただけますと幸いです。
            </div>
        </section>
    );
};
export default Hero;
