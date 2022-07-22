const Button = {
    baseStyle: {
        color: "rgb(107, 70, 193)",
        fontSize: "14px",
        fontWeight: "400"
      },
      variants: {
        solid: {
          color: "white",
          fontWeight: "700",
          bg: "rgb(137,93,200)"
        },
        outline: {
          color: "white",
          borderColor: "white",
          borderLeftRadius: "20px",
          borderRightRadius: "20px",
          fontSize:"9px",
          letterSpacing: "1.5px",
          fontWeight: "700",
        },
        ghost: {
          color: "white"
        }
      }
};

export default Button;