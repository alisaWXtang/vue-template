const PersonList = {
    template:`
        <div>
            <ul>
                <li
                    v-for="item in list" :key="item.id"
                >
                    {{item.name}}——{{item.gender}}
                    <button @click="deletedatas(item.id)">删除</button>
                </li>
            </ul>
        </div>
    `,
    props:['list'],
    methods: {
        deletedatas(id){
            if(confirm('你确定要删除？')){
                const index = this.list.findIndex(item=>item.id===id);
                this.list.splice(index,1);
            }
        }
    },
}