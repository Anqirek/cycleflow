
puts "Seeding Customers...🙋🏻🙋🏽‍♂️🙋🏾‍♀️"

20.times do
customer = Customer.create(username:Faker::Name.name, email: Faker::Internet.email, address:Faker::Address.full_address )
end

puts "Seeding Courier...🚚"
20.times do
courier = Courier.create(
    name:Faker::Name.name, 
    email:Faker::Internet.email,
    address:Faker::Address.street_address, 
    rating: rand(1..5))
end

puts "Seeding Items...♳♴♵"
20.times do
item = Item.create(
     bottle:["Plastic","Glass","Metal"].sample,
     size:[
     "50 ml",
     "100 ml",
     "200 ml",
     "500 ml",
     "750 ml",
     "355 ml",
     "12 oz",
     "16 oz",
     "8 oz",
     "12 oz",
     "16.9 oz",
     "500 ml",
     "1 liter"].sample,

     count:rand(25..100), 
     location:Faker::Address.state, 
     customer_id: Customer.all.sample.id)
end

puts "Seeding Pickups...📦"
20.times do
pickup = Pickup.create(item_id: Item.all.sample, courier_id: Courier.all.sample)
end



