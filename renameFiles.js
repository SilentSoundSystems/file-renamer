function showname(){
    var  file = document.form1.uploadBox.value;
    console.log(`Original filename: ${file}!`);
    let newFileName = file.toLocaleLowerCase();
    console.log(newFileName);
    let pattern = 'c:\\'+'fakepath'+'\\'
    newFileName = newFileName.replace(pattern, '');
    console.log(newFileName);
    let fileRestriction = /([^a-z0-9._-])/g
    let consecutiveHyphens = /(-{2,})/g
    let consecutiveUnderscores = /(_{2,})/g
    let consecutivePeriods = /(\.{2,})/g
    newFileName = newFileName.trim();
    newFileName = newFileName.replaceAll(' ', '-');
    newFileName = newFileName.replaceAll(fileRestriction, '');
    newFileName = newFileName.replaceAll(consecutiveHyphens, '-');
    newFileName = newFileName.replaceAll(consecutiveUnderscores, '_');
    newFileName = newFileName.replaceAll(consecutivePeriods, '.');
    document.getElementById("amendedFileNames").innerHTML += "<p>"+newFileName +"</p>";
}