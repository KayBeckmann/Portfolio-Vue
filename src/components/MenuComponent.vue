<template>
    <div class="menu">
        <div class="left">Logo</div>
        <div>
            <ul>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="js"></script>

<style lang="css" scoped>
ul {
  list-style: none;
}

li {
  display: inline-block;
  margin-right: var(--margin);
}

.menu{
    position: sticky;
    top:0;
    width: 100dvw;
    height: 75px;
    background-color: var(--primary-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.left{
    margin-left: var(--margin);
}

.right{
    margin-right: var(--margin);
}
</style>