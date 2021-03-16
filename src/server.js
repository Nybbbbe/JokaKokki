import db from './db.json';

class Server {
    static getCourses = () => {
        return db.courses;
    }

    static getCourse = (id) => {
        return db.courses.find(course => course.id === id);
    }

    static getCoursesByGroup = (group) => {
        const courses = [];
        db.courses.forEach(course => {
            if (course.classifications.includes(group)) courses.push(course)
        });
        return courses;
    }

    static getMyCourses = () => {
        const courses = [];
        db.courses.forEach(course => {
            if (db.user.owned.includes(course.id)) courses.push(course)
        });
        return courses;
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

    static getEpisodeContent = (id) => {
        const episodeContents = [];
        db.episodeContents.forEach(episode => {
            if (episode.parentId === id) episodeContents.push(episode)
        });
        return episodeContents;
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

    static getGroups = () => {
        return db.groups;
    }

    static getCategories = () => {
        return db.categories;
    }

}

export default Server;