$(document).ready(function(){
    let user=new User('Jane',
        'Doe',
        '17/01/1990',
        'Faculty of Science and Technology',
        0
    );
    let courses=[
        new Course('Machine Learning', 1, 99),
        new Course('Business Data Analytics', 1, 91),
        new Course('Programming Languages', 2, 95),
        new Course('School Software', 2, 81)
    ];
    init(); //initialize dynamical population
    function init() {
        $(".controls button#profile-button.pill").click(function (event) {
            $("#profile-container").addClass('active');
            $("#courses-container").removeClass('active');
            $("#profile-button").addClass('active');
            $("#courses-button").removeClass('active');
        });
        $('.controls button#courses-button.pill').click(function (event) {
            $("#profile-container").removeClass("active");
            $("#courses-container").addClass("active");
            $("#courses-button").addClass('active');
            $("#profile-button").removeClass('active');
        });
        $('.content button#add-course-button.blue-button').click(function (event) {
            // alert("You clicked me!")
            $("#add-course").toggle();
        });
        $("button#courses tbody").empty();
        for (let i=0; i < courses.length; i++) {
            let tr=$("<tr></tr>");
            let rNo=$('<td></td>').text(i + 1);
            let cName=$('<td></td>').text(courses[i].title);
            let cSemester=$('<td></td>').text(courses[i].semester);
            let cGrade=$('<td></td>').text(courses[i].grade);
            tr.append(rNo);
            tr.append(cName);
            tr.append(cSemester);
            tr.append(cGrade);
            $("button#courses tbody").append(tr);
        }
        $('button#save-course.green-button').click(function (event) {
            // alert("You clicked me!")
            let table = $("#courses").find('tbody');
            let nr = courses.length;
            let title = $('#title').val();
            let semester = $('#semester').val();
            let grade = $('#grade').val();
            table.append($('<tr>'));
            table.append($('<td>').text(nr+1));
            table.append($('<td>').text(title));
            table.append($('<td>').text(semester));
            table.append($('<td>').text(grade));
            refreshToDefault()
            courses.push(new Course(title, semester, grade));
            $("#gpa strong").text(avgGPA());
        });
        function refreshToDefault() {
            $('.input').val('');
            $('button#add-course').hide();
        }

        function avgGPA() {
                let points = 0;
                for (let i = 0; i < courses.length; i++) {
                    let grade = courses[i].grade;
                    if (grade > 90) {
                        points += 4;
                    }
                    else if (grade > 80) {
                        points += 3;
                    }
                    else if (grade > 70) {
                        points += 2;
                    }
                    else if (grade > 60) {
                        points += 1;
                    }
                    else if (grade > 50) {
                        points += 0.5;
                    }
                }
                return points/courses.length;
            }
    }
});

