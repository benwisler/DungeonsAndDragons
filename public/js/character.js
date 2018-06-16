$(document).ready(function () {

    var charContainer = $(".character-container");
    var characterSelect = $("#category");


    $(document).on("click", "button.delete", handleCharacterDelete);
    $(document).on("click", "button.edit", handleCharacterSave);

    var characters;
    var url = window.location.search;
    var characterId;

    if (url.indexOf("?character_id") !== -1) {
        characterId = url.split("=")[1];
        getCharacters(characterId);
    } else {
        getCharacters();
    }

    function getCharacters(character) {
        characterId = character || "";
        if (characterId) {
            characterId = "/?character_id=" + characterId;
        }
        $.get("/api/characters" + characterId, function (data) {
            console.log("Characters", data);
            characters = data;
            if (!characters || !characters.length) {
                displayEmpty(character);
            } else {
                initializeRows();
            }
        });
    }

    function deleteCharacter(id) {
        $.ajax({
                method: "DELETE",
                url: "/api/characters/" + id
            })
            .then(function () {
                getCharacters(characterSelect.val());
            });
    }

    function initializeRows() {
        charContainer.empty();
        var charactersToAdd = [];
        for (var i = 0; i < characters.length; i++) {
            charactersToAdd.push(createNewRow(characters[i]));
        }
        charContainer.append(charactersToAdd);
    }

    // construct a character's HTML
    function createNewRow(character) {
        var race = $("<div>");
        race.addClass("race");
        var prof = $("<div>");
        prof.addClass("prof");
        var hp = $("<div>");
        hp.addClass("hp");
        var ability = $("<div>");
        ability.addClass("ability");
        var strength = $("<div>");
        strength.addClass("strength");
        var dexterity = $("<div>");
        dexterity.addClass("dexterity");
        var constitution = $("<div>");
        constitution.addClass("constitution");
        var intelligence = $("<div>");
        intelligence.addClass("intelligence");
        var wisdom = $("<div>");
        wisdom.addClass("wisdom");
        var charisma = $("<div>");
        charisma.addClass("charisma");
        var proficiencies = $("<div>");
        proficiencies.addClass("proficiencies");
        var equipment = $("<div>");
        equipment.addClass("equipment");

        var saveBtn = $("<button>");
        saveBtn.text("SAVE");
        saveBtn.addClass("save");

        var deleteBtn = $("<button>");
        deleteBtn.text("x");
        deleteBtn.addClass("delete");
    }

    function handleCharacterDelete() {
        var currentCharacter = $(this)
            .parent()
            .parent()
            .data("post");
        deleteCharacter(currentCharacter.id);
    }

    function handleCharacterSave() {
        var currentPost = $(this)
            .parent()
            .parent()
            .data("post");
        window.location.href = "/cms?character_id=" + currentCharacter.id;
    }

    
});