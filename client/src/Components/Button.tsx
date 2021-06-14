import React, {DOMAttributes, HTMLAttributes} from "react";
import classNames from "classnames";

declare module 'react' {
    interface HTMLAttributes<T> extends DOMAttributes<T>{
        data?:string;
    }
}

interface Props extends React.HTMLAttributes<HTMLDivElement & HTMLButtonElement & HTMLAttributes<string>> {
    activeBut?: boolean,
    id?: string,
    data?: string,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>, id?: string) => void,
    className?: string

}

function Button({className, onClick, children, activeBut, data, id}:Props) {

    const handleOnClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        if (id) {
            return onClick ? onClick(e, id) : undefined
        } else {
            return onClick ? onClick(e) : undefined
        }

    }

    const classes = classNames(
        'button',
        className,
        {'button__active' : activeBut}

    )

    return (

        <button onClick={(e) => handleOnClick(e)}
                id={id}
                data={data}
                disabled={activeBut}
                className={classes}>
            {children}
        </button>
    )
}




export default Button