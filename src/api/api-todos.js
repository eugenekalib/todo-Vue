import http from '@/utils/http';
const getTodos = async () => {
    const endpoint = '/todos';
    const todos = await http.get(endpoint);
    return todos;
}
export { getTodos };
