const exist = await Client.findById(id,function(err:any, client:any){
      if (err) {
        console.log(err);
      } else {
        client.address.push(endereco);
        client.save(function(err: any) {
          if (err) {
            console.log(err);
          } else {
            console.log('Endereço adicionado com sucesso!');
          }
        });
    }
  })