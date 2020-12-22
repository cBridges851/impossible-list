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
                const spanElement = document.createElement("span");
                spanElement.innerText = goal;

                listElement.appendChild(spanElement);

                if (jsonResponse[category][goal][0]) {
                    spanElement.style.textDecoration = "line-through";
                    listElement.innerHTML += ` - ${jsonResponse[category][goal][1]}`
                }

                unorderedList.appendChild(listElement);
            }

            mainElement.appendChild(unorderedList);
        }
    });     