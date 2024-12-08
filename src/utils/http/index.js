const http = {
    apiUrl: 'http://localhost:3000',

    async get(endpoint) {
        try {
            const response = await fetch(`${this.apiUrl}${endpoint}`).then(response => response.json());
            return response;
        } catch (error) {
            console.error('ОШИБКА ГЕТ! - ', error);
        }
    }
}
export default http;
