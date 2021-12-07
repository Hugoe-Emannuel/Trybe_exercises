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
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };


  const customerInfo = (pessoa) => {
    pessoa = `ola ${order.order.delivery.deliveryPerson} entrega para
    ${order.name} telefone ${order.phoneNumber} R.${order.address.street} N
    ${order.address.number} AP ${order.address.apartment}`
    return pessoa
  }
  
 console.log(customerInfo(order));
  
  const orderModifier = (pessoa) => {
    order.name = 'Luiz Silva'
    order.payment.total = 50;
    pessoa = `Ola ${order.name} o total do seu pedido de
   marguerita, pepperoni e Coca-Cola Zero é ${order.payment.total}`;
   return pessoa
  }
  
 console.log(orderModifier(order));