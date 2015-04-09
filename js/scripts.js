var count = function(block) {

//set variables
  var words = block.split(" "),
      frequency = {},
      words_freq, ordered,
      i, word, output;

//loop to check frequency of words
  for (i = 0; i < words.length; i++) {
    word = words[i];
    frequency[word] = frequency[word] || 0;
    frequency[word]++;
  }

//convert frequency object to an array so we can sort it
  words_freq = Object.keys(frequency);

//necessary to sort words by frequency
  function compareFreq(a, b) {
    return frequency[b] - frequency[a];
  }

//orders words by frequency
  ordered = words_freq.sort(compareFreq);

  output = [words.length, ordered];

  return output;
};

$(document).ready(function() {

  $('form#input').submit(function(event) {
    var input = $('textarea#block').val();
    var result = count(input);
    var output = "";

    $("#count").text(result[0]);

    result[1].forEach(function(word) {
      output += "<li>" + word + "</li>";
    });

    $("#list").append(output);

    $('#result').show();
    event.preventDefault();

  });
});
