const URL = 'http://localhost:5000/api/posts/'
const st = {
  "title": "testt v2",
  "content": "test v2",
  "author": "test v2",
}
const delSt = {
  "_id": "607d668d1c77ba2664e49eb4",
  "title": "testt v23",
  "content": "test v23",
  "author": "test v23",
}

async function Get(){
  try{
     const response = await fetch(URL)
     const data = await response.json()
     const newData = data.map(p =>{
       return p.author
     })
     console.log(newData)
  }catch (e){
    console.log(`Мы в блоке catch ${e}`)
  }
}

async function POSt(){
  try{
     const response = await fetch(URL,{
       method: 'POST',
       mode: 'cors',
       cache: 'no-cache',
       headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify(st)
     })
     const data = await response.json()
     console.log(data)
  }catch (e){
    console.log(`post error ${e} `)
  }
}

async function DELEte(){
  try{
    const response = await fetch(URL,{
      method: 'PUT',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(delSt)
    })
    const data = await response.json()
    console.log(data)
  }catch (e){
    console.log(`del error ${e}`)
  }
}

//DELEte()
//POSt();
Get()