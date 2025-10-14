const ButtonFirstVariation = ({ firstClassName, secondClassName, style, title, children }) => {
    return (
        <button className={firstClassName} style={style} >
            <span className={secondClassName}>
             {children}  {title} 
            </span>
        </button>
    )
}

export default ButtonFirstVariation