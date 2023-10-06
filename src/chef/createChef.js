
function addChef() {
    const name = document.getElementById("name");
    const lastName = document.getElementById("lastName");
    const age = document.getElementById("age").value;
    const phoneNumber = document.getElementById("phoneNumber");
    const experience = document.getElementById("experience");
    const area = document.getElementById("area");
    const cv = document.getElementById("cv");
    const job1 = document.getElementById("job1").alue;
    const job2 = document.getElementById("job2");
    const job3 = document.getElementById("job3");

    const newChef = new Chef({
        name: name,
        lastName:lastName,
        age: age,
        phoneNumber: phoneNumber,
        experience: experience,
        area: area,
        cv: cv,
        lastJobs: [job1,job2,job3],
    });

    

    let chefs = JSON.parse(localStorage.get('chefs')) || [];
    chefs.push(newChef);
    localStorage.setItem('chefs', JSON.stringify(chefs));



    
    let chefs2 = JSON.parse(localStorage.getItem('chefs'));
    alert("Chef added successfully!");
    console.log(chefs2);
}



