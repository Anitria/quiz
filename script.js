$(document).ready(function() {
      $("#showButton").on("click", function() {
        // Get the selected values
        var favoriteDestination = $("input[name='destination']:checked").val();
        var favoriteActivities = getSelectedValues("activity");
        var favoriteAccommodation = $("input[name='accommodation']:checked").val();
        var preferredItinerary = getSelectedValues("itinerary");
        var documentationMethods = getSelectedValues("documentation");

        // Display results
        var resultText = "Results:\n";
        resultText += "1. Favorite Destination: " + (favoriteDestination ? favoriteDestination : "Not selected") + "\n";
        resultText += "2. Favorite Activities: " + (favoriteActivities.length > 0 ? favoriteActivities.join(", ") : "Not selected") + "\n";
        resultText += "3. Preferred Accommodation: " + (favoriteAccommodation ? favoriteAccommodation : "Not selected") + "\n";
        resultText += "4. Itinerary Preferences: " + (preferredItinerary.length > 0 ? preferredItinerary.join(", ") : "Not selected") + "\n";
        resultText += "5. Documentation Methods: " + (documentationMethods.length > 0 ? documentationMethods.join(", ") : "Not selected");

        $("#results").text(resultText);
      });

      function getSelectedValues(name) {
        var selectedValues = [];
        $("input[name='" + name + "']:checked").each(function() {
          selectedValues.push($(this).val());
        });
        return selectedValues;
      }
    });