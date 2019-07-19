
$(document).ready(function () {
    const todo = new Todo(['qqq', 'www','eee']);
    $('.buttonADD').on('click', () => todo.buttonHandler());
    $('.colors').click(function() {
        $('.colors').removeClass('active')
        $(this).toggleClass('active')
        

    });
    
});
class Todo {
    constructor(list) {
        this.input = $('#orig');
        this.list = list;
        this.isChaging = false;
        this.cangingLi = '';
        
    }
    addNewItem() {
        const container = $('.container');
        const value = this.input.val();
        console.log (value, 'value')


        const color = this.getColorClass()
        const idd = Math.random()*1e17
        container.append(`
            <li id=${idd}> 
                <input type="checkbox" id="checkbox" checked> 
                <p class="text ${color}">${value}</p>
                <input type="button" class="del" value="X">
                <input type="button" class="change" value="Change"
            </li>
        `)

        document.getElementById("orig").value = ""

        $('.del').on('click', (event) => this.deleteItem(event));
        $('.change').on('click', (event) => this.changeButtonHandler(event));
    }

    getColorClass() {
        switch($('.active').attr('class')){
            case 'colors A active': return 'A';break;
            case 'colors B active': return 'B';break;
            case 'colors C active': return 'C';break;
            case 'colors D active': return 'D';break;
            case 'colors E active': return 'E';break;
            case 'colors F active': return 'F';break;
        }
        
    }

    buttonHandler() {
        if (this.isChaging) {
            this.changeItem()
        } else {
            this.addNewItem()
        }
    }

    changeButtonHandler(){
        this.isChaging = true;
        const currentLi = $(event.target).parent()
        const value = currentLi.find('.text').text()
        this.cangingLi = currentLi;
        this.input.val(value);
    }
    changeItem() {
        
        console.log( this.input.val(), 'значение')
        console.log(  this.cangingLi, 'поле')
        $("#orig").focus();
        $("#orig").get(0).setSelectionRange(0,0);
        const changeText= this.input.val()
        console.log(changeText)
        this.cangingLi.find('.text').text(changeText)
        document.getElementById("orig").value = ""
        this.isChaging= false
        
    }

    
     deleteItem(event){
        console.log('delete', event)
        const id = $(event.target).parent().attr('id')
        $(`#${id}`).remove();
    }
   usingColor()
   {
    this.cangingLi.find('.text').text()

   } 
   
}
 