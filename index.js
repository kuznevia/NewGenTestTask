    // Список курсов
    let courses = [
      { name: "Courses in England", prices: [0, 100] }, 
      { name: "Courses in Germany", prices: [500, null] }, 
      { name: "Courses in Italy", prices: [100, 200] }, 
      { name: "Courses in Russia", prices: [null, 400] },
      { name: "Courses in China", prices: [50, 250] },
      { name: "Courses in USA", prices: [200, null] },
      { name: "Courses in Kazakhstan", prices: [56, 324] },
      { name: "Courses in France", prices: [null, null] },
  ];

  // Варианты цен (фильтры), которые ищет пользователь
  let requiredRange1 = [null, 200];
  let requiredRange2 = [100, 350];
  let requiredRange3 = [200, null];

  const chooseCourse = (priceRange) => {
    const filteredRange = courses.filter((course) => {
      if (priceRange[0] > course.prices[1] && priceRange[0] !== null && course.prices[1] !== null) {
        return false;
      }
      if (priceRange[1] < course.prices[0] && priceRange[1] !== null && course.prices[0] !== null) {
        return false
      }
      return true;
    })
    return filteredRange;
  };

  const filterCourses = (courseList) => {
    let stepsCount = courseList.length - 1;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < stepsCount; i += 1) {
        if (courseList[i].prices[0] > courseList[i + 1].prices[0]) {
          const temp = courseList[i];
          courseList[i] = courseList[i + 1];
          courseList[i + 1] = temp;
          swapped = true;
        }
      }
      stepsCount -= 1;
    } while (swapped);
    return courseList;
  }

  console.log(chooseCourse(requiredRange1));
  console.log(chooseCourse(requiredRange2));
  console.log(chooseCourse(requiredRange3));
  console.log(filterCourses(courses));