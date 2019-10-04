

var Calci=function Calculator()
{
    var operand1='';
    var operand2='';
    var operator='';

    var calciElements=['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+']
    var body = document.getElementsByTagName('body')[0];
    var tbl = document.createElement('table');
    
    tbl.style.width = '40%';
    tbl.style.height = '40%'
    tbl.setAttribute('border', '1');
    
    var tbdy = document.createElement('tbody');
    
    var tr = document.createElement('tr');
    var td = document.createElement('td');

 

    var inputBar=document.createElement('input');
    inputBar.type="text";
    inputBar.setAttribute('id','calciDisplay');

    inputBar.style.width='100%';
    inputBar.style.height='100%';
    inputBar.style.textAlign='center';
    td.colSpan='4';
    td.style.width='100%';

    td.appendChild(inputBar);
    tr.appendChild(td);
    tbdy.appendChild(tr);

    var index=0;
    for (var i = 0; i < 4; i++) 
    {
        var tr = document.createElement('tr');
        for (var j = 0; j < 4; j++) 
        {
            var td = document.createElement('td');
            td.innerHTML=calciElements[index];

            if(IsOperator(calciElements[index]))
            {
                td.onclick=Calculate;
                td.style.width='25%'
                td.bgColor='#eee'
                td.style.textAlign='center';
                
            }
            
            else
            {
                td.onclick=Display;
                td.style.width='25%'
                td.style.textAlign='center';
                
            }               
            

            index++;
            tr.appendChild(td)
        
        }
        tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl);

    function IsOperator(data)
    {
        if(data=='/' || data=='+'||data=='-'||data=='*'||data=='=')
            return true;
        return false;
    }


    function Calculate(event)
    {

        if(operand1=='')
        {}
        else
        {
            if(operand2==''){
                if(event.target.innerHTML=='=')
                {
                    operator='';
                }
                else{
                operator=event.target.innerHTML;
                inputBar.value+=operator;
                }
            }
            else
            {
                
                switch(operator)
                {
                    case '+':
                        inputBar.value=parseFloat(operand1)+parseFloat(operand2);
                    
                    break;
                    
                    case '-':
                        inputBar.value=parseFloat(operand1)-parseFloat(operand2);
                    break;
                    
                    case '/':
                        inputBar.value=parseFloat(operand1)/parseFloat(operand2);
                    break;
                    
                    case '*':
                        inputBar.value=parseFloat(operand1)*parseFloat(operand2);
                    break;
                    
                }
                operator=event.target.innerHTML;
                if(operator=='=')
                {                
                    operand1=inputBar.value;
                    operator='';
                    operand2='';
                }
                {
                operand1=inputBar.value;
                inputBar.value+=operator;
                operand2='';
                }
            }
        }
        
        console.log(operand1+"    "+operator+"    "+operand2);
    }

        

    function Display(event)
    {
        if(operator==''){        
            operand1+=event.target.innerHTML;
        }
        else{
            operand2+=event.target.innerHTML;
        }
        inputBar.value+=event.target.innerHTML;
    }

}
