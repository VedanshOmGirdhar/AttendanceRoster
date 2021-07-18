name_of_the_students_array = [];

function submit()
{
    var name1 = document.getElementById("name_of_sudent1").value;
    var name2 = document.getElementById("name_of_sudent2").value;
    var name3 = document.getElementById("name_of_sudent3").value;
    var name4 = document.getElementById("name_of_sudent4").value;

    name_of_the_students_array.push(name1);
    name_of_the_students_array.push(name2);
    name_of_the_students_array.push(name3);
    name_of_the_students_array.push(name4);

    console.log(name_of_the_students_array);
    document.getElementById("display_name").innerHTML = name_of_the_students_array;
    document.getElementById("submit_button").style.display = "none"
    document.getElementById("sort_button").style.display = "inline-block"
}

function sort() {
    name_of_the_students_array.sort();
    console.log(name_of_the_students_array);
    document.getElementById("display_name").innerHTML = name_of_the_students_array;
}

