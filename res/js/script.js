$(function () {

    let user = new User('Jane',
        'Doe',
        '17/01/1990',
        'Faculty of Science and Technology',
        4.5
    );

    let courses = [
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

    }
});

