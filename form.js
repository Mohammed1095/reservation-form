import $ from "jquery";
$(document).ready(function () {
  function updateNumberOfNights() {
    checkInDate = $("#checkin-input").val();
    checkOutDate = $("#checkout-input").val();
    numberOfNights = $("#nights-input").val();

    if (checkInDate && numberOfNights) {
      checkOutDate = moment(checkInDate)
        .add(numberOfNights, "days")
        .format("YYYY-MM-DD");
      $("#checkout-input").val(checkOutDate);
    } else if (checkInDate && checkOutDate) {
      var timeDiff = moment(checkOutDate).diff(moment(checkInDate), "days");
      numberOfNights = Math.ceil(timeDiff);
      $("#nights-input").val(numberOfNights);
    }
  }

  // update the number of nights whenever the check-in or check-out date changes
  //   function attachEventListeners() {
  //     $("#checkin-input, #checkout-input").on("change", function () {
  //       updateNumberOfNights();
  //     });
  //     $("#checkin-input").on("change", function () {
  //       updateNumberOfNights();
  //     });

  //     $("#nights-input").on("change", function () {
  //       updateNumberOfNights();
  //     });
  //     $(".star").click(function () {
  //       var index = $(this).index();
  //       $(".star").removeClass("filled");
  //       for (var i = 0; i <= index; i++) {
  //         $($(".star")[i]).addClass("filled");
  //       }
  //       $("#star-rating-input").val(index + 1);
  //     });
  //     // attach a click event listener to the "Advanced Options" button
  //     $(".custom-advanced-button").click(function () {
  //       // display the modal when the button is clicked
  //       modal.style.display = "block";
  //     });

  //     // attach a click event listener to the modal's close button
  //     closeButton.onclick = function () {
  //       // hide the modal when the close button is clicked
  //       modal.style.display = "none";
  //     };

  //     // attach a click event listener to the modal background
  //     window.onclick = function (event) {
  //       // hide the modal when the user clicks outside of it
  //       if (event.target == modal) {
  //         modal.style.display = "none";
  //       }
  //     };
  //   }
  function attachEventListeners() {
    $("#checkin-input, #checkout-input").on("change", function () {
      updateNumberOfNights();
    });
    $("#checkin-input").on("change", function () {
      updateNumberOfNights();
    });

    $("#nights-input").on("change", function () {
      updateNumberOfNights();
    });
    $(".star").click(function () {
      var index = $(this).index();
      $(".star").removeClass("filled");
      for (var i = 0; i <= index; i++) {
        $($(".star")[i]).addClass("filled");
      }
      $("#star-rating-input").val(index + 1);
    });
    // attach a click event listener to the "Advanced Options" button
    $(".custom-advanced-button").click(function () {
      // get references to the modal and its close button
      var modal = document.getElementById("myModal");
      var closeButton = document.getElementsByClassName("close")[0];

      // display the modal only if it exists
      if (modal) {
        modal.style.display = "block";
      }

      // attach a click event listener to the modal's close button
      if (closeButton) {
        closeButton.onclick = function () {
          // hide the modal when the close button is clicked
          if (modal) {
            modal.style.display = "none";
          }
        };
      }
      $(".done-btn").click(function () {
        // submit the form
        $("form").submit();

        // close the modal
        if (modal) {
          modal.style.display = "none";
        }
      });

      // attach a click event listener to the modal background
      window.onclick = function (event) {
        // hide the modal when the user clicks outside of it
        if (event.target == modal) {
          if (modal) {
            modal.style.display = "none";
          }
        }
      };
    });
  }

  var formHtml = `
            <div class="container">
                <form class="form-container">
                  <div class="destination-rating">
                    <div>
                    <label for="destination-select">Destination</label>
                    <select class="destination-select" id="destination-select" placeholder="enter your destination">
                      <option value="cairo-egypt">Cairo</option>
                      <option value="cairo-italy">Cairo Montonette-(Italy)</option>
                      <option value="cairo-ga">Cairo(ga)-(United States of America)</option>
                      <option value="cairo-il">Cairo(il)-(United States of America)</option>
                      <!-- add more options here -->
                    </select>
                    </div>
                    <div>
                    <label for="star-rating-input">Star Rating</label>
                    <div class="star-rating-input">
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                        <span class="star"></span>
                        <input type="hidden" id="star-rating-input" name="star-rating-input" value="0">
                    </div>
                    </div>

                  </div>
                  <div class="in-out-nights">
                  <div class="form-group">
                    <label for="checkin-input">Check-in</label>
                    <input type="date" class="form-control" id="checkin-input">
                  </div>
                  <div class="form-group">
                    <label for="checkout-input">Check-out</label>
                    <input type="date" class="form-control" id="checkout-input">
                  </div>
                  <div class="form-group ">
                    <label for="nights-input">Nights</label>
                    <input type="number" class="form-control" id="nights-input" min="1" max="15" value="" >
                  </div>
                  </div>
                  <div class="form-group ">
                    <label for="nationality-select">Nationality</label>
                    <select class="nationality-select" id="nationality-select" placeholder="enter your nationality">
                      <option value="saudi arabia" data-icon="https://flagcdn.com/64x48/sa.png">Saudi Arabia</option>
                      <option value="egypt">Egypt</option>
                      
                      <!-- add more options here -->
                    </select>
                  </div>
                  <div class="actions">
                    <button class="btn custom-advanced-button">Advanced options</button>
                    <button type="submit" class="btn custom-search-button">Search</button>
                   
                  </div>
                  <div id="myModal" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <div class="filter-container">
                        <div class="country-select select">
                            <label>Country</label>
                            <select id="country-select">
                            <option value="egypt">egypt</option>
                            </select>
                        </div>
                        <div class="city-select select">
                            <label>City</label>
                            <select id="city-select">
                            <option value="cairo">cairo</option>
                            </select>
                        </div>
                        <div class="currency-select select">
                            <label>Currency</label>
                            <select id="currency-select">
                            <option value="egp">egp</option>
                            </select>
                        </div>
                        </div>
                        <div class="done-btn-container"><button type="submit" class="done-btn" >Filter</button></div>
                    </div>
                  </div>
                </form>
            </div>      
            `;

  // add the form to the container element
  $("#form-container").html(formHtml);

  attachEventListeners();

  // handle form submission
  $("form").submit(function (event) {
    // prevent the form from submitting normally
    event.preventDefault();

    // get the form data
    var formData = {
      destination: $("#destination-select").val(),
      checkin: $("#checkin-input").val(),
      checkout: $("#checkout-input").val(),
      nights: $("#nights-input").val(),
      nationality: $("#nationality-select").val(),
      rating: $("#star-rating-input").val(),
      country: $("#country-select").val(),
      city: $("#city-select").val(),
      currency: $("#currency-select").val(),
    };

    // do something with the form data
    console.log(formData);
  });
});
