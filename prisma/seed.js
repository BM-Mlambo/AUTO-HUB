const {PrismaClient} = require("@prisma/client")
const prisma=new PrismaClient()
async function main(){
    await prisma.car.createMany({
        data:[
            {name:"Toyota Landcruiser", price:8500000, year:2022, mileage:"12,000km", transmission:"automatic", image:"https://images.unsplash.com/photo-1650530579355-7ad9d4766043?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dG95b3RhJTIwbGFuZCUyMGNydWlzZXJ8ZW58MHx8MHx8fDA%3D"},
            {name:"Merceedez Benz", price:9500000, year:2021, mileage:"10,000km", transmission:"automatic", image:"https://images.unsplash.com/photo-1622551997608-400d763b0f64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1lcmNlZGVzJTIwYmVuenxlbnwwfHwwfHx8MA%3D%3D"},
            {name:"Toyota Fielder", price:7500000, year:2020, mileage:"12,000km", transmission:"manual", image:"https://images.unsplash.com/photo-1681495477617-c1f2f7d39599?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG95b3RhJTIwZmllbGRlcnxlbnwwfHwwfHx8MA%3D%3D"},
            {name:"Toyota Hilux", price:8000000, year:2022, mileage:"12,000km", transmission:"automatic", image:"https://images.unsplash.com/photo-1559416523-140ddc3d238c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dG95b3RhJTIwaGlsdXh8ZW58MHx8MHx8fDA%3D"},
            {name:"Subaru Forester", price:9000000, year:2020, mileage:"10,000km", transmission:"automatic", image:"https://images.unsplash.com/photo-1687048988997-ec57f83ea3bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3ViYXJ1JTIwZm9yZXN0ZXJ8ZW58MHx8MHx8fDA%3D"},
            {name:"Toyota Harrier", price:8500000, year:2022, mileage:"12,000km", transmission:"manual", image:"https://images.unsplash.com/photo-1706117948438-826d8018505a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG95b3RhJTIwaGFycmllcnxlbnwwfHwwfHx8MA%3D%3D"}

        ]
    })
    console.log("cars seeded successfully")
}
main()
.catch(console.error)
.finally(()=>prisma.$disconnect)//allways disconnect from db when done.