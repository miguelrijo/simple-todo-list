const getStyles = (checked: boolean) => ({
  mainContainer: {
    backgroundColor: "aliceblue",
    width: "100%",
    marginTop: "20px",
    fontSize: "24px",
    height: "40px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    textAlign: "initial",
    textDecoration: checked ? "line-through" : "none",
    justifyContent: "space-between",
    paddingRight: "10px",
  },
  checkBox: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
    marginLeft: "10px",
    cursor: "pointer",
  },
  leftContainer: {
    width: "fit-content",
  },
  closeBtn: {
    cursor: "pointer",
    backgroundColor: "red",
    fontWeight: "bold",
  },
});

export default getStyles;
