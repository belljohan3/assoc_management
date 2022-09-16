<template>
    <div class="flex flex-col h-screen justify-center items-center">
        <form class="shadow-2xl items-center grid gap-3 grid-cols-1 border rounded-lg bg-slate-100 py-5 px-10">
            <h1 class="text-black text-center text-2xl">CONNEXION</h1>
            <div class="grid gap-5 grid-cols-1">
                <div>
                    <div>Username or Email</div>
                    <input id="name" class="w-64 border border-slate-400" placeholder="mail@example.com" required/>
                </div>
                <div>
                    <div>Mot de Passe</div>
                    <input id="password" type="password" class="w-64 border border-slate-400" placeholder="*****" required/>
                </div>
            </div>
            <!-- <div class=" text-black"><hr /></div> -->
            <div>
                <button type="submit" class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">Se Connecter</button>
            </div>
            <hr />
            <div class="">
                <p class="text-sm font-light">Vous n'avez pas un compte ? <a href="http://localhost:8080/registration" class="font-bold underline underline-offset-2">Creer</a></p>
                <p class="text-sm font-light"><a href="#" class="font-light">Mot de Passe Oublie ?</a></p>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                name: 'login'
            }
        },
    }
</script>