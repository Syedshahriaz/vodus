$(document).ready(function() {

    // URL of the JSON data
    let jsonDataUrl = 'product.json';

    // Fetch the JSON data
    $.getJSON(jsonDataUrl, function(data) {

        // Create an HTML list item for each product
        $.each(data, function(index, product) {
            let productItem = '<div class="col-xs-12 col-sm-3 col-md-4 col-lg-3" key="'+ product.id +'">';
            productItem += '<div class="card">';
            productItem += '<div class="img-card">';
            productItem += '<img src="'+ product.image +'" /></div>';
            productItem += '<div class="card-content">';
            productItem += '<p class="price">Price: $'+ product.price +'</p>';
            productItem += '<h4 class="card-title">'+ product.name + '</h4>';
            productItem += '<p class="card-details">'+ product.description +'</p>';
            productItem += '</div>';
            productItem += '<div class="card-read-more">';
            productItem += '<button class="btn btn-link btn-block">Read More</button>';
            productItem += '</div>';
            productItem += '</div>';
            productItem += '</div>';

            // Append the list item to the product list
            $('#product__wrapper').append(productItem);
        });
    })
    .done(function() { console.log('getJSON request succeeded!'); })
    .fail(function(jqXHR, textStatus, errorThrown) { console.log('getJSON request failed! ' + textStatus); })
    .always(function() { console.log('getJSON request ended!'); });

    // on click card to show modal
    $(document).on('click', '.card', function(){
        let card_data = $(this).html();
        $("#productDetailsModal_data").append(card_data);
        $("#productDetailsModal").modal("show");
    });

    //on close modal
    $('#productDetailsModal').on("hide.bs.modal", function() {
        setTimeout(function(){
            $("#productDetailsModal_data").html('');
        },200)
    })
});