
let TMREA_Lib_by_Venlen={
    Key:[
        /*
        {
            Publick_Key:'',
            Private_Key:'',
            Publick_Coefficient:'',
            Private_Coefficient:'',
            Multiplicative:'',
            Publick_Key_Length:0,
            Private_Key_Length:0,
            Encryption_Length:0,
            Multiplicative_Length:0,
            Others_Length:0,
            Random_Number_Mode:0,
            Use_Now:true
        }
        */
    ],
    Encrypt_Key:[
        {
            Publick_Key:'',
            Publick_Key_V:[],
            Publick_Key_Length:0,
            Encryption_Length:0,
            Others_Length:0
        }
                ],
    Decrypt_Key:[
        {
            Private_Key:'',
            Private_Key_V:[],
            Multiplicative:'',
            Multiplicative_V:[],
            Publick_Key_Length:0,
            Encryption_Length:0,
            Others_Length:0
        }
    ],
    Create_Key_List_ID_Chack:function(List_ID=-1){
        let number_R=List_ID;
        number_R=Number(number_R);
        if(isNaN(number_R))number_R=-1;
        if(number_R<0)number_R=-1;
        if(List_ID==-1)number_R=TMREA_Lib_by_Venlen.Key.length;
        return number_R;
    },
    Create_Key_Data:{
        Get_remainder_coefficients:[
            [,0,,0,,0,,0,,0,,0,,0,,0],
            [,1,,11,,13,,7,,9,,3,,5,,15],
            [,2,,6,,10,,14,,2,,6,,10,,14],
            [,3,,1,,7,,5,,11,,9,,15,,13],
            [,4,,12,,4,,12,,4,,12,,4,,12],
            [,5,,7,,1,,3,,13,,15,,9,,11],
            [,6,,2,,14,,10,,6,,2,,14,,10],
            [,7,,13,,11,,1,,15,,5,,3,,9],
            [,8,,8,,8,,8,,8,,8,,8,,8],
            [,9,,3,,5,,15,,1,,11,,13,,7],
            [,10,,14,,2,,6,,10,,14,,2,,6],
            [,11,,9,,15,,13,,3,,1,,7,,5],
            [,12,,4,,12,,4,,12,,4,,12,,4],
            [,13,,15,,9,,11,,5,,7,,1,,3],
            [,14,,10,,6,,2,,14,,10,,6,,2],
            [,15,,5,,3,,9,,7,,13,,11,,1]
        ],
        Multip_list_base16:[
            //Number Base is : 16
            [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
            [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30],
            [0,3,6,9,12,15,18,21,24,27,30,33,36,39,42,45],
            [0,4,8,12,16,20,24,28,32,36,40,44,48,52,56,60],
            [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75],
            [0,6,12,18,24,30,36,42,48,54,60,66,72,78,84,90],
            [0,7,14,21,28,35,42,49,56,63,70,77,84,91,98,105],
            [0,8,16,24,32,40,48,56,64,72,80,88,96,104,112,120],
            [0,9,18,27,36,45,54,63,72,81,90,99,108,117,126,135],
            [0,10,20,30,40,50,60,70,80,90,100,110,120,130,140,150],
            [0,11,22,33,44,55,66,77,88,99,110,121,132,143,154,165],
            [0,12,24,36,48,60,72,84,96,108,120,132,144,156,168,180],
            [0,13,26,39,52,65,78,91,104,117,130,143,156,169,182,195],
            [0,14,28,42,56,70,84,98,112,126,140,154,168,182,196,210],
            [0,15,30,45,60,75,90,105,120,135,150,165,180,195,210,225]
        ],
        Base_conversion:{
            b16_n:{
                A:10,
                B:11,
                C:12,
                D:13,
                E:14,
                F:15,
                a:10,
                b:11,
                c:12,
                d:13,
                e:14,
                f:15
            },
            n_b16:['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
        }
    },
    Array_Fill_0:function(Long_full=0){
        let A_R=[];
        let number0=0;
        for(;;){
            if(number0>=Long_full)break;
            A_R[number0]=0;
            number0++;
        }
        return A_R;
    },
    Array_Be_Binary:function(array_in=[]){
        
    },
    Array_Hex_2_Binary:function(array_in=[0]){
        let number0=0,number1=0,Long=array_in.length;
        let temp0=0,temp1=false;
        let array_temp=array_in;
        let array_return=[];
        for(;;){
            if(number0>=Long)break;
            temp0=array_temp[number0];
            array_return[number1]=temp0%2;
            temp0=temp0-temp0%2;
            temp0=temp0/2;
            number1++;
            array_return[number1]=temp0%2;
            temp0=temp0-temp0%2;
            temp0=temp0/2;
            number1++;
            array_return[number1]=temp0%2;
            temp0=temp0-temp0%2;
            temp0=temp0/2;
            number1++;
            array_return[number1]=temp0%2;
            temp0=temp0-temp0%2;
            temp0=temp0/2;
            number1++;
            number0++;
        }
        return array_return;
    },
    Array_Binary_2_Hex:function(array_in=[]){
        let A_R=[];
        let Long=array_in.length;
        let number0=0,number1=0;
        Long=Long/4;
        A_R=TMREA_Lib_by_Venlen.Array_Fill_0(Long);
        for(;;){
            if(number0>=Long)break;
            A_R[number0]=A_R[number0]+array_in[number1];
            number1++;
            A_R[number0]=A_R[number0]+array_in[number1]*2;
            number1++;
            A_R[number0]=A_R[number0]+array_in[number1]*4;
            number1++;
            A_R[number0]=A_R[number0]+array_in[number1]*8;
            number1++;
            number0++;
        }
        return A_R;
    },
    Array_Number_2_Hex:function(number_in=0){
        let A_R=[0];
        let number0=0;
        let temp0=number_in;
        for(;;){
            if(temp0==0)break;
            A_R[number0]=temp0%16;
            temp0=temp0-A_R[number0];
            temp0=temp0/16;
            number0++;
        }
        return A_R;
    },
    Hex_Array_2_Number:function(array_in=[0]){
        let N_R=0;
        let Long=array_in.length;
        let number0=Long-1;
        for(;;){
            if(number0<=0)break;
            N_R=N_R*16+array_in[number0];
            number0--;
        }
        N_R=N_R*16+array_in[number0];
        return N_R;
    },
    Be_Hex_Number_Array:function(Texts_in=''){
        let A_T=[],A_E=[];
        let Long=Texts_in.length;
        let number0=0,number1=0;
        for(;;){
            if(number0>=Long)break;
            if(Texts_in[number0]>='0'&&Texts_in[number0]<='9')A_T[number0]=Number(Texts_in[number0]);
            else A_T[number0]=TMREA_Lib_by_Venlen.Create_Key_Data.Base_conversion.b16_n[Texts_in[number0]];
            if(A_T[number0]===undefined||isNaN(A_T[number0])){
                A_E[number1]=number0;
                number1++;
            }
            number0++;
        }
        return {Number:A_T,Error:A_E};
    },
    Be_Hex_Texts:function(Array_in=[]){
        let A_T='';
        let Long=Array_in.length;
        let number0=0;
        for(;;){
            if(number0>=Long)break;
            A_T=A_T+TMREA_Lib_by_Venlen.Create_Key_Data.Base_conversion.n_b16[Array_in[number0]];
            number0++;
        }
        return A_T;
    },
    Binary_Long_Multip:function(array_0=[0],array_1=[0],max_length=0){
        function fix_long(){
            let array_R=[];
            let Long=max_length;
            array_R=TMREA_Lib_by_Venlen.Array_Fill_0(Long);
            return array_R;
        }
        function index_add(array_B=[0],array_P=[0],index=0){
            let n_0=0,n_1=index;
            let Long=max_length;
            let number_fl=index+array_P.length;
            if(number_fl>=Long){
                number_fl=Long;
            }
            for(;;){
                if(n_1>=number_fl)break;
                array_B[n_1]=array_B[n_1]+array_P[n_0];
                n_0++,n_1++;
            }
            return array_B;
        }
        function fix_binary(array_in){
            let A_R=[],Long=array_in.length;
            let number_f0=0;
            let temp0=0;
            for(;;){
                if(number_f0>=Long){
                    break;
                }
                else{
                    temp0=array_in[number_f0];
                    A_R[number_f0]=temp0%2;
                    temp0=temp0-A_R[number_f0];
                    number_f0++;
                    array_in[number_f0]=array_in[number_f0]+temp0/2;
                }
            }
            for(;;){
                if(number_f0%4==0)break;
                A_R[number_f0]=0;
                number_f0++;
            }
            return A_R;
        }
        let array_S,array_L,array_R;
        let number0=0;
        let Long;
        if(array_0.length>array_1.length){
            array_L=array_0,array_S=array_1;
        }
        else{
            array_S=array_0,array_L=array_1;
        }
        Long=array_S.length;
        array_R=fix_long();
        for(;;){
            if(number0>=Long)break;
            if(array_S[number0])array_R=index_add(array_R,array_L,number0);
            number0++;
        }
        all_where_part=array_R;
        array_R=fix_binary(array_R);
        return array_R;
    },
    Get_Pu_K_Number_List:function(E_long=1024,P_pre_value=[0]){
        let Mix_V_T=[0];
        let E_K_R=[];
        let P_K_L=P_pre_value.length;
        function fix_array_long(){
            let number_f0=0,f_long=E_long+2;
            for(;;){
                if(number_f0>=f_long)break;
                Mix_V_T[number_f0]=0;
                number_f0++;
            }
        }
        function get_R_C_V(index=0){
            let temp_f0;
            temp_f0=Mix_V_T[index];
            temp_f0=16-temp_f0;
            temp_f0=temp_f0%16;
            return TMREA_Lib_by_Venlen.Create_Key_Data.Get_remainder_coefficients[temp_f0][P_pre_value[0]];
        }
        function mix_M_E_V(e_v=0,index=0){
            let number_f0=0,number_f1=index;
            for(;;){
                if(number_f0>=P_K_L)break;
                if(number_f1>=E_long)break;
                Mix_V_T[number_f1]=Mix_V_T[number_f1]+TMREA_Lib_by_Venlen.Create_Key_Data.Multip_list_base16[e_v][P_pre_value[number_f0]];
                number_f0++,number_f1++;
            }
        }
        function fix_base16(index=0){
            let number_f0=index;
            let temp_f0=0;
            if(Mix_V_T[number_f0]>=16){
                temp_f0=Mix_V_T[number_f0];
                Mix_V_T[number_f0]=temp_f0%16;
                temp_f0=temp_f0-Mix_V_T[number_f0];
                number_f0++;
                Mix_V_T[number_f0]=Mix_V_T[number_f0]+temp_f0/16;
            }
            else number_f0++;
            if(Mix_V_T[number_f0]>=16){
                temp_f0=Mix_V_T[number_f0];
                Mix_V_T[number_f0]=temp_f0%16;
                temp_f0=temp_f0-Mix_V_T[number_f0];
                number_f0++;
                Mix_V_T[number_f0]=Mix_V_T[number_f0]+temp_f0/16;
            }
        }
        fix_array_long();
        E_K_R[0]=TMREA_Lib_by_Venlen.Create_Key_Data.Get_remainder_coefficients[1][P_pre_value[0]];
        mix_M_E_V(E_K_R[0],0);
        fix_base16(0);
        let number_l=1;
        for(;;){
            if(number_l>=E_long)break;
            E_K_R[number_l]=get_R_C_V(number_l);
            mix_M_E_V(E_K_R[number_l],number_l);
            fix_base16(number_l);
            number_l++;
        }
        return E_K_R;
    },
    Create_Key_Data_Chack:function(E_long=1024,Private_key_long=512,Multiple_value_long=128,Other_long=64,List_ID=0,Random_number_mode=0,use_now=true){
        E_long=Number(E_long);
        if(isNaN(E_long))E_long=1024;
        Private_key_long=Number(Private_key_long);
        if(isNaN(Private_key_long))Private_key_long=512;
        Multiple_value_long=Number(Multiple_value_long);
        if(isNaN(Multiple_value_long))Multiple_value_long=128;
        E_long=E_long-E_long%4;
        Private_key_long=Private_key_long-Private_key_long%4;
        Multiple_value_long=Multiple_value_long-Multiple_value_long%4;
        if(E_long<4)E_long=4;
        if(Private_key_long<4)Private_key_long=4;
        if(Private_key_long>E_long)Private_key_long=E_long;
        if(Multiple_value_long<0)Multiple_value_long=0;
        if(Random_number_mode==0)Random_number_mode=0;
        else if(Random_number_mode==1)Random_number_mode=1;
        else Random_number_mode=0;
        if(use_now)use_now=true;
        else use_now=false;
        TMREA_Lib_by_Venlen.Key[List_ID].Publick_Key_Length=E_long+Multiple_value_long;
        TMREA_Lib_by_Venlen.Key[List_ID].Private_Key_Length=Private_key_long;
        TMREA_Lib_by_Venlen.Key[List_ID].Encryption_Length=E_long;
        TMREA_Lib_by_Venlen.Key[List_ID].Multiplicative_Length=Multiple_value_long;
        TMREA_Lib_by_Venlen.Create_Key_Other_Key(Other_long,List_ID);
        TMREA_Lib_by_Venlen.Key[List_ID].Random_Number_Mode=Random_number_mode;
        TMREA_Lib_by_Venlen.Key[List_ID].Use_Now=use_now;
    },
    Random_Number_Creater:function(min=0,max=15,List_ID=0){
        let V_return=0,size=max-min;
        let C_type=TMREA_Lib_by_Venlen.Key[List_ID].Random_Number_Mode;
        let number0=0,temp0=0;
        if(C_type==0){
            V_return=Math.round(Math.random()*size);
        }
        if(C_type==1){
            V_return=Math.round(Math.random()*1000);
            temp0=Date.now()%1000;
            temp0=temp0+V_return;
            V_return=temp0%size;
        }
        V_return=V_return+min;
        return V_return;
    },
    Create_Key_Private_Key_Chack:function(Private_key='',List_ID=0){
        let number_T=[],A_R=[];
        let Long=Private_key.length;
        let number0=0,number_l=TMREA_Lib_by_Venlen.Key[List_ID].Private_Key_Length;
        let temp0,temp1=0;
        temp0=TMREA_Lib_by_Venlen.Be_Hex_Number_Array(Private_key);
        number_T=temp0.Number;
        temp1=temp0.Error.length;
        if(temp1>=1){
            temp0=temp0.Error;
            for(;;){
                if(number0>=temp1)break;
                number_T[temp0[number0]]=TMREA_Lib_by_Venlen.Random_Number_Creater(0,15,List_ID);
                number0++;
            }
        }
        number_l=number_l/4;
        if(Long<number_l){
            if(Long>=1)number0=Long;
            else number0=0;
            for(;;){
                if(number0>=number_l)break;
                number_T[number0]=TMREA_Lib_by_Venlen.Random_Number_Creater(0,15,List_ID);
                number0++;
            }
        }
        number0=0;
        for(;;){
            if(number0>=number_l)break;
            A_R[number0]=number_T[number0];
            number0++;
        }
        temp0=A_R[0];
        if(temp0%2==0)A_R[0]=temp0+1;
        return A_R;
    },
    Create_Key_Publick_Key:function(A_private_key=[],List_ID=0){
        let A_R,number_l=TMREA_Lib_by_Venlen.Key[List_ID].Encryption_Length;
        number_l=number_l/4;
        A_R=TMREA_Lib_by_Venlen.Get_Pu_K_Number_List(number_l,A_private_key);
        return A_R;
    },
    Create_Key_Multip_Key:function(Multiple_key='',List_ID=0){
        let A_R=[],A_T=[];
        let number0=0,Long=TMREA_Lib_by_Venlen.Key[List_ID].Multiplicative_Length;
        let number_fl=0;
        let temp0,temp1;
        Long=Long/4;
        temp0=TMREA_Lib_by_Venlen.Be_Hex_Number_Array(Multiple_key);
        A_T=temp0.Number;
        temp0=temp0.Error;
        number_fl=A_T.length;
        for(;;){
            if(number0>=number_fl)break;
            A_T[temp0[number0]]=TMREA_Lib_by_Venlen.Random_Number_Creater(0,15,List_ID);
            number0++;
        }
        if(number_fl>Long)number_fl=Long;
        number0=0;
        for(;;){
            if(number0>=number_fl)break;
            A_R[number0]=A_T[number0];
            number0++;
        }
        for(;;){
            if(number0>=Long)break;
            A_R[number0]=TMREA_Lib_by_Venlen.Random_Number_Creater(0,15,List_ID);
            number0++;
        }
        return A_R;
    },
    Create_Key_Other_Key:function(Other_long='User',List_ID=0){
        if(Other_long=='User')TMREA_Lib_by_Venlen.Key[List_ID].Others_Length='User';
        else if(Other_long=='user')TMREA_Lib_by_Venlen.Key[List_ID].Others_Length='User';
        else{
            if(Other_long>=TMREA_Lib_by_Venlen.Key[List_ID].Encryption_Length)Other_long=TMREA_Lib_by_Venlen.Key[List_ID].Encryption_Length-1;
            else if(Other_long<0)Other_long=0;
            else Other_long=Number(Other_long);
            if(isNaN(Other_long))Other_long=0;
            TMREA_Lib_by_Venlen.Key[List_ID].Others_Length=Other_long;
        }
    },
    Create_Key:function(Encrypt_long=1024,Private_key_long=512,Multiple_value_long=128,Private_key='',Multiple_key='',Other_long='User',List_ID=-1,Random_number_mode=0,use_now=true){
        let A_Pr_K,A_Pu_K,A_Mu_K,A_Pu_C_K;
        let A_Pr_V,A_Pu_V,A_Mu_V,A_Pu_C_V;
        let A_En_L,A_Pu_L,A_Ot_L;
        let T_Pr_K,T_Pu_K,T_Mu_K,T_Pr_C_K,T_Pu_C_K;
        let T_En_L,T_Pu_L,T_Ot_L;
        let List_Mode={
            Publick_Key:'',
            Private_Key:'',
            Publick_Coefficient:'',
            Private_Coefficient:'',
            Multiplicative:'',
            Publick_Key_Length:0,
            Private_Key_Length:0,
            Encryption_Length:0,
            Multiplicative_Length:0,
            Others_Length:0,
            Random_Number_Mode:0,
            Use_Now:true
        };
        List_ID=TMREA_Lib_by_Venlen.Create_Key_List_ID_Chack(List_ID);
        TMREA_Lib_by_Venlen.Key[List_ID]=List_Mode;
        TMREA_Lib_by_Venlen.Create_Key_Data_Chack(Encrypt_long,Private_key_long,Multiple_value_long,Other_long,List_ID,Random_number_mode,use_now);
        A_Pr_K=TMREA_Lib_by_Venlen.Create_Key_Private_Key_Chack(Private_key,List_ID);
        A_Pu_C_K=TMREA_Lib_by_Venlen.Create_Key_Publick_Key(A_Pr_K,List_ID);
        A_Mu_K=TMREA_Lib_by_Venlen.Create_Key_Multip_Key(Multiple_key,List_ID);
        A_Pr_V=TMREA_Lib_by_Venlen.Array_Hex_2_Binary(A_Pr_K);
        A_Pu_C_V=TMREA_Lib_by_Venlen.Array_Hex_2_Binary(A_Pu_C_K);
        A_Mu_V=TMREA_Lib_by_Venlen.Array_Hex_2_Binary(A_Mu_K);
        if(TMREA_Lib_by_Venlen.Key[List_ID].Multiplicative_Length==0){
            A_Pu_V=A_Pu_C_V;
            A_Pu_K=A_Pu_C_K;
        }
        else{
            A_Pu_V=TMREA_Lib_by_Venlen.Binary_Long_Multip(A_Pu_C_V,A_Mu_V,TMREA_Lib_by_Venlen.Key[List_ID].Publick_Key_Length);
            A_Pu_K=TMREA_Lib_by_Venlen.Array_Binary_2_Hex(A_Pu_V);
        }
        
        A_En_L=TMREA_Lib_by_Venlen.Array_Number_2_Hex(TMREA_Lib_by_Venlen.Key[List_ID].Encryption_Length);
        A_Pu_L=TMREA_Lib_by_Venlen.Array_Number_2_Hex(TMREA_Lib_by_Venlen.Key[List_ID].Publick_Key_Length);
        if(TMREA_Lib_by_Venlen.Key[List_ID].Others_Length=='User')A_Ot_L=-1;
        else A_Ot_L=TMREA_Lib_by_Venlen.Array_Number_2_Hex(TMREA_Lib_by_Venlen.Key[List_ID].Others_Length);
        
        T_Pr_C_K=TMREA_Lib_by_Venlen.Be_Hex_Texts(A_Pr_K);
        T_Pu_K=TMREA_Lib_by_Venlen.Be_Hex_Texts(A_Pu_K);
        T_Mu_K=TMREA_Lib_by_Venlen.Be_Hex_Texts(A_Mu_K);
        T_Pu_C_K=TMREA_Lib_by_Venlen.Be_Hex_Texts(A_Pu_C_K);
        
        T_Pu_L=TMREA_Lib_by_Venlen.Be_Hex_Texts(A_Pu_L);
        T_En_L=TMREA_Lib_by_Venlen.Be_Hex_Texts(A_En_L);
        if(TMREA_Lib_by_Venlen.Key[List_ID].Others_Length=='User')T_Ot_L='U';
        else T_Ot_L=TMREA_Lib_by_Venlen.Be_Hex_Texts(A_Ot_L);
        
        T_Pu_K=T_Pu_K+'L'+T_En_L+'O'+T_Ot_L;
        T_Pr_K=T_Pr_C_K+'L'+T_Pu_L+'M'+T_Mu_K+'O'+T_Ot_L;
        
        TMREA_Lib_by_Venlen.Key[List_ID].Publick_Key=T_Pu_K;
        TMREA_Lib_by_Venlen.Key[List_ID].Private_Key=T_Pr_K;
        TMREA_Lib_by_Venlen.Key[List_ID].Multiplicative=T_Mu_K;
        TMREA_Lib_by_Venlen.Key[List_ID].Publick_Coefficient=T_Pu_C_K;
        TMREA_Lib_by_Venlen.Key[List_ID].Private_Coefficient=T_Pr_C_K;
        if(use_now){
            TMREA_Lib_by_Venlen.Use_Public_Key(T_Pu_K,A_Pu_V,TMREA_Lib_by_Venlen.Key[List_ID].Encryption_Length,TMREA_Lib_by_Venlen.Key[List_ID].Others_Length,List_ID);
            TMREA_Lib_by_Venlen.Use_Private_Key(T_Pr_K,A_Pr_V,T_Mu_K,A_Mu_V,TMREA_Lib_by_Venlen.Key[List_ID].Publick_Key_Length,TMREA_Lib_by_Venlen.Key[List_ID].Others_Length,List_ID);
        }
        return 0;
    },
    Install_Key_Publick_Chack:function(Public_key=''){
        let P_R,V_R,A_K,V_K,L_K,L_O;
        let A_T;
        function key_return(){
            P_R={
                V_R,
                A_K,
                V_K,
                L_K,
                L_O
            }
            return P_R;
        }
        A_T=Public_key.split('L');
        if(A_T.length<=1||A_T.length>2){
            V_R=false;
            key_return();
            return P_R;
        }
        A_K=A_T[0];
        A_T=A_T[1].split('O');
        if(A_T.length<=1||A_T.length>2){
            V_R=false;
            key_return();
            return P_R;
        }
        L_K=A_T[0],L_O=A_T[1];
        A_K=TMREA_Lib_by_Venlen.Be_Hex_Number_Array(A_K);
        if(A_K.Error.length>0){
            V_R=false;
            key_return();
            return P_R;
        }
        A_K=A_K.Number;
        V_K=TMREA_Lib_by_Venlen.Array_Hex_2_Binary(A_K);
        L_K=TMREA_Lib_by_Venlen.Be_Hex_Number_Array(L_K);
        if(L_K.Error.length>0){
            V_R=false;
            key_return();
            return P_R;
        }
        L_K=TMREA_Lib_by_Venlen.Hex_Array_2_Number(L_K.Number);
        L_K=Number(L_K);
        if(isNaN(L_K)){
            V_R=false;
            key_return();
            return P_R;
        }
        if(L_O=='U'){
            L_O='User';
        }
        else{
            L_O=TMREA_Lib_by_Venlen.Be_Hex_Number_Array(L_O);
            if(L_O.Error.length>0){
                V_R=false;
                key_return();
                return P_R;
            }
            L_O=TMREA_Lib_by_Venlen.Hex_Array_2_Number(L_O.Number);
            L_O=Number(L_O);
            if(isNaN(L_O)){
                V_R=false;
                key_return();
                return P_R;
            }
        }
        V_R=true;
        key_return();
        return P_R;
    },
    Use_Public_Key:function(Public_key='',Public_key_V=[],Encrypt_length=0,Others_length=0,List_ID=0){
        let List_Mode={
            Publick_Key:'',
            Publick_Key_V:[],
            Publick_Key_Length:0,
            Encryption_Length:0,
            Others_Length:0
        };
        TMREA_Lib_by_Venlen.Encrypt_Key[List_ID]=List_Mode;
        TMREA_Lib_by_Venlen.Encrypt_Key[List_ID].Publick_Key=Public_key;
        TMREA_Lib_by_Venlen.Encrypt_Key[List_ID].Publick_Key_V=Public_key_V;
        TMREA_Lib_by_Venlen.Encrypt_Key[List_ID].Publick_Key_Length=Public_key_V.length;
        TMREA_Lib_by_Venlen.Encrypt_Key[List_ID].Encryption_Length=Encrypt_length;
        TMREA_Lib_by_Venlen.Encrypt_Key[List_ID].Others_Length=Others_length;
    },
    Install_Public_Key:function(Public_key='',List_ID=0){
        let Key_message;
        Key_message=TMREA_Lib_by_Venlen.Install_Key_Publick_Chack(Public_key);
        if(Key_message.V_R){
            TMREA_Lib_by_Venlen.Use_Public_Key(Public_key,Key_message.V_K,Key_message.L_K,Key_message.L_O,List_ID);
            return 0;
        }
        else return -1;
    },
    Install_Key_Private_Chack:function(Private_key=''){
        let P_R,V_R,A_K,V_K,T_M,A_M,V_M,L_K,L_O;
        let A_T;
        function key_return(){
            P_R={
                V_R,
                A_K,
                V_K,
                T_M,
                A_M,
                V_M,
                L_K,
                L_O
            }
            return P_R;
        }
        A_T=Private_key.split('L');
        if(A_T.length<=1||A_T.length>2){
            V_R=false;
            key_return();
            return P_R;
        }
        A_K=A_T[0];
        A_T=A_T[1].split('M');
        if(A_T.length<=1||A_T.length>2){
            V_R=false;
            key_return();
            return P_R;
        }
        L_K=A_T[0];
        A_T=A_T[1].split('O');
        if(A_T.length<=1||A_T.length>2){
            V_R=false;
            key_return();
            return P_R;
        }
        T_M=A_T[0],L_O=A_T[1];
        A_K=TMREA_Lib_by_Venlen.Be_Hex_Number_Array(A_K);
        if(A_K.Error.length>0){
            V_R=false;
            key_return();
            return P_R;
        }
        A_K=A_K.Number;
        V_K=TMREA_Lib_by_Venlen.Array_Hex_2_Binary(A_K);
        A_M=TMREA_Lib_by_Venlen.Be_Hex_Number_Array(T_M);
        if(A_M.Error.length>0){
            V_R=false;
            key_return();
            return P_R;
        }
        A_M=A_M.Number;
        V_M=TMREA_Lib_by_Venlen.Array_Hex_2_Binary(A_M);
        L_K=TMREA_Lib_by_Venlen.Be_Hex_Number_Array(L_K);
        if(L_K.Error.length>0){
            V_R=false;
            key_return();
            return P_R;
        }
        L_K=TMREA_Lib_by_Venlen.Hex_Array_2_Number(L_K.Number);
        L_K=Number(L_K);
        if(isNaN(L_K)){
            V_R=false;
            key_return();
            return P_R;
        }
        if(L_O=='U'){
            L_O='User';
        }
        else{
            L_O=TMREA_Lib_by_Venlen.Be_Hex_Number_Array(L_O);
            if(L_O.Error.length>0){
                V_R=false;
                key_return();
                return P_R;
            }
            L_O=TMREA_Lib_by_Venlen.Hex_Array_2_Number(L_O.Number);
            L_O=Number(L_O);
            if(isNaN(L_O)){
                V_R=false;
                key_return();
                return P_R;
            }
            if(L_K>L_O-4){
                V_R=false;
                key_return();
                return P_R;
            }
        }
        V_R=true;
        key_return();
        return P_R;
    },
    Use_Private_Key:function(Private_key='',Private_key_V=[],Multiplicative='',Multiplicative_V=[],Public_key_length=0,Others_length=0,List_ID=0){
        let List_Mode={
            Private_Key:'',
            Private_Key_V:[],
            Multiplicative:'',
            Multiplicative_V:[],
            Publick_Key_Length:0,
            Encryption_Length:0,
            Others_Length:0
        };
        TMREA_Lib_by_Venlen.Decrypt_Key[List_ID]=List_Mode;
        TMREA_Lib_by_Venlen.Decrypt_Key[List_ID].Private_Key=Private_key;
        TMREA_Lib_by_Venlen.Decrypt_Key[List_ID].Private_Key_V=Private_key_V;
        TMREA_Lib_by_Venlen.Decrypt_Key[List_ID].Multiplicative=Multiplicative;
        TMREA_Lib_by_Venlen.Decrypt_Key[List_ID].Multiplicative_V=Multiplicative_V;
        TMREA_Lib_by_Venlen.Decrypt_Key[List_ID].Publick_Key_Length=Public_key_length;
        TMREA_Lib_by_Venlen.Decrypt_Key[List_ID].Encryption_Length=Public_key_length-Multiplicative_V.length;
        TMREA_Lib_by_Venlen.Decrypt_Key[List_ID].Others_Length=Others_length;
    },
    Install_Private_Key:function(Private_key='',List_ID=0){
        let Key_message;
        Key_message=TMREA_Lib_by_Venlen.Install_Key_Private_Chack(Private_key);
        if(Key_message.V_R){
            TMREA_Lib_by_Venlen.Use_Private_Key(Private_key,Key_message.V_K,Key_message.T_M,Key_message.V_M,Key_message.L_K,Key_message.L_O,List_ID);
            return 0;
        }
        else return -1;
    },
    Encrypt_Bin:function(Data_in=[0],Key_list_ID=0,Other_length=-1){
        let Other_N_Range=[0,1,15],Other_N_Chouse=0;
        let Key_E;
        let Part_Long,Other_Long;
        let Part_Data,Part_R_N;
        let Array_Encrypted;
        let P_Number=0;
        let Data_Long=Data_in.length,Data_Before_End;
        let temp0=0;
        function R_N_A_Creater(N_start=0,Long=0){
            let A_R,A_T;
            let number0=0,C_long=Long;
            C_long=C_long/4;
            for(;;){
                if(number0>=C_long)break;
                A_T=TMREA_Lib_by_Venlen.Random_Number_Creater(Other_N_Range[N_start],Other_N_Range[2]);
                number0++;
            }
            A_R=TMREA_Lib_by_Venlen.Array_Hex_2_Binary(A_T);
            return A_R;
        }
        Key_E=TMREA_Lib_by_Venlen.Encrypt_Key[Key_list_ID];
        if(Key_E===undefined)return -1;
        if(Key_E.Others_Length=='User'){
            if(Other_length<0)return -2;
            if(Other_length%4!=0)return -3;
            if(Other_length>Key_E.Encryption_Length-4)return -4;
            Other_N_Chouse=1;
            Other_Long=Other_length;
        }
        else{
            Other_Long=Key_E.Others_Length;
        }
        Part_R_N=R_N_A_Creater(Other_N_Range[Other_N_Chouse],Other_Long);
        Part_Long=Key_E.Encryption_Length-Other_Long;
        Data_Before_End=Data_Long-Part_Long;
        if(Part_Long>=Data_Long)Part_Long=Data_Long;
        P_Number=Part_Long;
        if(Other_N_Chouse==0){
            Part_Data=Part_R_N+Data_in.slice(0,Part_Long);
        }
        else{
            Part_Data=Part_R_N+[0,0,0,0]+Data_in.slice(0,Part_Long-4);
        }
        Array_Encrypted=TMREA_Lib_by_Venlen.Binary_Long_Multip(Part_Data,Key_E.Publick_Key_V,Part_Long+Other_Long);
        
        for(;;){
            if(P_Number>Data_Before_End)break;
            Part_R_N=R_N_A_Creater(0,Other_Long);
            Part_Data=Part_R_N+Data_in.slice(P_Number,P_Number+Part_Long);
            Array_Encrypted=Array_Encrypted+TMREA_Lib_by_Venlen.Binary_Long_Multip(Part_Data,Key_E.Publick_Key_V,Key_E.Encryption_Length);
            P_Number=P_Number+Part_Long;
        }
        
        if(Array_Encrypted.length<=Key_E.Encryption_Length){
            if(Array_Encrypted.length<=Key_E.Encryption_Length-4){
                Array_Encrypted=Array_Encrypted+[0,0,0,0];
                Part_R_N=R_N_A_Creater(Other_N_Range[Other_N_Chouse],Key_E.Encryption_Length-Array_Encrypted.length-4);
                Array_Encrypted=Array_Encrypted+Part_R_N;
            }
        }
        else{
            Part_R_N=R_N_A_Creater(0,Other_Long);
            Part_Data=Part_R_N+Data_in.slice(P_Number,Data_Long);
            Array_Encrypted=Array_Encrypted+TMREA_Lib_by_Venlen.Binary_Long_Multip(Part_Data,Key_E.Publick_Key_V,Data_Long-P_Number+Other_Long);
            P_Number=P_Number%Part_Long;
            if(Part_Long-P_Number>=4){
                P_Number=P_Number+4;
                Array_Encrypted=Array_Encrypted+[0,0,0,0];
                if(P_Number<Part_Long){
                    Part_R_N=R_N_A_Creater(Other_N_Range[Other_N_Chouse],Part_Long-P_Number);
                    Array_Encrypted=Array_Encrypted+Part_R_N;
                }
            }
        }
        return Array_Encrypted;
    },
    decrypt:function(Encrypted_in=[0],Key_list_ID=0){
        
    },
    test:function(value=0){
        if(value==0)console.log(TMREA_Lib_by_Venlen.Key.Publick_Key);
    }
}