<template>    
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-black dark:text-gray-400">
            <thead class="text-xl text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr class="bg-green-700 text-white">
                    <th scope="col" class="py-3 px-6">ID</th>
                    <th scope="col" class="py-3 px-6">Nom</th>
                    <th scope="col" class="py-3 px-6">Prenom</th>
                    <th scope="col" class="py-3 px-6">Date de Naissance</th>
                    <th scope="col" class="py-3 px-6">Email</th>
                    <th scope="col" class="py-3 px-6">Telephone</th>
                    <th scope="col" class="py-3 px-6">Assemblee</th>
                    <th scope="col" class="py-3 px-6">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in items" :key="item.user_id" class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                    <th scope="row" class="py-4 px-6 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                        {{ item.user_id}}
                    </th>
                    <td class="py-4 px-6">
                        {{ item.user_name }}
                    </td>
                    <td class="py-4 px-6">
                        {{ item.user_surname }}
                    </td>
                    <td class="py-4 px-6">
                        {{ item.user_dob }}
                    </td>
                    <td class="py-4 px-6">
                        {{ item.user_email }}
                    </td>
                    <td class="py-4 px-6">
                        {{ item.user_phone }}
                    </td>
                    <td class="py-4 px-6">
                        {{ item.user_church }}
                    </td>
                    <td class="py-4 px-6 space-x-2">
                        <!-- <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a> -->
                        <a class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                            :to="{ name: 'Edit', params: { id: item.user_id } }">
                            Edit
                        </a>
                        <a class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
                            @click="deleteProduct(item.user_id)">
                            Delete
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
import { RouterLink } from 'vue-router'

export default {
    name:"usersList",
    data() {
        return {
            items: [],
        };
    },
    created() {
        this.getUsers();
    },
    methods: {
        // get all users
        async getUsers() {
            try {
                const response = await axios.get('http://localhost:5000/users');
                this.items = response.data;
            } catch(error) {
                console.error(`Connection au Serveur Indisponible ${error}`)
            }
        },

        //delete a user
        async deleteUser(id) {
            try {
                await axios.delete(`http://localhost:5000/users/${id}`);
                this.getUsers();
            } catch(error) {
                console.error(`Cet utilisateur ne peut pas etre supprimer ${error}`);
            }
        }
    },
}
</script>