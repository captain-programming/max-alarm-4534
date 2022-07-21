const Button = {
    baseStyle: {
        color: "rgb(107, 70, 193)",
        fontSize: "14px",
        fontWeight: "400"
      },
      variants: {
        solid: {
          color: "white",
          fontWeight: "600",
          backgroundImage:
            "linear-gradient(to right, rgb(128, 90, 213), rgb(49, 130, 206))"
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
          color: "rgb(74, 85, 104)"
        }
      }
};

export default Button;