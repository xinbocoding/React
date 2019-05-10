import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
            'Client-ID f70632dbf6e0a562cd8f6de745ec4f633b0efa149a19ee83e19117621426608d'
    }
});