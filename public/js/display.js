$(document).ready(function() {

    $(document).on("click", "#showAll", getCharacter);
    var characterList = $("tbody");
    var authorContainer = $(".author-container");

    getCharacter();

    
    function getCharacter() {
      $.get("/api/displayCharacters", function(data) {
        fillData(data);
      });
    }
    // <div class="race">Race: </div>
    // <div class="prof">Class: </div>
    // <div class="hp">HP: </div>
    // <div class="ability">
    //     <div class="strength">STR</div>
    //     <div class="dexterity">DEX</div>
    //     <div class="constitution">CON</div>
    //     <div class="intelligence">INT</div>
    //     <div class="wisdom">WIS</div>
    //     <div class="charisma">CHA</div>
    //     characterHP: hp,
    //   characterGender: currentGender,
    //   characterRace: currentRace.name,
    //   characterSR: currentSR,
    //   characterJob: currentJob,
    //   characterAttr: combAttr,
    //   characterProf: charProf
  function fillData(data) {
      $(".race").text(data.characterRace);
      $(".prof").text(data.characterProf);
      $(".hp").text(data.characterHP);
      
  }

  
  

  });
  