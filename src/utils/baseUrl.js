const baseUrl = process.env.NODE_ENV === "production" 
? 'https://new.fullmind.cl'
: 'http://localhost:3000';

export default baseUrl;