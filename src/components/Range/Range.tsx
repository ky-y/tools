import React, {ChangeEvent, FC} from "react";

import scss from "./Range.module.scss";

const Range: FC<{
    max?: number | string,
    min?: number | string,
    step?: number | string,
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void,
    value?: number | string
}> = ({ max, min, onChange, value, step }) => {

    return (
        <div className={ scss.range }>
            <span className={ scss.description }>Weak</span>
            <div className={ scss.controller }>
                <input
                    type="range" max={ max } min={ min } step={ step }
                    onChange={ (e) => {
                        if (onChange)
                            onChange(e);
                    }} value={ value }
                />
                {
                    max && min && step ? (
                        <ul id={ scss.scales }>{
                            [...Array(((Number(max) - Number(min)) / Number(step)) + 1)].map((_, index) => {

                                const count = (Number(max) - Number(min)) / Number(step) + 1;

                                return (
                                    <li key={ index } style={{
                                        left: `calc((100% - 1.4rem - (${count} * 1px)) / (${count} - 1) * ${index} + 0.7rem + (${index} * 1px))`
                                    }} />
                                );
                            })
                        }</ul>
                    ) : ""
                }
            </div>
            <span className={ scss.description }>Strong</span>
        </div>
    );
};
export default Range;
