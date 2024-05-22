import generatedJson from "/js/generated.json" assert { type: "json" };
// var generatedJson = require('js/generated.json')
let textArray = [];
let tableData = [
  {
    "_id": "64230dca921fad493e72f3df",
    "index": 0,
    "ruleName": "Washington",
    "objectName": "Saudi Arabia",
    "about": "Mollit fugiat non pariatur sint mollit aliquip occaecat exercitation est. Ad pariatur anim enim magna ipsum fugiat velit eu velit cillum pariatur ea non mollit. Nisi nostrud laborum officia dolor cillum anim sit amet voluptate proident. Id aliquip laboris reprehenderit consequat amet do veniam.\r\n",
    "registered": "2018-02-02T05:15:21 -06:-30",
    "latitude": -24.696905,
    "longitude": -149.926721,
    "currency":'$200',
  },
  {
    "_id": "64230dca0c179f49c455a12e",
    "index": 1,
    "ruleName": "Oregon",
    "objectName": "Mauritius",
    "about": "In non veniam est veniam amet. Velit culpa quis dolor eu irure enim Lorem ipsum. In mollit minim laboris quis irure et. Nulla culpa qui cupidatat eu reprehenderit officia. Ipsum culpa proident non irure consequat incididunt et quis Lorem excepteur anim.\r\n",
    "registered": "2022-02-25T06:54:51 -06:-30",
    "latitude": 8.587477,
    "longitude": -64.05818,
    "currency":'$200',
  },
  {
    "_id": "64230dcab162c8b99c778976",
    "index": 2,
    "ruleName": "Arkansas",
    "objectName": "Macedonia",
    "about": "Tempor esse sunt incididunt irure proident irure nulla id eu. Eu commodo ad et eiusmod sunt magna. Officia est est do in dolor occaecat culpa mollit nisi esse dolor non deserunt enim. Duis ex nulla commodo ea et culpa occaecat duis. Irure pariatur anim dolore est officia. Qui fugiat dolor commodo id eu consequat anim laboris aliqua laboris. Commodo et irure officia et cupidatat dolore sint aliquip eiusmod irure.\r\n",
    "registered": "2021-04-02T01:17:17 -06:-30",
    "latitude": -33.760343,
    "longitude": 86.248951,
    "currency":'$200',
  },
  {
    "_id": "64230dca0caf53915954d8f7",
    "index": 3,
    "ruleName": "Alabama",
    "objectName": "Venezuela",
    "about": "Consequat aliqua commodo incididunt magna do exercitation sit aliquip laborum consectetur officia reprehenderit esse velit. Dolor laboris ullamco sit minim mollit anim elit mollit mollit nostrud exercitation laboris ad. Sunt anim ad do laborum officia et commodo proident ex ipsum tempor. Mollit qui ad minim occaecat reprehenderit id aute.\r\n",
    "registered": "2019-12-31T11:32:42 -06:-30",
    "latitude": -52.469255,
    "longitude": 111.308943,
    "currency":'$200',
  },
  {
    "_id": "64230dca0b13bd717563e8e7",
    "index": 4,
    "ruleName": "Colorado",
    "objectName": "Czech Republic",
    "about": "Id enim laboris officia eiusmod quis ipsum sint aliquip cupidatat laborum tempor. Adipisicing id ut voluptate esse est minim eu. Consectetur do excepteur enim ipsum nulla ut excepteur velit pariatur. Voluptate pariatur duis do aute ex aliquip magna laborum occaecat enim in. Esse Lorem nostrud velit ipsum velit eu nostrud. Voluptate nostrud ea eiusmod consectetur laborum mollit consectetur.\r\n",
    "registered": "2022-11-12T06:12:15 -06:-30",
    "latitude": -54.960612,
    "longitude": -100.903203,
    "currency":'$200',
  },
  {
    "_id": "64230dca9b751bdc5c6b98ef",
    "index": 5,
    "ruleName": "Nebraska",
    "objectName": "Yugoslavia",
    "about": "Incididunt cillum cillum ullamco aliquip adipisicing eiusmod ut tempor voluptate irure adipisicing do. Deserunt pariatur ex cillum irure esse cillum fugiat. Reprehenderit ex consequat est amet et reprehenderit dolore. Ipsum et occaecat incididunt voluptate veniam occaecat est sint labore sunt est laboris cillum ea. Lorem amet sint do enim non labore reprehenderit ullamco nisi nostrud et laboris et. Duis consequat velit culpa laborum commodo labore magna aliqua culpa anim voluptate.\r\n",
    "registered": "2017-03-12T12:29:12 -06:-30",
    "latitude": 28.315653,
    "longitude": -57.32629,
    "currency":'$200',
  },
  {
    "_id": "64230dca15412c6ae8e73cb2",
    "index": 6,
    "ruleName": "Kentucky",
    "objectName": "Niue",
    "about": "Tempor cupidatat cupidatat velit ullamco consectetur laborum elit. Aliquip deserunt nostrud qui culpa mollit ea dolore est esse excepteur. Ullamco ut eiusmod ullamco irure esse labore cupidatat ea aliquip sunt proident sunt velit. Labore exercitation id do non sunt cillum enim aliqua aute officia labore occaecat.\r\n",
    "registered": "2019-04-22T12:03:37 -06:-30",
    "latitude": -71.031284,
    "longitude": 43.195242,
    "currency":'$200',
  },
  {
    "_id": "64230dca3559355f0fb2e88e",
    "index": 7,
    "ruleName": "Montana",
    "objectName": "Singapore",
    "about": "Laborum cupidatat id ullamco ea cillum mollit culpa eu. Veniam laborum consequat aliquip cillum ex esse sit dolor. Ipsum consequat consectetur quis eu dolor do reprehenderit qui duis officia.\r\n",
    "registered": "2014-05-24T02:50:23 -06:-30",
    "latitude": -49.098074,
    "longitude": -98.797345,
    "currency":'$200',
  },
  {
    "_id": "64230dcacbace4e3d76ce49e",
    "index": 8,
    "ruleName": "Palau",
    "objectName": "Virgin Islands (US)",
    "about": "Nostrud laboris labore tempor aliquip dolor amet culpa enim consequat ullamco tempor. Occaecat ad esse veniam tempor quis pariatur reprehenderit quis aute minim velit esse. Quis esse consequat cupidatat qui pariatur occaecat. Minim cupidatat do amet ullamco nisi consectetur cillum. Aute ad magna pariatur ullamco aliqua do ea sunt aliqua.\r\n",
    "registered": "2017-01-01T08:20:02 -06:-30",
    "latitude": 14.724851,
    "longitude": 47.809084,
    "currency":'$200',
  },
  {
    "_id": "64230dcab8d519d0315fc32b",
    "index": 9,
    "ruleName": "Illinois",
    "objectName": "Zambia",
    "about": "Laborum laboris laboris non id consectetur officia labore nulla. Voluptate proident eiusmod irure tempor. Ullamco deserunt enim occaecat minim consectetur enim quis qui duis officia.\r\n",
    "registered": "2022-04-20T11:23:03 -06:-30",
    "latitude": -82.964564,
    "longitude": -178.191209,
    "currency":'$200',
  },
  {
    "_id": "64230dca962b583c3bb47805",
    "index": 10,
    "ruleName": "Oklahoma",
    "objectName": "Malawi",
    "about": "Ullamco laboris veniam magna mollit culpa consequat ad reprehenderit exercitation sunt aute sint. Proident ex excepteur officia tempor quis. Tempor cupidatat sint officia officia.\r\n",
    "registered": "2014-11-21T08:00:47 -06:-30",
    "latitude": 88.746704,
    "longitude": -177.519627,
    "currency":'$200',
  },
]

