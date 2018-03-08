import axios from 'axios';

const url = 'http://localhost:80/polls';

export default class Api {

    static getPollById(id){
        return axios({
            method: 'get',
            url: url+"/"+id
        });
    }

    static setPoll(poll){
        return axios({
            method: 'post',
            url: url,
            data: poll
        });
    }

    static vote(id){
        return axios({
            method: 'patch',
            url: `http://localhost:80/options/${id}/vote`
        });
    }
}