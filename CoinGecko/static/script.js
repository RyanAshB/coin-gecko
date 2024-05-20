$(document).ready(function() {
    fetchData();
    setInterval(fetchData, 60000); // Fetch data every 60 seconds
});

function fetchData() {
    $.get('/data', function(data) {
        var tableBody = $('#crypto-table-body');
        tableBody.empty();

        $.each(data, function(index, coin) {
            var row = $('<tr>');
            row.append($('<td>').text(index + 1));
            row.append($('<td>').text(coin.name));
            row.append($('<td>').text(coin.symbol.toUpperCase()));
            row.append($('<td>').text('$' + coin.current_price.toLocaleString()));
            row.append($('<td>').text('$' + coin.market_cap.toLocaleString()));
            tableBody.append(row);
        });
    });
}
