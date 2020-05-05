import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer VUP5Ejxs8jnxy4-PUfE-1VImVfUsoZoImi8IgYwdwMOcs3VqdNC0uciBnOZsbo1_KGXYTOdAWw0v6xi3djDUQoRCmYZe9bqbgcRtWiUofVnYUXBaOTEYZXxlpmWvXnYx'
    }
}); 

