
$(document).ready(function () {
    const stodo = JSON.parse(localStorage.getItem('stodo'));
    const todo = new Todo(stodo ? stodo : []);
    $('.buttonADD').on('click', () => todo.buttonHandler());
    $('.colors').click(function() {
        $('.colors').removeClass('active')
        $(this).toggleClass('active')
        
    });
    todo.init();
   
});
class Todo {
    constructor(list) {
        this.input = $('#orig');
        this.list = list;
        this.isChaging = false;
        this.cangingLi = '';
        
    }

    init(){
        console.log(this.list)
        if(this.list.length > 0){
            for(var i=0;i<(this.list.length);i++){
                let checkedd;
                if (this.list[i].checked == true){
                    checkedd = "checked"
                } else {
                    checkedd = " "
                }
                const container = $('.container');
                const value = this.list[i].text;
                const color = this.list[i].color
                const idd = this.list[i].id

                container.append(`
                    <li class="asdasd ${color}" id=${idd}> 
                        <input type="checkbox" class="checkbox " ${checkedd}> 
                        <p  class="text">${value}</p>
                            <input type="button" class="del" value="X">
                            <input type="button" class="change" value="&#8634"
                        
                    </li>
                `)

                $('.del').on('click', (event) => this.deleteItem(event));
                $('.change').on('click', (event) => this.changeButtonHandler(event));
                $('.checkbox').on('click', (event) => this.MadeItem(event));
                
             
            } 
        }
    }
            
    addNewItem() {
        
        const container = $('.container');
        const value = this.input.val();
        const color = this.getColorClass()
        const idd = Math.random()*1e17
        container.append(`
            <li class="asdasd ${color}" id=${idd}> 
                <input type="checkbox" class="checkbox" > 
                <p  class="text">${value}</p>
                    <input type="button" class="del" value="X">
                    <input type="button" class="change" value="&#8634"
                
            </li>
        `)
        
        this.list.push({text:value,checked:false,color:color,id:idd}) 
        localStorage.setItem('stodo',JSON.stringify(this.list));
        
                
        document.getElementById("orig").value = ""

       
        
        $('.del').on('click', (event) => this.deleteItem(event));
        $('.change').on('click', (event) => this.changeButtonHandler(event));
        $('.checkbox').on('click', (event) => this.MadeItem(event));
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
    
    MadeItem(event){
        const currentLi = $(event.target).parent()
        if (currentLi.find('.checkbox').is(':checked')){
            currentLi.find(".text").css('text-decoration', 'line-through')
        }
        else{
            currentLi.find(".text").css('text-decoration', 'none')
        }  
        
       
    }
    changeButtonHandler(){ 
        
        this.getColorClass();
        this.isChaging = true;
        const currentLi = $(event.target).parent()
        const value = currentLi.find('.text').text()
        this.cangingLi = currentLi;
        this.input.val(value);
                        
     }
    changeItem() {
        $("#orig").focus();
        $("#orig").get(0).setSelectionRange(0,0);
        
        const DifColor = this.getColorClass()
        this.cangingLi.attr("class",'asdasd ' + DifColor)
        const changeText= this.input.val()
        
        this.cangingLi.find('.text').text(changeText)
        document.getElementById("orig").value = ""
        this.isChaging= false

        
    }

    
    deleteItem(event){
        const id = $(event.target).parent().attr('id')   
        $(`#${id}`).remove(); 
        // this.list.array.forEach('id' => {
        //  localStorage.removeItem('id')
        // });
            
    
        
    }
        } 