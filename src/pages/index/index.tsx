import React, { FC } from "react";
import { Link } from "react-router-dom";

import Card from "components/card/card";

import scss from "./index.module.scss";

const Index: FC = () => {

    return (
        <div className="inner-small">
            <Card className={ scss.card }>
                <ul>
                    <li><a href="https://kyoya0819.com/" target="_blank" rel="noopener noreferrer">kyoya0819 HP</a></li>
                    <li><Link to="/password">PasswordMaker</Link></li>
                    <li><Link to="/seating">Seating Chart Maker</Link></li>
                </ul>
            </Card>
        </div>
    );
};

export default Index;