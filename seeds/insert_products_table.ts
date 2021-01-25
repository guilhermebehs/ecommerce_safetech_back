import * as Knex from 'knex';

export async function seed (knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('products').del();

  // Inserts seed entries
  await knex('products').insert([
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
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDRsAwiVf1zsLjQ2XpPDMRGqhmgn_Zi3fHZZhr0C6hRErD6iT47Cbp9FUoA&usqp=CAc'
    },
    {
      name: 'The Last Of Us - Part 2',
      price: 189.24,
      description: 'The Last Of Us - Part 2 exclusivo para Playstatio 4.',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/61OZeW%2BpPYL._AC_SX679_.jpg'
    },
    {
      name: 'God Of War 4',
      price: 152.50,
      description: 'God Of War 4 exclusivo para Playstatio 4.',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/A1iZyGhD-rL._AC_SX342_.jpg'
    }
  ]);
};
