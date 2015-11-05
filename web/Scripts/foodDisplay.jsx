var DataTable = React.createClass({
    render: function () {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Fat</td>
                    <td>Carbs</td>
                    <td>Protien</td>
                    <td>Fat %</td>
                    <td>Carb %</td>
                    <td>Protien %</td>
                    <td>Cal/100gr</td>
                    <td>Sparkline</td>
                </tr>
                </thead>
                   <tbody>
                <tr>
                <td>asdas</td>
                <td>a</td>
                <td>r</td>
                <td>e</td>
                <td>d</td>
                <td>b</td>
                <td>a</td>
                <td>z</td>
                <td>x</td>
                </tr>
                   </tbody> 
                </table>
        )
    }
});
React.render(
    <DataTable url="/api/nutrition" />,
    document.getElementById('data')
);