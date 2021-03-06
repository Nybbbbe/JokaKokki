import db from './db.json';

class Server {
    static getCourses = () => {
        return db.courses;
    }

    static getCourse = (id) => {
        return db.courses.find(course => course.id === id);
    }

    static getEpisodes = (id) => {
        const episodes = [];
        db.episodes.forEach(episode => {
            if (episode.parentId === id) episodes.push(episode)
        });
        return episodes;
    }
}

export default Server;