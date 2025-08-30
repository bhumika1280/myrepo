document.addEventListener("DOMContentLoaded",function(){

    const searchButton = document.getElementById('search-button');
    const usernameInput = document.getElementById('user-input');
    const statsContainer = document.querySelector('.stats-container');
    const EasyProgressCircle = document.querySelector('.Easy-progress');
    const MediumProgressCircle = document.querySelector('.Medium-progress');
    const HardtProgressCircle = document.querySelector('.Hard-progress')
    const EasyLabel = document.getElementById('Easy-Label');
    const MediumLabel = document.getElementById('Medium-Label');
    const HardLabel = document.getElementById('Hard-Label');
    const cardStatsContainer = document.querySelector('.stats-cards');
    
     function validateUsername(username) {
        if(username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching) {
            alert("Invalid Username");
        }
        return isMatching;
    }
    
    async function fetchUserDetail(username) {

        
        try{
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            //statsContainer.classList.add("hidden");

            // const response = await fetch(url);
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/' 
            const targetUrl = 'https://leetcode.com/graphql/';
            
            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: "\n    query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    Hard\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n       Hard\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        Hard\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: { "username": `${username}` }
            })
            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
            };

            const response = await fetch(proxyUrl+targetUrl, requestOptions);
            if(!response.ok) {
                throw new Error("Unable to fetch the User details");
            }
            const parsedData = await response.json();
            console.log("Logging data: ", parsedData) ;

            displayUserData(parsedData);
        }
        catch(error) {
            statsContainer.innerHTML = `<p>${error.message}</p>`
        }
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    function updateProgress(solved,total,label,circle){
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }

    function  displayUserData(parsedData){
        const totalQues = parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues = parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues = parsedData.data.allQuestionsCount[2].count;
        const totalHardQues = parsedData.data.allQuestionsCount[3].count;

        const solvedTotalQues = parsedData.data.matchedUser.submitstats.acSubmissionNum[0].count;
        const solvedTotalEasyQues = parsedData.data.matchedUser.submitstats.acSubmissionNum[0].count;
        const solvedTotalMediumQues = parsedData.data.matchedUser.submitstats.acSubmissionNum[0].count;
        const solvedTotalHardQues = parsedData.data.matchedUser.submitstats.acSubmissionNum[0].count;

        updateProgress(solvedTotalEasyQues,totalEasyQues,EasyLabel,EasyProgressCircle)
        updateProgress(solvedTotalMediumQues,totalMediumQues,MediumLabel,MediumProgressCircle)
        updateProgress(solvedTotalHardQues,totalHardQues,HardLabel,HardtProgressCircle )


        const cardsData = [
            {label: "Overall Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions },
            {label: "Overall Easy Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions },
            {label: "Overall Medium Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions },
            {label: "Overall Hard Submissions", value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions },
        ];

        console.log("card ka data: " , cardsData);
        
        cardStatsContainer.innerHTML = cardsData.map(
            data => 
                    `<div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                    </div>`
        ).join("")
    }

    searchButton.addEventListener('click',function(){
        const username =usernameInput.value.trim();
        console.log("logging username: " ,username)
        if (validateUsername(username)) {
            fetchUserDetail(username)
        }
    })

})  

