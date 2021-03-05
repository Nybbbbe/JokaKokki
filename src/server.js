import db from './db.json';

class Server {
    static getCourses = () => {
        return db.courses;
    }

    static getCourse = (id) => {
        return db.courses.find(course => course.id === id);
    }
}

export default Server;