export async function POST(req){
    const body=await req.json()
    const message=body.message.toLowerCase()
    let reply="sorry i din't understand that.Try asking about prices, location or contact information."
    if(message.includes("hello")||message.includes("Hi")||message.includes("hey")){
        reply="hello,welcome to Auto Hub how can I help you today?"
    } else if(message.includes("price")||message.includes("cost")){
        reply="Our cars ranges from Ksh 500,000 to 5,000,000 depends on the model"
    }else if(message.includes("Location")||message.includes("where")){
        reply="We are located in Mombasa likoni"
    }else if(message.includes("Contact")||message.includes("phone number")){
        reply="You can contact us via whatsap +254706839535"
    }
    return Response.json({
        reply
    })
}