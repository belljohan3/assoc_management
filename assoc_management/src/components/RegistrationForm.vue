<template>
    <div class="flex flex-col h-screen justify-center items-center">
        <form class="shadow-xl items-center grid gap-6 grid-cols-1 border rounded-lg py-5 px-10">
            <h1 class="text-black text-center text-xl">ENREGISTREMENT</h1>
            <div class="grid gap-8 grid-cols-2">
                <div>
                    <div>Nom:</div>
                    <input id="name" class="w-64 px-4 border border-slate-400 "/>
                </div>
                <div>
                    <div>Prenom:</div>
                    <input id="surname" class="w-64 border border-slate-400" />
                </div>
                <div>
                    <div>Date de Naissance:</div>
                    <input id="date-birth" type="date" class="w-64 border border-slate-400" />
                </div>
                <div>
                    <div>Email:</div>
                    <input id="email" type="email" class="w-64 border border-slate-400" />
                </div>
                <div>
                    <div>Numero:</div>
                    <input id="number" type="number" class="w-64 border border-slate-400" />
                </div>
                <div>
                    <div for="church">Ville:</div>
                    <input class="w-64 border border-slate-400" list="churchs" name="church" id="church">

                    <datalist id="churchs">
                        <option value="Yaounde et ses environs"></option>
                        <option value="Douala"></option>
                        <option value="Bafoussam"></option>
                    </datalist>
                </div>
                
            </div>
            <div class="w-96 text-black"><hr /></div>
            <div class="grid gap-8 grid-cols-2">
                <div>
                    <div>Mot de Passe:</div>
                    <input type="password" id="password" class="w-64 border border-slate-400" />
                </div>
                <div>
                    <div>Confirmation du Mot de Passe:</div>
                    <input type="password" id="confirmpassword" class="w-64 border border-slate-400" />
                </div>
            </div>
            <div>
                <button type="submit" class="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">S'enregistrer</button>
            </div>
            <div class="text-center">
                <p class="italic font-light">Vous avez deja un compte ? <a href="#" class="font-bold text-dark">Cliquez ici</a></p>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    
}
</script>