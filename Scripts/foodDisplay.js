var DataTable = React.createClass({
    render: function () {
        return (React.createElement("table", {"className": "table table-hover"}, React.createElement("thead", null, React.createElement("tr", null, React.createElement("td", null, "Name"), React.createElement("td", null, "Fat"), React.createElement("td", null, "Carbs"), React.createElement("td", null, "Protien"), React.createElement("td", null, "Fat %"), React.createElement("td", null, "Carb %"), React.createElement("td", null, "Protien %"), React.createElement("td", null, "Cal/100gr"), React.createElement("td", null, "Sparkline"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "asdas"), React.createElement("td", null, "a"), React.createElement("td", null, "r"), React.createElement("td", null, "e"), React.createElement("td", null, "d"), React.createElement("td", null, "b"), React.createElement("td", null, "a"), React.createElement("td", null, "z"), React.createElement("td", null, "x")))));
    }
});
React.render(React.createElement(DataTable, {"url": "/api/nutrition"}), document.getElementById('data'));
