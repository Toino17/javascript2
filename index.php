<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form id="#form1">
        <input type="text" id="inputmdp">
        <button class="buttonmdp">Afficher mon mot de passe</button>
        <input type="checkbox" id="maj" name="maj"><label for="maj">1 Majuscule</label>
        <input type="checkbox" name="carac"><label for="carac">1 C.Special</label>
        <input type="checkbox" name="chiffre"><label for="chiffre">1 Chiffre</label>
        <input type="range" name="powerRanger" min="8" max="12" id="ranger"><label for="powerRanger" id="labelRanger">text</label>
    </form>
    <script src="script.js"></script>
</body>
</html>