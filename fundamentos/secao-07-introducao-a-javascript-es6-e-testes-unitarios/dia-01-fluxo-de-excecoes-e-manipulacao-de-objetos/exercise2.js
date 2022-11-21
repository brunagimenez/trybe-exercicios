const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  


  const customerInfo = (order) => {
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const name = order.name;
    const phoneNumber = order.phoneNumber;
    const addressSteet = order.address.street;
    const addressNumber = order.address.number;
    const addressApartment = order.address.apartment;
    console.log(`'Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${addressSteet}, Nº: ${addressNumber}, AP: 701'.`);
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    const name = order.name = 'Luiz Silva';
    const payment = order.payment.total = '50';
    const pizza = Object.keys(order.order.pizza);
    const drink = order.order.drinks.coke.type
    console.log(`'Olá ${name}, o total do seu pedido de ${pizza[0]}, ${pizza[1]}, e ${drink}, é R$${payment}`);
  }

  orderModifier(order);