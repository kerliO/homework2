$(document).ready(function(){

    let courses=[
        new Course('Alige software development', 1, 82),
        new Course('System modeling', 1, 85),
        new Course('Objekt-oriented programming', 2, 99),
        new Course('Estonian language Level A2', 2, 65)
    ];

    let user=new User('John',
        'Doe',
        '11/10/1990',
        'Sftware Engeneering',
        2.75
    );
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

        $("#name").text(user.firstname + " " + user.lastname);
        $("#birthdate").text(user.birthdate);
        $("#faculty").text(user.faculty);
        $("#gpa strong").text(user.gpa);

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