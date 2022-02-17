
$().ready(function(){
  let json = {
    date: "2022-01-01",
    data: [
      {
        "id": 1,
        "item": "Accidency",
        "stage": [{
          "num": 59,
          "score": false,
          "process": "Id amet excepteur ad quis id occaecat enim quis sit ex."
        },
        {
          "num": 62,
          "score": true,
          "process": "Adipisicing ipsum officia anim aliqua velit minim."
        },
        {
          "num": 55,
          "score": true,
          "process": "Eiusmod enim irure non ut sunt commodo consectetur dolore nostrud culpa irure."
        }]
      },
      {
        "id": 2,
        "item": "Comtrek",
        "stage": [{
          "num": 64,
          "score": true,
          "process": "Nisi enim elit cillum labore pariatur tempor ad."
        },
        {
          "num": 52,
          "score": false,
          "process": "Officia reprehenderit qui magna exercitation amet pariatur duis aliquip irure mollit tempor aliquip adipisicing ut."
        },
        {
          "num": 59,
          "score": false,
          "process": "Qui do et mollit amet adipisicing tempor dolore id est amet velit."
        }]
      },
      {
        "id": 3,
        "item": "Eyeris",
        "stage": [{
          "num": 82,
          "score": true,
          "process": "Ipsum consequat Lorem anim nostrud consectetur enim eu ea sunt dolor."
        },
        {
          "num": 51,
          "score": false,
          "process": "Nisi commodo ex fugiat sint."
        },
        {
          "num": 99,
          "score": false,
          "process": "Tempor qui esse cillum velit elit nulla dolore aliquip."
        }]
      },
      {
        "id": 4,
        "item": "Mantrix",
        "stage": [{
          "num": 82,
          "score": true,
          "process": "Voluptate esse cillum cillum laborum culpa veniam occaecat amet eu sit aliqua."
        },
        {
          "num": 89,
          "score": false,
          "process": "In labore velit veniam laboris."
        },
        {
          "num": 96,
          "score": false,
          "process": "Amet nisi eiusmod aute quis et."
        }]
      },
      {
        "id": 5,
        "item": "Klugger",
        "stage": [{
          "num": 79,
          "score": false,
          "process": "Cillum est ullamco est proident elit adipisicing id incididunt."
        },
        {
          "num": 90,
          "score": true,
          "process": "Enim amet aute laborum nisi anim laborum commodo proident ipsum ut dolore."
        },
        {
          "num": 53,
          "score": true,
          "process": "Dolore nulla sint incididunt commodo aliquip in occaecat officia."
        }]
      }
    ],
    signSupervisor: "Enna",
    signRecorder: "Bob"
  };
  // console.log(json['data'][0]['stage'][1])
  var tableData = json['data'];

  let putData = function() {
    let tableArr = [];
    for (let index=0; index<tableData.length; ++index) {
      //checkbox
      let stageArr = [];
      let stage = tableData[index]['stage'];
      for (let j=0; j<stage.length; j++) {
        let checked = "";
        if (stage[j]['score']) {
          checked = `
            <p>合格<input type="checkbox" name="pass" checked></p>
            <p>不合格<input type="checkbox" name="fail"></p>
            <p>原因</p>
          `;
        } else { checked = `
            <p>合格<input type="checkbox" name="pass"></p>
            <p>不合格<input type="checkbox" name="fail" checked></p>
            <p>原因</p>
          `;
        };
        
        let checkbox = `<td class="left-table" style="width:63px">${checked}</td>`;
        let stageTable = `
          <td class="num">數量<p>${stage[j]['num']}</p></td>
          ${checkbox}
          <td class="process">${stage[j]['process']}</td>
        `;
        stageArr.push(stageTable)
      };
      
      // push all table row
      let tableRow =`
      <tr>
        <td class="item"><p>${tableData[index]['item']}</p></td>
        ${stageArr}
      </tr>
      `;
      tableArr.push(tableRow)
    }

    // date
    let date = json['date'].split('-');
    date = `${date[0]} 年 ${date[1]} 月 ${date[2]} 日`;

    // innerHTML
    $(".date").html(date);
    $(".sign").html(`
      <span class="supervisor">主管: ${json['signSupervisor']}</span>
      <span class="recorder">記錄者: ${json['signRecorder']}</span>
      <span class="version">Rev.1.0</span>
    `);
    $("tbody").html(tableArr);
  };
  putData()
})