fetch('./static/scripts/list-contents.json')
    .then(response => response.json())
    .then(jsonResponse => {
        const allCategories = Object.keys(jsonResponse);

        for (let category of allCategories) {
            const mainElement = document.querySelector("main");
            const heading = document.createElement("h2");
            heading.innerText = category;
            mainElement.appendChild(heading);
            const unorderedList = document.createElement("ul");
            const currentObject = Object.keys(jsonResponse[category]);

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