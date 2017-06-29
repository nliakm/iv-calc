var table = document.querySelector('#table')
var selectedCells = table.getElementsByClassName('selected')

table.addEventListener('click', function(e) {
  var th = e.target
  var id = e.target.id

  if (th.tagName !== 'TH') {
    return
  }

  if(selectedCells.length == 1) {
    if(th.className == 'selected') {
      th.className = ''
    } else {
      th.className = 'selected'
      getInformation(selectedCells[0].id)
      getInformation(selectedCells[1].id)
    }
  }else if (selectedCells.length == 2) {
    if(th.className == 'selected') {
      th.className = ''
    } else {
      selectedCells[0].className = ''
      selectedCells[0].className = ''
      th.className = 'selected'
      getInformation(selectedCells[0].id)
    }
  } else {
    th.className = 'selected'
    getInformation(selectedCells[0].id)   
  }
})

function getInformation(e) {
  switch (e) {
    case 'def-normal':
      document.getElementById('att-kampf').className = 'effective'
      document.getElementById('att-geist').className = 'immun'
      break;
    case 'def-feuer':
      document.getElementById('att-feuer').className = 'noteffective'
      document.getElementById('att-pflanze').className = 'noteffective'
      document.getElementById('att-eis').className = 'noteffective'
      document.getElementById('att-boden').className = 'effective'
      document.getElementById('att-gestein').className = 'effective'
      break;
    default:
  }
}

function testJSON() {

}
