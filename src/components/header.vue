<template>
    <div class="header">
        <el-row type="flex" justify="space-between" class="row-bg">
            <el-col :span="4">
                <img @click="menuAll()" src="../assets/element-logo.svg" />
            </el-col>
            <el-col :span="8">
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <template v-for="items in menuData">
                        <el-menu-item v-if="!items.menuChild" :index="items.id+''">{{items.name}}</el-menu-item>
                        <el-submenu  v-else :index="items.id+''">
                            <template slot="title" >{{items.name}}</template>
                            <el-menu-item v-for=" (item, index) in items.menuChild" :index="item.id+''" :key="item.id">{{item.name}}</el-menu-item>
                        </el-submenu>
                    </template>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>

    export default {

        data() {
            return {
                activeIndex: '2',
               menuData:[]
            };
        },
        created(){

            this.menuAll()

        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            menuAll(){
                console.log(this.menuData)
                this.$api.get('menu/all',null,(success)=>{
//                   this.menuData = success
                   success.splice(0,1)
                    let arr = success;
                   let arr3 = []
                    let num=[]
                    let num2
                    for(let i = 0;i<arr.length;i++){
                        for(let  j= 0;j<arr.length;j++){
                            if(arr[i].id==arr[j].main){
                                num2=i
                                num.push(arr[j].id)
                                arr3.push({
                                    id:arr[j].id,
                                    name:arr[j].name
                               })
                            }
                        }
                    }
                    arr[num2]['menuChild'] =  arr3
                    let r;
                    r = num.filter(function (element, index, self) {
                        return self.indexOf(element) === index;
                    });
                        for(let j=0;j<arr.length;j++){
                            for(let i = 0; i<r.length;i++){
                            if(arr[j].id==r[i]){
                               arr.splice(arr.indexOf(arr[j]),1)
                            }
                        }

                    }
                    this.menuData = arr
            })

            }
        }
    }
</script>

<style>
    .el-menu--horizontal{
        border:none;
    }
    .header{
        max-width: 1140px;
        margin: 0 auto;
    }
</style>