import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  header: {
    textAlign: "center",
    fontSize: 30,
    marginBottom: 20,
  },
  input: {
    width: "80%",
    marginRight: "auto",
    marginLeft: "auto",
    height: 60,
    margin: 12,
    padding: 10,
    color: "#000",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  boxShadow: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    width: "80%",
    height: 50,
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
    backgroundColor: "#643FDB",
    borderRadius: 10,
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  primaryText: {
    color: "#643FDB",
  },
  secondaryText: {
    color: "#FF8A00",
    fontSize: 18,
    textAlign: "center",
  },
  flexView: {
    marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  authText: {
    color: "#A29EB6",
    fontSize: 16,
    textAlign: "center",
  },
  clubsList: {
    width: "80%",
    padding: 20,
    marginTop: 40,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 16,
    textAlign: "center",
  },
});

export default styles;
