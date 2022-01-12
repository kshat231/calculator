<script>
function calculate_this() {
  var input = document.getElementById('numbers').value;
  var results = eval(input);
  document.getElementById('results').innerHTML = results;
}
</script>

Calculator: <input type="text" id="numbers" value="2*2+1">
<input type=button value="Calculate" onClick="calculate_this()"><br>
Result: <span id="results">(click "Calculate")</span>
