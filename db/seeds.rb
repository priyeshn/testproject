# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

TaskMainCategory.delete_all


TaskMainCategory.create!(
  name: 'Mounting & Installation',
  description:'test'
)

TaskMainCategory.create!(
  name: 'Moving & Packing',
  description:'test'
)

TaskMainCategory.create!(
  name: 'Furniture Assembly',
  description:'test'
)

TaskMainCategory.create!(
  name: 'Home Improvement',
  description:'test'
)

TaskMainCategory.create!(
  name: 'General Handyman',
  description:'test'
)

TaskMainCategory.create!(
  name: 'Heavy Lifting',
  description:'test'
)