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
      name: 'God Of War 3',
      price: 97.00,
      description: 'God Of War 3 exclusivo para Playstation.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/pt/6/6c/God_of_War_3_capa.png'
    },
    {
      name: 'God Of War 4',
      price: 152.50,
      description: 'God Of War 4 exclusivo para Playstatio 4.',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/A1iZyGhD-rL._AC_SX342_.jpg'
    },
    {
      name: 'Ghost of Tsushima',
      price: 140.50,
      description: 'Ghost of Tsushima para Playstation 4.',
      imageUrl: 'https://ireland.apollo.olxcdn.com/v1/files/506tzdkl4l3v-PT/image;s=1000x700'
    },
    {
      name: 'GTA V',
      price: 152.50,
      description: 'GTA V edição Premium para Xbox One.',
      imageUrl: 'https://cdn.awsli.com.br/600x450/53/53761/produto/31278293/7b4ddcdb37.jpg'
    },
    {
      name: 'Monitor Led Philips',
      price: 398.50,
      description: 'Monitor Led Philips Full HD com Webcam integrada.',
      imageUrl: 'https://a-static.mlcdn.com.br/210x210/monitor-led-23-philips-241b7qpjkeb-238-full-hd-com-webcam-e-microfone-saida-vga-hdmi-dp/mizon/9941423848/26ae502d9ca4ee97366c3a5c6e89f30e.jpg'
    },
    {
      name: 'Conversor HDMI para VGA',
      price: 32.60,
      description: 'Cabo adaptador HDMI para VGA.',
      imageUrl: 'https://a-static.mlcdn.com.br/618x463/cabo-adaptador-conversor-hdmi-para-vga-chenhao/hypermega/7899767245877/07f56362c08b8e5ab628dbe46b27f1d0.jpg'
    },
    {
      name: 'Cartão pré-pago Steam',
      price: 250,
      description: 'Cartão pré-pago Steam com o valor de 50 dólares.',
      imageUrl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6577/6577073_sa.jpg'
    }

  ]);
};
