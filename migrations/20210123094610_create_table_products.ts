import * as Knex from 'knex';

export async function up (knex: Knex): Promise<void> {
  return knex.schema.createTable('products', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.decimal('price').notNullable();
    table.string('description').notNullable();
    table.string('imageUrl', 200).nullable();
    table.dateTime('createdAt').notNullable().defaultTo(knex.fn.now());
  });
}

export async function down (knex: Knex): Promise<void> {
  return knex.schema.dropTable('products');
}
