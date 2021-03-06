import db from './db.json';

class Server {
    static getCourses = () => {
        return db.courses;
    }

    static getCourse = (id) => {
        return db.courses.find(course => course.id === id);
    }

    static getEpisode = (id) => {
        return db.episodes.find(episoded => episoded.id === id);
    }

    static getEpisodes = (id) => {
        const episodes = [];
        db.episodes.forEach(episode => {
            if (episode.parentId === id) episodes.push(episode)
        });
        return episodes;
    }

    static getUser = () => {
        return db.user;
    }

    static setUserTrial = (value) => {
        db.user.freeTrial = value;
    }

    static addOwned = (value) => {
        if (db.user.owned.indexOf(value) === -1) {
            db.user.owned.push(value);
        }
    }

}

export default Server;