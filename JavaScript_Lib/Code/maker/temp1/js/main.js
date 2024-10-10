
const Remainder_Form_Base10=[
    [true,10,5,10,5,8,5,10,5,10],
    [false,1,false,7,false,false,false,3,false,9],
    [false,2,6,4,8,false,7,6,9,8],
    [false,3,false,1,false,false,false,9,false,7],
    [false,4,7,8,6,false,9,2,8,6],
    [false,5,false,5,false,9,false,5,false,5],
    [false,6,8,2,9,false,6,8,7,4],
    [false,7,false,9,false,false,false,1,false,3],
    [false,8,9,6,7,false,8,4,6,2],
    [false,9,false,3,false,false,false,7,false,1]
];
const Remainder_Form_Base16=[
    [true,16,8,16,12,16,8,16,14,16,8,16,12,16,8,16],
    [false,1,false,11,false,13,false,7,false,9,false,3,false,5,false,15],
    [false,2,9,6,false,10,11,14,false,2,13,6,false,10,15,14],
    [false,3,false,1,false,7,false,5,false,11,false,9,false,15,false,13],
    [false,4,10,12,13,4,14,12,false,4,10,12,15,4,14,12],
    [false,5,false,7,false,1,false,3,false,13,false,15,false,9,false,11],
    [false,6,11,2,false,14,9,10,false,6,15,2,false,14,13,10],
    [false,7,false,13,false,11,false,1,false,15,false,5,false,3,false,9],
    [false,8,12,8,14,8,12,8,15,8,12,8,14,8,12,8],
    [false,9,false,3,false,5,false,15,false,1,false,11,false,13,false,7],
    [false,10,13,14,false,2,15,6,false,10,9,14,false,2,11,6],
    [false,11,false,9,false,15,false,13,false,3,false,1,false,7,false,5],
    [false,12,14,4,15,12,10,4,false,12,14,4,13,12,10,4],
    [false,13,false,15,false,9,false,11,false,5,false,7,false,1,false,3],
    [false,14,15,10,false,6,13,2,false,14,11,10,false,6,9,2],
    [false,15,false,5,false,3,false,9,false,7,false,13,false,11,false,1]
];
let E_E;
let Re_Back_Times=0;
function fun01(){
    E_E=document.getElementById('ou_e');
    console.log('start !');
    let E_0=document.getElementById('in01');
    let E_1=document.getElementById('in02');
    let E_2=document.getElementById('in03');
    let E_O_0=document.getElementById('ou01');
    let E_O_1=document.getElementById('ou02');
    let array_in=[0];
    let create_long=0;
    let array_out=[0];
    let text_out='';
    create_long=E_2.value;
    create_long=Number(create_long);
    array_in=Be_Hex_Number(E_0.value);
    array_in=Number_Add_Long(array_in,create_long);
    create_long=E_1.value;
    create_long=Number(create_long);
    array_out=Number_Maker_Base10_x000(array_in,create_long);
    if(array_out==-1){
        E_E.value=E_E.value+' Error!';
        return -1;
    }
    array_in=array_out.K;
    array_out=array_out.P;
    text_in=Be_Hex_Text(array_in);
    text_out=Be_Hex_Text(array_out);
    E_O_0.value=text_out;
    E_O_1.value=text_in;
}
function Number_Reverse(array_in=[0]){
    
    console.log('reverse...');
    E_E.value='reverse...';
    let A_R=[0];
    let number0=0,number1=0;
    number1=array_in.length-1;
    for(;;){
        if(number1<0)break;
        A_R[number1]=array_in[number0];
        number0++,number1--;
    }
    return A_R;
}
function Number_Add_Long(array_in=[0],A_L=0){
    
    console.log('adding number long...');
    E_E.value='adding number long...';
    let A_R=[0];
    let number0=A_L-1;
    let number1=array_in.length-1;
    for(;;){
        if(number0<0)break;
        if(array_in[number1]===undefined){
            A_R[number0]=0;
        }
        else{
            A_R[number0]=array_in[number1];
        }
        number0--,number1--;
    }
    return A_R;
}
function Number_Maker_Base10_x000(array_in=[0],A_L=0,f_01=false){
    
    console.log('marking numbers...');
    E_E.value='marking numbers...';
    let P_R,A_R=[1],A_in=[0];
    let over_V=[0],C_V=0,C_V_T=0,C_V_T_I=0,C_V_T_R=0;
    let number_in_add_times=[0];
    let number0=0,number1=0,number2=0,number3=0;
    let temp0=0,temp1=false,temp2=0,temp3=false,temp4=false;
    let base_V=10;
    let need_V=0,get_V=0;
    let loop_V=0,loop_times=0,loop_arrays_old=[0],loop_arrays_start=[undefined];
    let add_loop_arrays=[0];
    let Long;
    A_in=Number_Reverse(array_in);
    Long=A_in.length;
    console.log('ar=',A_in,array_in);
    for(;;){
        if(number0>=A_L)break;
        //get created in cteateing
        number1=number0,number2=0;
        C_V=0;
        for(;;){
            if(number1<=0)break;
            if(A_in[number1]===undefined)temp2=0;
            else temp2=A_in[number1];
            C_V=C_V+A_R[number2]*temp2;
            number1--,number2++;
        }
        if(over_V[number0]===undefined)over_V[number0]=0;
        C_V=over_V[number0]+C_V;
        C_V_T=C_V%base_V;
        get_V=need_V-C_V_T;
        console.log('C_V ',C_V_T,get_V);
        /*
        get_V=get_V/A_in[0];
        if(get_V.toFixed(0)!=get_V){
            number0--;
            continue;
        }
        */
        if(get_V<0)get_V=get_V+base_V;
        get_V=get_V/A_in[0];
        if(get_V.toFixed(0)!=get_V){
            temp4=true;
        }
        else{
            temp4=false;
            //temp4=true;
        }
        console.log('g_v ',get_V,temp4);
        //console.log('get g ',get_V,need_V,C_V_T,C_V,over_V[number0]);
        //get useable number
        if(temp4){
            temp1=true;
        }
        else if(Remainder_Form_Base10[get_V][A_in[0]]){
            temp1=false;
            if(Remainder_Form_Base10[get_V][A_in[0]]===true){
                A_R[number0]=number1;
            }
            else if(Remainder_Form_Base10[get_V][A_in[0]]==base_V){
                A_R[number0]=0;
            }
            else{
                A_R[number0]=Remainder_Form_Base10[get_V][A_in[0]];
            }
            console.log('A_R_C ',get_V,loop_V,number1);
            console.log('A_R ',number0,A_R[number0],C_V,A_in[0],C_V+A_R[number0]*A_in[0],(C_V+A_R[number0]*A_in[0])%base_V);
            //console.log('A_R ',A_R[number0],number0,A_L);
        }
        else{
            temp1=true;
        }
        if(temp1){
            //undefind useable number
            temp3=true;
            number0--;
            loop_V=loop_arrays_old[number0];
            number3++;
            //impossible find uaeable number
            if(temp4){
                if(number0>=0){
                    A_in[number0]++;
                    add_loop_arrays[number0]++;
                    number1=0;
                    for(;;){
                        if(number1>=Long)break;
                        if(A_in[number1]>=base_V)A_in[number1]=base_V-A_in[number1];
                        number1++;
                    }
                }
            }
        }
        else{
            //find useable number
            //save created data
            if(loop_arrays_start[number0]===undefined)loop_arrays_start[number0]=loop_V;
            loop_arrays_old[number0]=loop_V;
            //renew chack data
            number1=number0;
            for(;;){
                if(loop_arrays_start[number1]===undefined)break;
                loop_arrays_start[number1]=undefined;
                number1++;
            }
            //chack if used
            if(temp3){
                if(loop_V==loop_arrays_start[number0]){
                    number0--;
                }
                else{
                    number0++;
                    temp3=false;
                }
            }
            else number0++;
        }
        //unable create so change array_in
        if(number0<0){
            if(temp4){
                return -1;
            }
            console.log('be unable ',A_in);
            number0=0;
            A_in[number0]++;
            add_loop_arrays[number0]++;
            number1=number0;
            for(;;){
                if(add_loop_arrays[number1]===undefined){
                    break;
                }
                if(add_loop_arrays[number1]>=base_V){
                    add_loop_arrays[number1]=0;
                    number1++;
                    if(add_loop_arrays[number1]===undefined){
                        add_loop_arrays[number1]=1;
                    }
                    else{
                        add_loop_arrays[number1]++;
                    }
                    A_in[number1]++;
                }
                else number1++;
            }
            if(number1>=Long)return -1;
            number1=0;
            for(;;){
                if(number1>=Long)break;
                if(A_in[number1]>=base_V)A_in[number1]=base_V-A_in[number1];
                number1++;
            }
        }
    }
    console.log('numbers=',number0,number1,number_in_add_times);
    A_in=Number_Reverse(A_in);
    A_R=Number_Reverse(A_R);
    P_R={
        P:A_R,
        K:A_in
    }
    return P_R;
}
function Number_Maker_x000_old(array_in=[0],A_L=0,f_01=false){
    
    console.log('marking numbers...');
    E_E.value='marking numbers...';
    let P_R,A_R=[1],A_in=[0];
    let over_V=[0],C_V=0,C_V_T=0,C_V_T_I=0,C_V_T_R=0;
    let number_in_add_times=[0];
    let number0=0,number1=0,number2=0;
    let temp0=false,temp1=false,temp2=0;
    let base_V=16;
    let Long;
    
    let E_O_E=document.getElementById('ou_e');
    A_in=Number_Reverse(array_in);
    Long=A_in.length;
    console.log('ar=',A_in,array_in);
    for(;;){
        if(number0>=A_L)break;
        number1=number0,number2=0;
        for(;;){
            if(number1<=0)break;
            if(A_in[number1]===undefined)temp2=0;
            else temp2=A_in[number1];
            C_V=C_V+A_R[number2]*temp2;
            number1--,number2++;
        }
        C_V=over_V[number0]+C_V;
        if(A_R[number0]===undefined)number1=base_V;
        else number1=A_R[number0];
        number1--;
        for(;;){
            console.log(A_in,A_R);
            if(number1<0){
                temp0=true;
                break;
            }
            C_V_T=C_V+A_in[0]*number1;
            C_V_T_R=C_V_T&base_V;
            if(f_01){
                if(number0==0){
                    if(C_V_T_R==1)break;
                }
                else{
                    if(C_V_T_R==0)break;
                }
            }
            else{
                if(C_V_T_R==0)break;
            }
            number1--;
        }
        if(temp0){
            Re_Back_Times++;
            E_O_E.value=Re_Back_Times;
            A_R[number0]--;
            number0--;
            temp0=false;
            if(number0<0){
                number0=0,number1=0;
                temp1=true;
                for(;;){
                    if(number0>=Long)break;
                    if(temp1)A_in[number0]++;
                    if(A_in[number0]>=base_V){
                        number1=number0;
                        temp1=true;
                        A_in[number0]=0;
                    }
                    number0++;
                }
                number_in_add_times[number1]++;
                if(number_in_add_times[number1]>=base_V){
                    E_O_E.value=E_O_E.value+' Times backed And create error!';
                    return -1;
                }
                number1--;
                for(;;){
                    if(number1<0)break;
                    number_in_add_times[number1]=0;
                    number1--;
                }
                number0=0;
            }
        }
        else{
            A_R[number0]=number1;
            number0++;
            C_V_T_I=C_V_T/base_V;
            over_V[number0]=C_V_T_I.toFixed(0);
        }
    }
    console.log('numbers=',number0,number1,number_in_add_times);
    A_in=Number_Reverse(A_in);
    A_R=Number_Reverse(A_R);
    P_R={
        P:A_R,
        K:A_in
    }
    return P_R;
}
function Number_Maker_x001(array_in=[0],A_L=0){
    
}
function Be_Hex_Text(array_in=[0]){
    E_E.value='being text...';
    console.log('being text...');
    const T_S=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let T_R='';
    let Long=array_in.length;
    let number0=0;
    for(;;){
        if(number0>=Long)break;
        T_R=T_R+T_S[array_in[number0]];
        number0++;
    }
    return T_R;
}
function Be_Hex_Number(texts=''){
    E_E.value='being number...';
    console.log('being number...');
    let A_R=[0];
    let number0=0;
    let Long=texts.length;
    function Be_Hex(value='0'){
        if(0<=value&&value<=9)return Number(value);
        else if(value=='A'||value=='a')return 10;
        else if(value=='B'||value=='b')return 11;
        else if(value=='C'||value=='c')return 12;
        else if(value=='D'||value=='d')return 13;
        else if(value=='E'||value=='e')return 14;
        else if(value=='F'||value=='f')return 15;
        else return -1;
    }
    for(;;){
        if(number0>=Long)break;
        A_R[number0]=Be_Hex(texts[number0]);
        if(A_R[number0]==-1)return -1;
        number0++;
    }
    return A_R;
}