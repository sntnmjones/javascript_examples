/*---------------------------------- 
---- anonymous function example ----
----------------------------------*/
var fear = fearGenerated(numPeeps, rainIn,Inches, numSharks);

var fearMessage = function() {
  // Insert conditional statements here
	if(fear < 200)
  {
    return confirm("Fear Level: LOW\nStill wanna ride?");
  }
  else if(fear >= 200 && fear <= 300)
  {
    return confirm("Fear Level: MEDIUM\nThink you'll make it?");
	}
};

function confirmRide(confirmToGo) {
  return confirmToGo();
}

// Call confirmRide with the fearMessage function
var startRide = confirmRide(fearMessage);