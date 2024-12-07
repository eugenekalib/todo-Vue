import http from "@/utilis/http";
const getTodos = async () => {
    const endpoint = "todos";
    return await http.get(endpoint);
}
export default getTodos;