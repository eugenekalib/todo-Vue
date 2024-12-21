const http = {
    apiUrl: 'http://localhost:3000',

    async get(endpoint) {
        try {
            const response = await fetch(`${this.apiUrl}${endpoint}`);
            
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('ОШИБКА ГЕТ! - ', error);
            throw error;
        }
    }
}

export default http;
