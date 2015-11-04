var DataTable = React.createClass({
    render: function() {
        return (
          <table class="table table-hover">
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
            <DataRows data={this.props.data} />
          </table>
      );
    }
});
var DataRows = React.createClass({
    render: function (food) {
        return (
             <tr>
                <td>{food.Name}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
          );
    }
});
React.render(
  <DataTable url="/api/nutrition" />,
  document.getElementById('data')
);