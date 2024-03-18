let tableTest = [
    {
        index: 0,
        ruleName: "Washington",
        objectName: "Saudi Arabia",
        about: "Mollit fugiat non pariatur",
        latitude: -24.696905,
        longitude: -149.926721
      },
      {
        index: 1,
        ruleName: "Seattle",
        objectName: "Saudi Arabia",
        about: "Mollit fugiat non pariatur",
        latitude: -24.696905,
        longitude: -149.926721
      },
      {
        index: 2,
        ruleName: "Vermont",
        objectName: "Saudi Arabia",
        about: "Mollit fugiat non pariatur",
        latitude: -24.696905,
        longitude: -149.926721
      }
]

function tableTestRowItem(el){
    let tempArray = [];
     for (const [key, value] of Object.entries(el)){
        tempArray.push(`<div>${value}</div>`);
     }
     return `<div class="table-test-row">${tempArray.join("")}</div>`;
}

// $('#tableTest').append(tableTest.map(tableTestRowItem));