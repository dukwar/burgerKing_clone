import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";


function Button({className, onClick, outline, children, activeBut, data, id}) {

    const handleOnClick = (e) => {
        if (id) {
            return onClick(e, id)
        } else if (onClick) {
            return onClick(e)
        } else {
            return null
        }
    }

    const classes = classNames(
        'button',
        className,
        {
            'button--outline' : outline,
            'button__active' : activeBut

        }

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

Button.propTypes = {
    onClick: PropTypes.func
}


export default Button