

var Calci=function Calculator()
{
    var operand1='';
    var operand2='';
    var operator='';
    var calcOps=['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+']


    var body = document.getElementsByTagName('body')[0];

    var jTable = document.createElement('table');
    jTable.style.width = '40%';
    jTable.style.height = '40%'
    jTable.setAttribute('border', '1');
    
    var jBody = document.createElement('tbody');
    
    var tr = document.createElement('tr');
    var td = document.createElement('td');

    var numBar=document.createElement('input');
    numBar.type="text";
    numBar.style.width='100%';
    numBar.style.height='100%';
    numBar.style.textAlign='center';

    td.colSpan='4';
    td.style.width='100%';
    td.appendChild(numBar);
    tr.appendChild(td);
    jBody.appendChild(tr);

    var index=0;

    for (var i = 0; i < 4; i++) 
    {
        var tr = document.createElement('tr');
        for (var j = 0; j < 4; j++) 
        {
            var td = document.createElement('td');
            td.innerHTML=calcOps[index];
            if(IsOperator(calcOps[index]))
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
        jBody.appendChild(tr);
    }
    jTable.appendChild(jBody);
    body.appendChild(jTable);

    function IsOperator(op)
    {
        if(op=='/' || op=='+'||op=='-'||op=='*'||op=='=')
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
                numBar.value+=operator;
                }
            }
            else
            {
                
                switch(operator)
                {
                    case '+':
                        numBar.value=parseFloat(operand1)+parseFloat(operand2);
                    
                    break;
                    
                    case '-':
                        numBar.value=parseFloat(operand1)-parseFloat(operand2);
                    break;
                    
                    case '/':
                        numBar.value=parseFloat(operand1)/parseFloat(operand2);
                    break;
                    
                    case '*':
                        numBar.value=parseFloat(operand1)*parseFloat(operand2);
                    break;
                    
                }
                operator=event.target.innerHTML;
                if(operator=='=')
                {                
                    operand1=numBar.value;
                    operator='';
                    operand2='';
                }
                {
                operand1=numBar.value;
                numBar.value+=operator;
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
        numBar.value+=event.target.innerHTML;
    }

}
