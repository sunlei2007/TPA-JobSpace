'use strict';



const rightDiv = document.querySelector(".site-content-right");
const cardDiv = document.querySelector(".cards-div-cls");


const url = "https://randomapi.com/api/9380ddaef6cfd819a21e287b19d18d34";
const options = {
    method: "GET",
    mode: "cors"
}

async function getUsers() {
    try {
        const result = await fetch(url, options);
        if (result.status >= 200 && result.status < 400) {
            const data = await result.json();
            const resultData = data.results;

            console.log(resultData[0].users);

            resultData[0].users.forEach(item => {
                const divItem = document.createElement("div");
                const imgAva = document.createElement("img");//Create avatar
                imgAva.classList.add("card-ava-cls-right");
                imgAva.src = item.ava;

                const divUserinfo = document.createElement("div");
                divUserinfo.classList.add("site-content-right-userinfo");

                const pName = document.createElement("p"); //Create Nickname
                pName.innerHTML = item.username;

                const pCareer = document.createElement("p"); //Create date
                pCareer.innerHTML = item.career;

                divUserinfo.appendChild(pName);
                divUserinfo.appendChild(pCareer);

                divItem.appendChild(imgAva);
                divItem.appendChild(divUserinfo);

                rightDiv.appendChild(divItem);

            });

            resultData[0].postdata.forEach(item => {
                
                createMsgCard(item);
            });



        }
    } catch (error) {
        console.log(error.message);
    }
} 

function createMsgCard(data) {

    //Create main div
    const divContainer = document.createElement("div");
    divContainer.classList.add("card-div-cls");

    //Create sub div header
    const divTitle = document.createElement("div");
    divTitle.classList.add("card-div-title-cls");

    const imgAva = document.createElement("img");//Create avatar
    imgAva.classList.add("card-ava-cls");
    imgAva.src = data.ava;

    const pNickName = document.createElement("p"); //Create Nickname
    pNickName.innerHTML = data.username;
    pNickName.classList.add("card-nickname-cls");

    const pCareer = document.createElement("p"); //Create Nickname
    pCareer.innerHTML = data.career;
    pCareer.classList.add("card-career-cls");

    const pTime = document.createElement("p"); //Create date
    pTime.innerHTML = data.time;
    pTime.classList.add("card-time-cls");

    const divSub = document.createElement("div");
    divSub.classList.add("card-div-title-sub-cls");
    divSub.appendChild(imgAva);

    const divUserinfo = document.createElement("div");
    divUserinfo.classList.add("card-userinfo-cls");
    divUserinfo.appendChild(pNickName);
    divUserinfo.appendChild(pCareer);

    divSub.appendChild(divUserinfo);

    divTitle.appendChild(divSub); //Add to divTitle
    divTitle.appendChild(pTime);

    divContainer.appendChild(divTitle);//Add to divContainer

    //Create content
    const pContent = document.createElement("p");
    pContent.innerHTML = data.desc;
    pContent.classList.add("card-content-cls");

    divContainer.appendChild(pContent);//Add to divContainer

   
    const imgContent = document.createElement("img");//Create avatar
    imgContent.classList.add("card-content-img-cls");
    imgContent.src = data.pic;
    divContainer.appendChild(imgContent);//Add to divContainer

    //Create share button
    const divShare = document.createElement("div");
    divShare.classList.add("card-div-title-sub-cls");

    const divThumb = document.createElement("div");
    divThumb.classList.add("card-div-bottom-cls");
    divThumb.innerHTML = "<i class='fa-regular fa-heart'></i><p style='margin-left:5px'>20</p>";

    const divComment = document.createElement("div");
    divComment.classList.add("card-div-bottom-cls");
    divComment.innerHTML = "<i class='fa-regular fa-comment'></i><p style='margin-left:5px'>20</p>";

    const divLink = document.createElement("div");
    divLink.classList.add("card-div-bottom-cls");
    divLink.innerHTML = "<i class='fa-regular fa-share-from-square'></i><p style='margin-left:5px'>Share</p>";

    divShare.appendChild(divThumb);
    divShare.appendChild(divComment);
    divShare.appendChild(divLink);
    
    

    divContainer.appendChild(divShare);

    cardDiv.appendChild(divContainer);



}

window.onload = function () {
    getUsers();
    
}


//let imgData;
//let subscriber;
//const monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "Jue", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//window.onload = function () {
//    subscriber = new Subscriber();
//    subscriber.id = "id2321";
//    subscriber.name = "Jones";
//    subscriber.userName = "Henry Jones";
//    subscriber.email = "Henry@gmail.com";

//    console.log(subscriber.getInfo());
//}
//avatar.onclick = function () {
//    pUserName.innerHTML = `Username: ${subscriber.getInfo().userName}`;
//    pEmail.innerHTML = `Email: ${subscriber.getInfo().email}`;
//    if (modalDiv.style.display === "none") {
//        modalDiv.style.display = "block";
//    }
//    else {
//        modalDiv.style.display = "none";
//    }
//}
//imgSel.onclick = function () {
//    inputSelimg.click();
//}
//inputSelimg.onchange = function () {
//    const file = this.files[0];
//    imgInfo.innerHTML = file.name.trim();
//    imgData = getObjectURL(file);

//}
//submit.onclick = function () {
//    if (textContent.value.trim() === "") {
//        alert("Please enter new content!");
//        return false;
//    }
//    const div = createMsgCard();
//    cardsDiv.appendChild(div);
//    return false;
//}
//function createMsgCard() {
//    console.log(subscriber.getInfo());
//    //Create main div
//    const divContainer = document.createElement("div");
//    divContainer.classList.add("card-div-cls");

//    //Create sub div header
//    const divTitle = document.createElement("div");
//    divTitle.classList.add("card-div-title-cls");
//    const imgAva = document.createElement("img");//Create avatar
//    imgAva.classList.add("card-ava-cls");
//    imgAva.src = avatar.src;
//    const pNickName = document.createElement("p"); //Create Nickname
//    pNickName.innerHTML = subscriber.getInfo().userName;
//    pNickName.classList.add("card-nickname-cls");
//    const pTime = document.createElement("p"); //Create date
//    pTime.innerHTML = `${monthArr[new Date().getMonth()]} ${new Date().getDate()}, ${new Date().getFullYear()}`;
//    pTime.classList.add("card-time-cls");
//    const divSub = document.createElement("div");
//    divSub.classList.add("card-div-title-sub-cls");
//    divSub.appendChild(imgAva);
//    divSub.appendChild(pNickName);
//    divTitle.appendChild(divSub); //Add to divTitle
//    divTitle.appendChild(pTime);

//    divContainer.appendChild(divTitle);//Add to divContainer

//    //Create content
//    const pContent = document.createElement("p");
//    pContent.innerHTML = textContent.value;
//    pContent.classList.add("card-content-cls");

//    divContainer.appendChild(pContent);//Add to divContainer

//    //Create img
//    if (imgData !== undefined) {
//        const imgContent = document.createElement("img");//Create avatar
//        imgContent.classList.add("card-content-img-cls");
//        imgContent.src = imgData;
//        divContainer.appendChild(imgContent);//Add to divContainer
//    }
//    return divContainer;

//}

//function getObjectURL(file) {

//    var url = null;


//    if (window.createObjectURL != undefined) { // basic

//        url = window.createObjectURL(file);

//    } else if (window.URL != undefined) { // mozilla(firefox)
//        url = window.URL.createObjectURL(file);

//    } else if (window.webkitURL != undefined) { // webkit or chrome

//        url = window.webkitURL.createObjectURL(file);

//    }

//    return url;

//}