function updateBox(e, val) {
  $('#box h3').empty();
  $('#box h3').append(getTitle(val));
  $('#box p').empty();
  $('#box p').append(getText(val));
  $(`.row-border`).removeClass('row-border');
  $($(e).parent('td').parent('tr')).addClass('row-border');
}

function getTitle(val) {
  let tempArray = textArray.find((item) => {
    return item._id === val ? item : '';
  });
  return tempArray.ruleName;
}

function getText(val) {
  let tempArray = textArray.find((item) => {
    return item._id === val ? item : '';
  });
  return tempArray.about;
}

function operateFormatter(value, row, index) {
  textArray.push(row);
  return [
    `<button class="btn btn-primary btn-sm" onClick="updateBox(this,'${row._id}')" title="View Details">`,
    'View Details',
    '</button>  ',
  ].join('')
}

function textFormatter(value, row, index) {
  return `${value.substr(0,100)}...`
  return `${value}`

}

function linkFormatter(value, row, index) {
  return `<a class="new-anchor" href="#">${value}</a>`
}

function rowAttributesFunc(row,index){
  return {"for":row.ruleName}
}

function dateFormatter(value,row,index){
  return `${value.substr(0,10)}`
}

$('#check-all').on('click', function(){
  for (let index = 0; index < generatedJson.length; index++) {
    $('#table').bootstrapTable('check',index);
  }
})

$('#table').bootstrapTable({
  data: generatedJson,
  // url: "js/generated.json",
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
  clickToSelect: true,
  // showPaginationSwitch: true,
  search: true,
  searchHighlight: true,
  // exportDataType: $(this).val(),
  sidePagination: 'client',
  maintainMetaData:true,
  rowAttributes: rowAttributesFunc,
  idField:'ruleName',
  selectItemName: 'ruleName',
  exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel', 'pdf'],
  exportOptions: {
    jspdf: {
      orientation: "l",
      autotable: {
        styles: { overflow: 'linebreak' },
        headerStyles: { fillColor: 255, textColor: 0 },
        alternateRowStyles: { fillColor: 210, textColor: 0 }
      }
    }
  },
  columns: [
    {
      field: 'state',
      checkbox: true,
      align: 'center',
      valign: 'middle',
    },
    {
      field: 'ruleName',
      title: 'Rule',
      width: '10',
      widthUnit: 'vw',
      formatter: linkFormatter,
    }, {
      field: 'objectName',
      title: 'Object',
      width: '10',
      widthUnit: 'vw',
      formatter: linkFormatter,
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
      widthUnit: 'vw',
      formatter: dateFormatter,
    },
    // {
    //   field: 'currency',
    //   title: 'Currency',
    //   width: '10',
    //   widthUnit: 'vw',
    // },
    {
      field: 'operate',
      title: 'Item Operate',
      align: 'center',
      // clickToSelect: false,
      // events: window.operateEvents,
      formatter: operateFormatter
    }
  ]
});

// $('#table').on('check.bs.table uncheck.bs.table ' +
//   'check-all.bs.table uncheck-all.bs.table',
//   function () {
//     $('#remove').prop('disabled', !$('#table').bootstrapTable('getSelections').length)

//     // save your data, here just save the current page
//     selections = getIdSelections()
//     // push or splice the selections if you want to save all data selections
//   });

// $('#table').on('all.bs.table', function (e, name, args) {
//   console.log(name, args)
// });

// $('#remove').click(function () {
//   var ids = getIdSelections()
//   $('#table').bootstrapTable('remove', {
//     field: 'id',
//     values: ids
//   })
//   $('#remove').prop('disabled', true)
// });

// var selections = []

// function getIdSelections() {
//   return $.map($('#table').bootstrapTable('getSelections'), function (row) {
//     return row.id
//   })
// }


