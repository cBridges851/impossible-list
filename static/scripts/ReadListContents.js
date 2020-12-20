fetch('./static/scripts/list-contents.json')
    .then(response => response.json())
    .then(jsonResponse => {
        const allCategories = Object.keys(jsonResponse);

        for (let category of allCategories) {
            const mainElement = document.querySelector("main");
            const heading = document.createElement("h3");
            heading.innerText = category;
            mainElement.appendChild(heading);
            const unorderedList = document.createElement("ul");
            const currentObject = Object.keys(jsonResponse[category]);

            if (category === "Current Focus") {
                const paragraph = document.createElement("p");
                paragraph.innerText = "These are the goals that my focus is aligned to. With that in mind,\
                I would still be open to new opportunities (but not relating to a new job, no way am I leaving!).";
                mainElement.appendChild(paragraph);
            } 

            for (let goal of currentObject) {
                const listElement = document.createElement("li");
                listElement.innerText = goal;

                if (jsonResponse[category][goal]) {
                    listElement.style.textDecoration = "line-through";
                }

                unorderedList.appendChild(listElement);
            }

            mainElement.appendChild(unorderedList);
        }
    })     