
let Number_Base=16;
function fun01(array_type=0){
    let temp0;
    let printf_texts;
    let number0=0;
    printf_texts='Arrays=[<br>&ensp;&ensp;&ensp;&ensp;//Number Base is : '+Number_Base;
    fun_add_line();
    if(array_type==2){
        temp0=fun_number_group_maker_multip_list();
        printf_texts=printf_texts+fun_number_group_be_text_multip_list(temp0);
    }
    else for(;;){
        if(number0>=Number_Base)break;
        if(array_type==0){
            temp0=fun_number_group_maker_chack(number0);
            temp0=fun_number_group_be_text(temp0,number0);
        }
        if(array_type==1){
            temp0=fun_number_group_maker_get(number0);
            temp0=fun_number_group_be_text_less(temp0,number0);
        }
        printf_texts=printf_texts+temp0;
        number0++;
    }
    temp0=printf_texts.length-1;
    printf_texts=printf_texts.slice(0,temp0);
    printf_texts=printf_texts+'<br>];';
    fun_number_group_printf(printf_texts);
    fun_add_line();
    return 0;
}
function fun_number_group_maker_chack(number_f=0){
    let N_G=[],N_T=[true];
    let number0=0,number1=0;
    let temp0=0;
    for(;;){
        if(number1>=Number_Base){
            N_G[number0]=N_T;
            number0++;
            if(number0>=Number_Base)break;
            number1=0;
            N_T=[true];
        }
        temp0=number0*number1;
        temp0=temp0%Number_Base;
        if(temp0==number_f)N_T[number1]=true;
        else N_T[number1]=false;
        number1++;
    }
    return N_G;
}
function fun_number_group_maker_get_old(number_f=0){
    let N_G=[],N_T=[];
    let number0=1,number1=0;
    let number2=0;
    let A_N=[];
    let temp0=0;
    function add_array_long(number_in,if_null=false){
        let number_temp=number_in;
        for(;;){
            if(number_temp>=Number_Base)break;
            N_T[number_temp]='';
            number_temp++;
        }
        if(if_null)N_T[number_temp]='';
        else N_T[number_temp]=number_in;
    }
    add_array_long(0,true);
    for(;;){
        if(N_T[temp0]===undefined)break;
        A_N[temp0]=N_T[temp0];
        temp0++;
    }
    N_G[0]=A_N;
    for(;;){
        if(number1>=Number_Base){
            add_array_long(number2);
            N_G[number0]=N_T;
            number0++;
            if(number0>=Number_Base)break;
            temp0=number0%2;
            if(temp0==0){
                N_G[number0]=A_N;
                number0++;
            }
            number1=0;
            number2=0;
            N_T=[''];
        }
        temp0=number0*number1;
        temp0=temp0%Number_Base;
        if(temp0==number_f){
            N_T[number2]=number1;
            number2++;
        }
        number1++;
    }
    return N_G;
}
function fun_number_group_maker_get(number_f=0){
    let N_G=[],N_T='';
    let number0=1,number1=0;
    let A_N='';
    let temp0=0;
    N_G[0]=A_N;
    for(;;){
        if(number1>=Number_Base){
            N_G[number0]=N_T;
            number0++;
            if(number0>=Number_Base)break;
            temp0=number0%2;
            if(temp0==0){
                N_G[number0]=A_N;
                number0++;
            }
            number1=0;
            N_T='';
        }
        temp0=number0*number1;
        temp0=temp0%Number_Base;
        if(temp0==number_f){
            N_T=number1;
            number1=Number_Base;
        }
        number1++;
    }
    return N_G;
}
function fun_number_group_maker_multip_list(){
    let A_R=[],A_T=[0];
    let number0=0,number1=0;
    for(;;){
        if(number1>=Number_Base){
            A_R[number0]=A_T;
            number0++;
            if(number0>=Number_Base)break;
            number1=0;
            A_T=[0];
        }
        A_T[number1]=number0*number1;
        number1++;
    }
    console.log(A_R);
    return A_R;
}
function fun_number_group_be_text(array_p,of_number=0){
    let return_T='';
    let number0=-1,number1=Number_Base+1;
    return_T=return_T+'<br>&ensp;&ensp;&ensp;&ensp;// Remainder : '+of_number+'<br>&ensp;&ensp;&ensp;&ensp;[<br>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;[';
    for(;;){
        if(array_p[0][number1]==undefined){
            if(number0>=0)return_T=return_T+']';
            number0++;
            if(number0>=Number_Base)break;
            else if(number0>=1)return_T=return_T+',<br>&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;[';
            number1=0;
        }
        else{
            return_T=return_T+',';
        }
        return_T=return_T+array_p[number0][number1];
        number1++;
    }
    return_T=return_T+'<br>&ensp;&ensp;&ensp;&ensp;],';
    return return_T;
}
function fun_number_group_be_text_less(array_p,of_number=0){
    let return_T='';
    let number0=0;
    return_T=return_T+'<br>&ensp;&ensp;&ensp;&ensp;// Remainder : '+of_number+'<br>&ensp;&ensp;&ensp;&ensp;[';
    for(;;){
        if(array_p[number0]===undefined)break;
        return_T=return_T+array_p[number0];
        number0++;
        if(array_p[number0]!==undefined)return_T=return_T+',';
    }
    return_T=return_T+'],';
    return return_T;
}
function fun_number_group_be_text_multip_list(array_p){
    let return_T='';
    let number0=0,number1=0;
    return_T =return_T+'<br>&ensp;&ensp;&ensp;&ensp;['
    for(;;){
        if(number1>=Number_Base){
            number0++;
            if(number0>=Number_Base)break;
            else return_T=return_T+'],<br>&ensp;&ensp;&ensp;&ensp;[';
            number1=0;
        }
        return_T=return_T+array_p[number0][number1];
        number1++;
        if(number1<Number_Base)return_T=return_T+',';
    }
    return_T=return_T+'],';
    return return_T;
}
function fun_number_group_printf(tests){
    let T_E,H_E;
    H_E=document.getElementById('output_box');
    H_E.innerHTML='';
    T_E=document.createElement('p');
    T_E.innerHTML=tests;
    H_E.appendChild(T_E);
    return 0;
}
function fun_add_line(){
    let T_E,H_E;
    H_E=document.getElementById('output_box');
    A_E=document.createElement('div');
    A_E.className='lines';
    H_E.appendChild(A_E);
}
function fun_copy_arrays(){
    let T_E=document.getElementById('output_box').getElementsByTagName('p')[0];
    let range = document.createRange();
    let selection = window.getSelection();
    if(T_E===null||T_E===undefined)return -1;
    range.selectNodeContents(T_E);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
}