import http from '@/utils/http';

export const getTodos = async () => {
    const endpoint = '/todos';
    const todos = await http.get(endpoint);
    return todos;
}

