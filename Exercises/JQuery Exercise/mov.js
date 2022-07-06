

// $('button').on('click', function(event){
//     event.preventDefault();
//     let title = $('#title').val()
//     let rating = $('#rating').val()

//     $('ol').append(
//         `<li>${title} ${rating} <button>Remove</button></li>`
//     )
// })

$('#submit').on('click', function(event){
    event.preventDefault();
    let title = $('#title').val()
    let rating = $('#rating').val()
    if($('#rating').val() <= 10 && $('#rating').val() >= 0 && $('#title').val().length >= 2){
        $('ol').append(
            `<li>${title} ${rating} <button type="submit" id="delete">Remove</button></li>`
        )
    }
    else {alert("Invalid")}

    $('#ol').on('click', '#delete', function(event){
        $(this).parent().remove();
    })
    $('#title').val("")
    $('#rating').val("")
})
 


