const mongodb = require ('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbName = "task"

mongoClient.connect(connectionUrl , (error,res1) =>{
    if(error){
        return  console.log('error has occurred')
    }
    console.log('All Perf')
    const db = res1.db( dbName )
    /*================== insertOne ================== */
    db.collection('users').insertOne({
            name : 'Shimaa',
            age : 19
        },(error , data) => {
        if(error){
            console.log('Unable to insert Data')
        }
        console.log(data.insertedId)
    })
    /*================== insertOne ================== */
    db.collection('users').insertOne({
                name : 'Reham',
                age : 19
            },(error , data) => {
            if(error){
                console.log('Unable to insert Data')
            }
            console.log(data.insertedId)
        }
    )
    /*================== insertMany ================== */
    db.collection ('users').insertMany(
        [ 
            {
                name: 'Rana',
                age: 19
            },
            {
                name: 'Ghada',
                age: 20
            },
            {
                name: 'Hager',
                age: 13
            },
            {
                name: 'Maha',
                age: 21
            },
            {
                name: 'Mohamed',
                age: 55
            },
            {
                name: 'Esraa',
                age: 27
            },
            {
                name: 'Shrook',
                age: 27
            },
            {
                name: 'Sara',
                age: 27
            },
            {
                name: 'Ahmad',
                age: 27
            },
            {
                name: 'Aya',
                age: 27
            }
        ] , (error,data)=>{
            if(error){
                console.log('Unable to insert data')
            }
            console.log(data.insertedCount)
        } 
    )
    /*================== find ================== */
    db.collection('users').find({ age:27 }).limit(3).toArray((error , users)=>{
            if (error) {
                return console.log('error has occurred')
            }
            console.log(users)
        }
    )
    /*================== updateMany ================== */
    db.collection("users").updateMany({age : 27} , {
            $inc : {age : 4}
        }
    )
    .then((data) =>{console.log(data.modifiedCount)})
    .catch((error)=> console.log(error))
    /*================== updateOne ================== */
    db.collection("users").updateOne({_id:mongodb.ObjectId("643aa44408fbe447b41877a9")},{
            $set:{name : "Shimo" },
        })
    .then((data1)=> {console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})

    db.collection("users").updateOne({_id:mongodb.ObjectId("643aa44408fbe447b41877aa")},{
            $set:{name : "reham A" },
        })
    .then((data1)=> {console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})

    db.collection("users").updateOne({_id:mongodb.ObjectId("643aa44408fbe447b41877ab")},{
            $set:{name : "Rana A" },
        })
    .then((data1)=> {console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})

    db.collection("users").updateOne({_id:mongodb.ObjectId("643aa44408fbe447b41877ac")},{
            $set:{name : "Ghada O" },
        })
    .then((data1)=> {console.log(data1.modifiedCount)})
    .catch((error)=> {console.log(error)})
    /*================== updateMany ================== */
    db.collection("users").updateMany({} , {
            $inc : {age : 10}
        }
    )
    .then((data) =>{console.log(data.modifiedCount)})
    .catch((error)=> console.log(error))
    /*================== delete ================== */
    db.collection("users").deleteMany({age:41})
    .then((data) =>{console.log(data.deletedCount)})
    .catch((error)=> console.log(error))
})