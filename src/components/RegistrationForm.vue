<template>
    <div class="flex flex-col h-screen justify-center items-center">
        <form class="shadow-xl items-center grid gap-6 grid-cols-1 border rounded-lg bg-slate-100 py-5 px-10">
            <h1 class="text-black text-center text-2xl">ENREGISTREMENT</h1>
            <div class="grid gap-8 grid-cols-2">
                <div>
                    <div>Nom:</div>
                    <input id="name" class="w-64 border border-slate-400 "/>
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
                    <div>Telephone:</div>
                    <input id="number" type="number" placeholder="+237" class="w-64 border border-slate-400" />
                </div>
                <div>
                    <div for="church">Assemblee:</div>
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
                <!-- <div>
                    <div>Confirmation du Mot de Passe:</div>
                    <input type="password" id="confirmpassword" class="w-64 border border-slate-400" />
                </div> -->
            </div>
            <div>
                <button type="submit" class="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">Enregistrer</button>
            </div>
            <div>
                <p class="text-sm font-light">Vous avez deja un compte ? <RouterLink to="/" class="font-bold text-dark underline underline-offset-2">Se Connecter</RouterLink></p>
            </div>
        </form>
    </div>
</template>

<script>

export default {
    data () {
        return {
            name: 'registration',
        }
    },
    methods: {
        onSelect({name, iso2, dialCode}) {
        console.log(name, iso2, dialCode);
    },
  },
}
</script>