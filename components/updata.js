const updata = {
    template:`
        <div>
            <h1>修改数据</h1>
            <label for="dataid">查询的id:<input type="number" id="dataid" min="1" v-model="selectid"/></label>
            <button @click="selectdatabyid">查询数据的id</button><hr/>
            <label>名字: <input type="text" v-model="name"/></label>
            性别：<label for="male">男<input type="radio" value="男" v-model="gender" name="gender" id="male"/></label>
            <label for="famale"> 女<input type="radio" v-model="gender" value="女" name="gender" id= "famale"/></label>
            <button @click="updatabyid">修改数据</button>
        </div>
    `,
    data(){
        return{
            selectId: '1',
            name: '',
            gender: '男',
            person: {},
        }
        
    },
    methods:{
        selectdatabyid(){
            this.person = this.list.find(item=>item.id===item.selectId);
            if(this.person){
                this.name=this.person.name;
                this.gender = this.person.gender;
            }
        },
        updatabyid(){
            if (!this.person) {
                alert('要修改的数据不存在！');
                return;
            }
            if (confirm('是否要修改此数据')) {
                this.list.map(item => {
                    if (item.id === this.person.id) {
                        item.name = this.name;
                        item.gender = this.gender;
                        return item;
                    } else {
                        return item;
                    }
                });
            }
        }

    },
    props: ['list'],

}