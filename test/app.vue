<style lang="less">
    @import "../src/styles/index.less";
</style>
<style scoped>
nav {
    margin-bottom: 40px;
}

li {
    display: inline-block;
}

li + li {
    border-left: solid 1px #bbb;
    padding-left: 5px;
    margin-left: 5px;
}

.v-link-active {
    color: #bbb;
}
</style>
<template>
    <div>
        <nav>
            <ul>
                <li><router-link to="'/button'">Button</router-link></li>
                <li><router-link to="'/card'">Card</router-link></li>
                <li><router-link to="'/message'">Message</router-link></li>
                <li><router-link to="'/more'">More</router-link></li>
                <li><router-link to="'/page'">Page</router-link></li>
                <li><router-link to="'/poptip'">Poptip</router-link></li>
                <li><router-link to="'/tooltip'">Tooltip</router-link></li>
                <li><router-link to="'/radio'">Radio</router-link></li>
                <li><router-link to="'/select'">Select</router-link></li>
                <li><router-link to="'/slider'">Slider</router-link></li>
                <li><router-link to="'/step'">Step</router-link></li>
                <li><router-link to="'/switch'">Switch</router-link></li>
                <li><router-link to="'/alert'">Alert</router-link></li>
                <li><router-link to="'/tag'">Tag</router-link></li>
                <li><router-link to="'/input'">Input</router-link></li>
                <li><router-link to="'/cascader'">Cascader</router-link></li>
                <li><router-link to="'/transfer'">Transfer</router-link></li>
                <li><router-link to="'/table'">Table</router-link></li>
                <li><router-link to="'/dropdown'">Dropdown</router-link></li>
                <li><router-link to="'/tabs'">Tabs</router-link></li>
                <li><router-link to="'/menu'">Menu</router-link></li>
                <li><router-link to="'/date'">Date</router-link></li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>
<script>
    module.exports = {
        data: function() {
            return {

            }
        },
        mounted: function() {

        },
        beforeDestroy: function() {

        },
        methods: {

        }
    }
</script>
