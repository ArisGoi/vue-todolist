// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

// Bonus:
// Aggiungere lo stato per ogni todo e modificare la visualizzazione dell'elemento in pagina, verde e barrato se il todo è stato fatto o rosso se non è ancora stato fatto.
// Prevedere inoltre un pulsante per modificare lo stato del singolo todo

// Google font: Lato

const app = new Vue({
    el: "#root",
    data:{
        newTodo: "",
        todos: [
            {
                title: "Lavare i piatti",
            },
            {
                title: "Fare la spesa",
            },
            {
                title: "Andare al bar",
            }
        ],

    },
    methods:{
        addTodo: function(){
            // pusho un oggetto todo dentro todos
            this.todos.push(
                {
                    title: this.newTodo,
                }
            );

            // svuoto l'input
            this.newTodo = "";
        },

        removeTodo: function(index){
            this.todos.splice(index, 1)
        },
    },
});