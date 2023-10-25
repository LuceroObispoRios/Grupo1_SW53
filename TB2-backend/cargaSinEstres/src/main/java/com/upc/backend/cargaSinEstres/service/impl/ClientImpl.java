package com.upc.backend.cargaSinEstres.service.impl;

import com.upc.backend.cargaSinEstres.model.Client;
import com.upc.backend.cargaSinEstres.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClientImpl implements ClientService{

        @Autowired
        private ClientService clientService;

        @Override
        public Client getClientsForLogin(String email, String password) {
            return clientService.getClientsForLogin(email, password);
        }

        @Override
        public Client getClientById(int id) {
            return clientService.getClientById(id);
        }

        @Override
        public Client createClient(Client client) {
            return clientService.createClient(client);
        }

        @Override
        public Client updateClient(int id, Client client) {
            return clientService.updateClient(id, client);
        }

}
