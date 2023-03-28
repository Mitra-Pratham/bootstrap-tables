let textArray = [];
// let tableData = [
//     {
//         id: 1,
//         name: 'Item 1',
//         price: '$1'
//     }, {
//         id: 2,
//         name: 'Item 2',
//         price: '$2'
//     }
// ]

function updateBox(e,val){
    $('#box p').empty();
    $('#box p').append(getText(val));
    $(`.row-border`).removeClass('row-border');
    $($(e).parent('td').parent('tr')).addClass('row-border');
}

function getText(val){
    return textArray[val].about;
}

function operateFormatter(value, row, index) {
    textArray.push(row);
    return [
      `<button class="btn btn-primary btn-sm" onClick="updateBox(this,${row.index})" title="View Details">`,
      'View Details',
      '</button>  ',
    ].join('')
  }

  function textFormatter(value, row, index) {
    return `${value.substr(0,100)}...`
  }


$('#table').bootstrapTable({
    // data: tableData,
    url: "js/generated.json",
    pagination: true,
    showFooter: true,
    classes: 'table table-bordered table-hover table-striped table-sm',
    showRefresh: true,
    showToggle: true,
    showFullscreen: true,
    showColumns: true,
    showColumnsToggleAll: true,
    // detailView: true,
    showExport: true,
    // clickToSelect: true,
    search: true,
    columns: [
        {
            field: 'state',
            checkbox: true,
            align: 'center',
            valign: 'middle'
        },
        {
            field: 'ruleName',
            title: 'Rule',
            width: '10',
            widthUnit: 'vw'
        }, {
            field: 'objectName',
            title: 'Object',
            width: '10',
            widthUnit: 'vw'
        }, {
            field: 'about',
            title: 'Description',
            width: '30',
            widthUnit: 'vw',
            formatter: textFormatter
        },
        {
            field: 'registered',
            title: 'Date',
            width: '10',
            widthUnit: 'vw'
        },
        {
            field: 'operate',
            title: 'Item Operate',
            align: 'center',
            // clickToSelect: false,
            // events: window.operateEvents,
            formatter: operateFormatter
          }
    ]
})