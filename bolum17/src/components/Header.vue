<template>
    <ul class="nav nav-pills">
        <router-link tag="li" active-class="active" exact to="/">
            <a>Home</a>
        </router-link>
        <router-link tag="li" active-class="active" to="/user">
            <a>User</a>
        </router-link>
        <router-link tag="li" active-class="active" to="/user/10">
            <a>User 10</a>
        </router-link>
        <router-link tag="li" active-class="active" to="/users">
            <a>User Start</a>
        </router-link>
    </ul>
</template>