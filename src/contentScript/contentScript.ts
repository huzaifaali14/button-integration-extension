if (document.getElementsByClassName("gh-header-actions")[0]) {
  var button = document.createElement("button");
  button.innerHTML = "Hello CDM-BASE";
  button.id = "cdmBase";
  button.type = "button";

  //styling
  button.style.marginLeft = "10px";
  button.style.backgroundColor = "lightcoral";
  button.style.border = "none";
  button.style.height = "28px";
  button.style.padding = "0px 10px";
  button.style.color = "white";
  button.style.borderRadius = "3px";


  document.getElementsByClassName("gh-header-actions")[0].appendChild(button);

  var theButton = document.getElementById('cdmBase');
  theButton.addEventListener('click', function () {
    const issueName = document.getElementsByClassName('js-issue-title')[0] as HTMLDivElement;
    const issueNo = document.getElementsByClassName("f1-light color-text-tertiary")[0] as HTMLDivElement;
    window.alert(`${issueName.innerText} - ${issueNo.innerText}`)
    console.log("___________________ISSUE_NAME__________________");
    console.log(issueName.innerText);
    console.log("___________________ISSUE_NO_____________________")
    console.log(issueNo.innerText)

  });
}