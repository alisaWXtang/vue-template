const inset={
    template:`
        <div>
            <h1>添加数据模块</h1>
            <label for="name">名字：<input type="text" id="name" v-model="name"/></label><br>
            性别：<label for="male">男<input type="radio" id="male" name="gender" value="男" v-model="gender" checked/></label>&emsp;
            <label for="female">女<input type="radio" name="gender" id="female" value="女" v-model="gender"/></label><br>
            <button @click="adddata">添加数据</button>
        </div>
    `,
    data(){
        return{
            name:'',
            gender:'男',
        }
    },
    methods: {
        adddata(){

        },
        getmaxvalue(list){
            let maxid = parseInt(list[0].id);
            list.forEach(item=>{
                if(parseInt(item.id)>maxid){
                    maxid = parseInt(item.id);
                }
            });
            return maxid+1;
        }
    },
    props:['list'],
} 