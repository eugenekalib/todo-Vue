const http = {
    apiUrl: 'http://localhost:3000',

    async get(endpoint) {
        const response = await fetch(`${this.apiUrl}${endpoint}`).then(response => response.json());
        return response;
    }
}
export default http;
