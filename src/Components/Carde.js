import React from 'react'
import { Card ,Button} from 'react-bootstrap'

const Carde = () => {
    const itemArray = [
        {
          imgSrc:" https://assets.swappie.com/iPhone-11-Pro-midnight-green-back.png",
          name: 'Iphone 11',
          price: "1 349,99 $",
        },
        {
          imgSrc: "https://www.cdiscount.com/pdt2/0/4/6/1/700x700/raz8886419358046/rw/razer-blade-15-rz09-03009f76-r3f1-intel-core-i.jpg",
          name: 'Razer Blade',
          price: "7 633,64 $",
        },
       
        {
            imgSrc: "https://www.cdiscount.com/pdt2/0/4/6/1/700x700/raz8886419358046/rw/razer-blade-15-rz09-03009f76-r3f1-intel-core-i.jpg",
            name: 'Razer Blade',
            price: "7 633,64 $",
          },
          {
            imgSrc: "https://www.cdiscount.com/pdt2/0/4/6/1/700x700/raz8886419358046/rw/razer-blade-15-rz09-03009f76-r3f1-intel-core-i.jpg",
            name: 'Razer Blade',
            price: "7 633,64 $",
          },
          {
            imgSrc: "https://www.cdiscount.com/pdt2/0/4/6/1/700x700/raz8886419358046/rw/razer-blade-15-rz09-03009f76-r3f1-intel-core-i.jpg",
            name: 'Razer Blade',
            price: "7 633,64 $",
          },
          {
            imgSrc: "https://www.cdiscount.com/pdt2/0/4/6/1/700x700/raz8886419358046/rw/razer-blade-15-rz09-03009f76-r3f1-intel-core-i.jpg",
            name: 'Razer Blade',
            price: "7 633,64 $",
          },
          {
            imgSrc: "https://www.cdiscount.com/pdt2/0/4/6/1/700x700/raz8886419358046/rw/razer-blade-15-rz09-03009f76-r3f1-intel-core-i.jpg",
            name: 'Razer Blade',
            price: "7 633,64 $",
          },
          {
            imgSrc:" https://assets.swappie.com/iPhone-11-Pro-midnight-green-back.png",
            name: 'Iphone 11',
            price: "1 349,99 $",
          },
          {
            imgSrc: "https://www.cdiscount.com/pdt2/0/4/6/1/700x700/raz8886419358046/rw/razer-blade-15-rz09-03009f76-r3f1-intel-core-i.jpg",
            name: 'Razer Blade',
            price: "7 633,64 $",
          },
         
      ];


    return (
        <div style={{display:"flex",flexWrap: "wrap", marginLeft:50}}>
             { itemArray.map(
                 (el) => (
                 <div style={{marginLeft:50, marginBottom:20}}>
              
                    <Card style={{ width: '18rem', padding:20 }}>
                    <Card.Body>
                      <Card.Title>Card Title
                      {el.name}
      <img  style={{width:100}}src={el.imgSrc}alt=""/>
      {el.price}
                      </Card.Title>
                      <Card.Text>
                       product list
                      </Card.Text>
                      <Button onClick={()=> alert(`the price of ${el.name} is ${el.price}`)} variant="primary">info</Button>
                    </Card.Body>
                  </Card>
                  </div>
  
     ))}
     
        </div>
    )
}

export default Carde
