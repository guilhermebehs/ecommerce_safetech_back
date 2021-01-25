import { IProductCreate } from './../dto/IProduct';
const data:Array<IProductCreate> =
[
  {
    name: 'Fones de Ouvido',
    price: 250.50,
    description: 'Fones de ouvido da marca JBL, com fio, e muito confortáveis.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mdfhfyJcAW8NUc5MjozctP506Q05nOa1sHS-q4LhTIOKTzD-KhtaBjzh9g&usqp=CAc'
  },
  {
    name: 'Notebook Dell',
    price: 3050.90,
    description: 'Notebook com processor i7, 8 GB de memória RAM, e disco rígido de 2 TB',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosbRhqMKDVcXpIAZimGUHxSPgJFanVtopwceakpFH_ArdgePGEeB49_2Iuxfz4Fm2qUE67qnv&usqp=CAc'
  },
  {
    name: 'Cadeira Gamer DT3',
    price: 1200,
    description: 'Cadeira ergométrica, excelente pra quem tem problemas de coluna',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBqeEA96WjMQAWBJ0wuk9gHsG9oXt0JBF_bW5tl_Cxactq_FzzqaE6g0mhmVLJe77v9lERDkjk&usqp=CAc'
  },
  {
    name: 'Mousepad',
    price: 23.50,
    description: 'Mousepad ideal ideal pra evitar tendinite.',
    imageUrl: 'data:image/jpeg;base64,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'
  }
];

export default data;