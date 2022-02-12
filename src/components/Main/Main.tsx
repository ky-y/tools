import React, { FC } from "react";

import scss from "./Main.module.scss";

const Main: FC = ({ children }) => {

    return <main className={ scss.main }>{ children }</main>;
};
export default Main;
