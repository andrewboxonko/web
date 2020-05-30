function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = JSON.parse(xmlhttp.responseText);
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

ajax_get('../api/dishes', function(data) {
    var html = '';
    for (var i = 0; i < data["dishes"].length; i++){
        var url = "/dishes/" + data['dishes'][i]['slug'];
        html += "<div class='item'>";
        html += '<a href="' + url + '">';
        html += "<img src='" + data['dishes'][i]['image'] + " ' alt = ' '>" + '</a>';
        html += '<p><a href="' + url + '">';
        html += data['dishes'][i]['name'] + "</a><br></p>";
        html += "<p>$" + data['dishes'][i]['price'] + "</p>";
        html += "</div>"
    }
    document.getElementById('list').innerHTML = html;
});


ajax_get('../../api/orders', function(data) {
    var list = [];
    var order = data['order_items'];
    for (var i = 0; i < order.length; i++ ){
        list[i] = order[i]['order']['address'];
    }
    var html = "<p>City :" + order[list.length - 1]['order']['city'] + "</p>";
    html += "<p>Address :" + list[list.length - 1] + "</p>";
    var temp = 1;
    var total_price = 0;
    for (var j = 0; j < order.length; j++){
        if (list[list.length - 1] === order[j]['order']['address']){
            html += "<p>Product :" + order[j]['product']['name'] + "</p>";
            html += "<p>Quantity :" + order[j]['quantity'] + "</p>";
            html += "<p>Price :" + order[j]['price'] + "</p>";
            temp = order[j]['quantity'] * order[j]['price'];
            total_price += temp;
        }
    }
    document.getElementById('your-order').innerHTML = html;
    document.getElementById('your-order').innerHTML += "<p> Total: $" + total_price;
});


ajax_get('../api/locations', function(data) {
    var html = '';
    for (var i = 0; i < data['locations'].length; i++){
        html += '<p><strong>Address:</strong> ' + data['locations'][i]['address'] + "</p>";
        html += '<p><strong>Phone:</strong> ' + data['locations'][i]['phone'] + "</p>";
        html += '<p><strong>Email:</strong> ' + data['locations'][i]['email'] + "</p>";
    }
    document.getElementById('information').innerHTML = html;
});