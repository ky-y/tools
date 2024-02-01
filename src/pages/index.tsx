import { A, Card, Footer, Main, Section } from "@ky-y./ui";
import type { NextPage } from "next";

import Header from "components/Header";

const Index: NextPage = () => {

    return (
        <>
            <Header />
            <Main>
                <Section inner="md">
                    <Card>
                        主に自分用のツールを置いています。<br />
                        生成結果に関しては制限なくご自由にお使いいただけます。<br />
                        不明点, 機能要望, バグ報告等ありましたら、<A href="https://github.com/ky-y/tools/issues" target="_blank">GitHubのIssues</A>か、kyoya0819@gmail.comまでご連絡いただけますと幸いです。
                    </Card>
                </Section>
            </Main>
            <Footer />
        </>
    );
};
export default Index;