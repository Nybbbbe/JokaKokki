class FilterHandler {
    static currentFilter = "";

    static changeFilter = (filter) => {
        this.currentFilter = filter;
    };

    static shouldShowCourse = (course) => {
        if (course.title.toLowerCase().includes(this.currentFilter.toLowerCase())) {
            return true;
        }
        if (course.categories.some((cat) => cat.includes(this.currentFilter.toLowerCase()))) {
            return true;
        }
        return false;
    };
}

export default FilterHandler;
