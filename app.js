let search = document.querySelector('.search-data')

search.addEventListener('keyup', searchData);

function searchData(){

    var input , filter , containerWrapper , parentData , value , childData , i , textValue

    input    = document.getElementById('myInput')
    filter   = input.value.toUpperCase()

    containerWrapper = document.getElementById('dataCollection');
    parentData = containerWrapper.getElementsByClassName('card-body')
  
    for(i=0; i<parentData.length; i++){
        value = parentData[i].textContent

        if(value.toUpperCase().indexOf(filter) > -1 ){
            parentData[i].style.display = ''
        }else{
            parentData[i].style.display = 'none'
        }
    }
    


}