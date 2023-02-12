import './App.css'

function App(){

    return (
    <div className="App">
        <Cardlist />
 </div>
  );

}

function Cardlist(){
  const Cardlist = [
    {
      "title": "FREE",
      "price" : "$0",
      "period" : "/month",
      "list": { 
          "list1": "✔ Single User", 
          "list2": "✔ 5GB Storage", 
          "list3": "✔ Unlimited Public Projects",
          "list4": "✔ Community Access",
          "list5": "✖ Unlimited Private Projects",
          "list6": "✖ Dedicated Phone Support",
          "list7": "✖ Free Subdomain",
          "list8": "✖ Monthly Status Reports"
      },
  },

  {
      "title": "PLUS",
      "price" : "$9",
      "period" : "/month",
      "list": { 
          "list1": "✔ 5 Users", 
          "list2": "✔ 50GB Storage", 
          "list3": "✔ Unlimited Public Projects",
          "list4": "✔ Community Access",
          "list5": "✔ Unlimited Private Projects",
          "list6": "✔ Dedicated Phone Support",
          "list7": "✔ Free Subdomain",
          "list8": "✖ Monthly Status Reports"
      },
  },

  {
      "title": "PRO",
      "price" : "$49",
      "period" : "/month",
      "list": { 
          "list1": "✔ Unlimited Users", 
          "list2": "✔ 150GB Storage", 
          "list3": "✔ Unlimited Public Projects",
          "list4": "✔ Community Access",
          "list5": "✔ Unlimited Private Projects",
          "list6": "✔ Dedicated Phone Support",
          "list7": "✔ Unlimited Free Subdomain",
          "list8": "✔ Monthly Status Reports"
      },
  }
  ]
  return (
    <div className='cardlist'>

      {Cardlist.map((cd)=>(
      <Card  data={cd}/>
      ))}
    </div>

  );
}

function Card({ data }){
 return(
   <div className='Container'>
  <h4 className="title">{data.title}</h4>
  <div className="line">
  <h4 className="price">{data.price}</h4>
  <h4 className="period">{data.period}</h4>
  </div>
  <hr className="hzline"></hr>
  <ul className="list">
   <li>{data.list.list1}</li>
   <li>{data.list.list2}</li>
   <li>{data.list.list3}</li>
   <li>{data.list.list4}</li>
   <li>{data.list.list5}</li>
   <li>{data.list.list6}</li>
   <li>{data.list.list7}</li>
   <li>{data.list.list8}</li>
  </ul>
  <a href="#" className="btn">BUTTON</a>
  
 </div> 
);

}

export default App
