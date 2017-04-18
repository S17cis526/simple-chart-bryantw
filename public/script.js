$(function() {
  var peerReviewCanvas = $('#peer-review')[0];
  var peerReviewCtx = peerReviewCanvas.getContext('2d');
  var colors = [
    'yellow',
    'purple',
    'silver',
    'green',
    'red',
    'blue',
    'orange',
    'fuschia',
    'cyan'
  ]

  peerReviewCtx.strokeText("Peer Review", 90, 10);
  for (i = 0; i < 11; i++) {
    peerReviewCtx.fillText(10 - i, 10, 30 + i * 20);
    peerReviewCtx.moveTo(25, 30 + i * 20);
    peerReviewCtx.lineTo(100, 30 + i * 20);
  }
  peerReviewCtx.stroke();

  //Draw peer review bars
  $.ajax({
    url: '/peerReview.json',
    dataType: 'json',
    success: function(data) {
      var categories = Object.keys(data);

      categories.forEach(function(category, index) {
        var value = data[category];
        var x = 30 +index * 10;
        var y = 30+(10-value) * 20;
        var height = value * 20;

        peerReviewCtx.fillStyle = colors[index];
        // Draw Bars
        peerReviewCtx.fillRect(x, y, 5, height);
        // Draw Labels
        peerReviewCtx.fillRect(110, 80 + 20 * index, 10, 10);
        peerReviewCtx.strokeText(category, 130, 90 + 20 * index);
      });

      //Draw Labels
      categories.forEach*(function(category, index) {

      });
    }
  });

  var pointDistributionCanvas = $('#point-distribution')[0];
  var pointDistributionCtx = pointDistributionCanvas.getContext('2d');
  // Draw the point distribution graph
  $.ajax({
    url: '/pointDistribution.json',
    dataType: 'json',
    success: function(data) {
      var people = Object.keys(data);
      var total = Object.values(data).reduce(function(acc, value) {
        return acc+value;
      }, 0);
      var start = 0;
      people.forEach(function(person) {
        var percent = data[person] / total;
        var end = start + percent * 2 * Math.P
        pointDistributionCtx.arc(100, 100, 80, start, end, false);
        start = end;
      });
    }
  });

});
