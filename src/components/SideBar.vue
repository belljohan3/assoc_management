<template>
    <div class="flex bg-slate-100">

        <!-- Sidebar -->
        <div class='bg-green-900 text-white h-screen p-5 pt-8 {{ open ? "w-72" : "w-20" }} relative'>
            <BsArrowLeftShort 
                class="
                bg-white text-green-900 
                text-3xl rounded-full absolute 
                -right-3 top-9 border border-green-900 
                cursor-pointer"
                @click="open = !open"
            />

            <!-- logo -->
            <div class="inline-flex">
                <Logo class="h-10 w-10 rounded cursor-pointer mr-2 block float-left"/>
                <h1 class="text-white origin-left font-light -mt-1 text-2xl">Dashboard</h1>
            </div>

            <!-- SearchForm -->
            <div class="flex items-center rounded-md bg-[#ffffff3e] mt-6 px-4 py-2">
                <SearchIcon class="text-white text-lg block float-left cursor-pointer mr-2"/>
                <input type="search" placeholder="Search..." class="text-white text-base bg-transparent w-full focus:outline-none">
            </div>

            <hr class='mt-10'/>

            <div class="mt-5">
                <RouterLink to="/">   
                    <Dashboard class="h-10 w-10 rounded cursor-pointer mr-2 block float-left"/>
                    <h1 class="text-white origin-left font-light -mt-1 text-xl">Tableau de Bord</h1>
                </RouterLink>
            </div>
            
            <div class="mt-4">
                <Settings class="h-10 w-10 rounded cursor-pointer mr-2 block float-left"/>
                <h1 class="text-white origin-left font-light -mt-1 text-xl">Paramètres du Site</h1>
            </div>

            <div class="mt-5">
                <Users class="h-10 w-10 rounded cursor-pointer mr-2 block float-left"/>
                <h1 class="text-white origin-left font-light -mt-1 text-xl">Utilisateurs</h1>
            </div>
        </div>

        <!-- content -->
        <div class="p-7 flex-1">
            <div class="text-2xl font-semibold">Homepage</div>
            <div class="grid grid-cols-4 gap-4 pt-8">
                <div class="border border-gray-300 drop-shadow-2xl h-24 p-2  w-64 bg-white rounded-md">
                    <div class="flex items-center">
                        <h6 class="text-sm text-[#0700007b]">TOTAL ENTREE</h6>
                        <!-- <Users class="ml-20"/> -->
                    </div>
                    <div class="text-2xl font-extrabold">1.000.000 XAF</div>
                </div>
                <div class="border border-gray-300 drop-shadow-2xl h-24 p-2  w-64 bg-white rounded-md">
                    <div class="flex items-center">
                        <h6 class="text-sm text-[#0700007b]">TOTAL ENTREE</h6>
                        <!-- <Users class="ml-20"/> -->
                    </div>
                    <div class="text-2xl font-extrabold">1.000.000 XAF</div>
                </div>
                <div class="border border-gray-300 drop-shadow-2xl h-24 p-2 bg-white rounded-md">TOTAL SORTIE</div>
                <div class="border border-gray-300 drop-shadow-2xl h-24 p-2 bg-white rounded-md">MYSHARE</div>
            </div>
            <hr class='mt-8'/>
            <div class="grid grid-cols-2 gap-4 pt-8 font-extrabold">
                <div class="border border-gray-300 drop-shadow-2xl h-24 bg-white rounded-md">
                    <h1 class="bg-green-700 w-full text-white pl-2 py-2">USERS ACTIONS</h1>
                </div>
                <div class="border border-gray-300 drop-shadow-2xl h-24 bg-white rounded-md">
                    <h1 class="bg-green-700 w-full text-white pl-2 py-2">USERS ACTIONS</h1>
                </div>
                <div class="border border-gray-300 drop-shadow-2xl h-24 p-2 bg-white rounded-md">TOTAL SORTIE</div>
            </div>
        </div>
    </div>
</template>



<script>
    import { ref } from 'vue';
    import BsArrowLeftShort from './icons/BsArrowLeftShort.vue';
    import Logo from './icons/Logo.vue';
    import SearchIcon from './icons/SearchIcon.vue';
    import Dashboard from './icons/Dashboard.vue';
    import Settings from './icons/settings.vue'
    import Users from './icons/Users.vue'

    export default {
        setup() {
            let open = ref(true);
            return {
                open
            }
        },
        components: {
            BsArrowLeftShort,
            Logo, SearchIcon,
            Dashboard, Settings,
            Users
        }
    }
</script>