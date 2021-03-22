const shouldShowCourse = (filter, course) => {
    if (course.title.toLowerCase().includes(filter.toLowerCase())) {
        return true;
    }
    if (course.categories.some((cat) => cat.includes(filter.toLowerCase()))) {
        return true;
    }
    return false;
};

const FilterHandler = { shouldShowCourse };
export default FilterHandler;
