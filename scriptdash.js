var baseurl = "https://flespi.io/gw/devices/2437017/messages?data=%7B%7D";
function loadData2() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", baseurl, false);
    xmlhttp.setRequestHeader("Authorization", "FlespiToken Nqy02NoF1G6DJKVayifPYNcpl5JCZ1oAfKq5oCzd9vEG4qFsyK5ml7zw39WQY8g3");
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var persons = JSON.parse(xmlhttp.responseText);
            var tbltop = `<table>
                    <tr><th>Battery Level</th>
                        <th>Channel ID</th>
                        <th>Device ID</th>
                        <th>Device Name</th>
                        <th>Gsm Cellid.1</th>
                        <th>Position Altitude</th>
                        <th>Position Direction</th>
                        <th>position Hdop</th>
                        <th>Position Latitude</th>
                        <th>Position Longitude</th>
                        <th>Protocol ID</th>
                        <th>Timestamp</th>`;
            //main table content we fill from data from the rest call
            var main = "";
            data101 = persons.result.length;
            var x = data101 - 8;
              for (var i = x; i < data101; i++) {

            main += "<tr><td>" + persons.result[i]['battery.level'] + "</td><td>" + persons.result[i]['channel.id'] + "</td><td>" + persons.result[i]['device.id'] + "</td><td>" + persons.result[i]['device.name'] + "</td><td>" + persons.result[i]['gsm.cellid.1'] + "</td><td>" + "</td><td>" + persons.result[i]['position.direction'] + "</td><td>" + persons.result[i]['position.hdop'] + "</td><td>" + persons.result[i]['position.latitude'] + "</td><td>" + persons.result[i]['position.longitude'] + "</td><td>" + persons.result[i]['protocol.id'] + "</td><td>" + persons.result[i]['timestamp'] + "</td>";
            }
            var tblbottom = "</table>";
            var tbl = tbltop + main + tblbottom;
            document.getElementById("TrackDetailsDash").innerHTML = tbl;
        }
    };
    xmlhttp.send(null);
}
window.onload = function () {
    loadData2();
}