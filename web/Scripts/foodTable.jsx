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
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </table>
      );
    }
});
React.render(
  <DataTable />,
  document.getElementById('data')
);