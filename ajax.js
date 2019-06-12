 //submit method, with method that the page isn't refreshing (preventDefault)

$(()=>{

       $('#search-form').submit(e =>{
        e.preventDefault();

        //we write first until part let searchTerm, than const SearchMe, as least "searchMe(searchTerm)"
        //variable searchTerm = input of the value 
        let searchTerm = $("#search-input").val();
        
        //as last code, we wrote this one, so you can't see the previous searchs on the webpage, it makes the page empty
        $('#search-results').html('');
        //searchTerm = what the user types in, searchMe is the function see below, it has the argument searchTerm 
        searchMe(searchTerm);
    });

    const searchMe = term => {
        const url = "https://swapi.co/api/people";
        //object: params, search is a parameter in swapi, to making it dynamic, use we 'term' function
        let params = {
          search: term
        };
        
        $.ajax({
            //urls location is in const url
            url: url,
            type: "GET",
            data: params,
            dataType: "json"
        })
        // if $.ajax is completed, do this function: .done
        .done(data =>{
            //console.log(data.results);
            showResults(data.results);
            // showResults(data.results); showResults is a function too
        })
        // if it is not completed, do this function, but this doesn't work if u try it on the webpage:
        .fail(fail =>{
            console.log(fail);
            
        })
    };

    const showResults = data => {
        $.each(data,(i,value) => {
            $('#search-results').append(`<p>Name: ${value.name} gender: ${value.gender}`);
            //each metod is a simplified for loop, value = data [i]
            //console.log(value); it console logs every value in the object that I'm iterrating through
            //if I want to console log just some of the values: console.log(value.name, value.gender);
            // we appending the search results name and gender to the document, to the HTML
        });
    };

});

/*$(() => {
    $('#search-form').submit(e => {
        e.preventDeafault();

        //we write first until part let searchterM, than const SerachMe, as least "searchMe(searchTerm)"
        let searchTerm = $('#search-input').val();
        //searchTerm = what the user types in, searchMe is th function see below
        searchMe(searchTerm);
        //$('#search-results').html('');
    });

    const searchMe = term => {
        const url = 'https://swapi.co/api/people';
        //object: params, search is a parameter in swapi, to making it dynamic, use we 'term' function
        let params = {
            search: term
        };

        $.ajax({
            //urls location is in const url
            url: url,
            type: 'GET',
            data: params,
            dataType: 'json'
        })
        // om $.ajax is completed, do this: .done
        .done(data => {
                console.log(data);
            })
        // if it is not completed, do this:
        .fail(fail => {
            console.log(fail);
        });
    };
});*/