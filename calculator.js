var checkInvalidCredit;
var checkInvalidGrade;

function addCourse( ) {
    var cell1, cell2, cell3, cid, gid, id, newRow;
    var rows = document.getElementById( "theTable" ).rows.length;
    var table = document.getElementById( "theTable" );

    newRow = table.insertRow( rows - 1) ;
    cell1 = newRow.insertCell( 0 );
    cell2 = newRow.insertCell( 1 );
    cell3 = newRow.insertCell( 2 );

    id = ( rows - 3 );
    cid = "c" + id;
    gid = "g" + id;

    cell1.innerHTML = "Course #" + id + ":";
    cell2.innerHTML = "<input type=\"number\" id=" + cid + " min=\"0\" placeholder=\"Enter your credit\">";
    cell3.innerHTML = "<input type=\"text\" id=" + gid + " placeholder=\"Enter your grade\">";
}

function calculateGPA( ) {
    checkInvalidCredit = false;
    var cummulative = 0.00;
    var i = 0;
    var nums = [];
    var rows = document.getElementById( "theTable" ).rows.length - 4;
    var totalCredits = Number(document.getElementById( "credits" ).value);
    var totalPoints = Number(document.getElementById( "gpa" ).value) * totalCredits;

    if(totalCredits < 0 || totalPoints < 0)
    {
    alert ("Invalid input for Cumulative GPA or credits.");
    document.getElementById( "results" ).innerHTML = "<td> Error: Invalid input </td>";
    checkInvalidCredit = true;
    }

    getGrades( nums, rows );

    for ( i = 0; i < rows; ++i ) {
        if( Number( document.getElementById( "c" + ( i + 1 ) ).value ) >= 0 )
        {
        totalCredits += Number( document.getElementById( "c" + ( i + 1 ) ).value );
        totalPoints += document.getElementById( "c" + ( i + 1 ) ).value * nums[i];
        }
        else
        {
         alert ("Invalid input for course "+(i+1)+" credit.");
         document.getElementById( "results" ).innerHTML = "<td> Error: Invalid credit input </td>";
         checkInvalidCredit = true;
        }
    }

    if ( checkInvalidCredit === false && checkInvalidGrade === false ) {
        cummulative = ( totalPoints / totalCredits );
    document.getElementById( "results" ).innerHTML = "<td>Total Credits: " + totalCredits + "</td>"
                                                        + "<td>New GPA: " + cummulative.toPrecision( 3 ) + "</td>";
     }
}

function deleteCourse( ) {
    var length = document.getElementById( "theTable" ).rows.length;
    var index = length - 2;

    if (length > 7) {
        document.getElementById( "theTable" ).deleteRow( index );
    }
}

function getGrades( nums, rows ) {
    checkInvalidGrade = false;
    var letters = [];

    for (i = 0; i < rows; ++i) {
        letters.push(document.getElementById( "g" + ( i + 1 ) ).value);

        if ( letters[i].toUpperCase() == "A+" ) {
            nums.push( 10 );
        }

        else if ( letters[i].toUpperCase() == "A" ) {
            nums.push( 9 );
        }
        else if ( letters[i].toUpperCase() == "B+" ) {
            nums.push( 8 );
        }

        else if ( letters[i].toUpperCase() == "B" ) {
            nums.push( 7 );
        }
         else if ( letters[i].toUpperCase() == "C+" ) {
            nums.push( 6 );
        }

        else if ( letters[i].toUpperCase( ) == "C" ) {
            nums.push( 5 );
        }

         else if ( letters[i].toUpperCase() == "D+" ) {
            nums.push( 4 );
        }

        else if ( letters[i].toUpperCase( ) == "D" ) {
            nums.push( 3 );
        }        
        else if ( letters[i].toUpperCase( ) == "E+" ) {
            nums.push( 2 );
        }

        else {
            alert("Invalid input for course " + (i + 1) + " grade.");
            document.getElementById( "results" ).innerHTML = "<td> Error: Invalid grade input </td>";
            checkInvalidGrade = true;
        }
    }
}

function reset( ) {
    location.reload( );
}