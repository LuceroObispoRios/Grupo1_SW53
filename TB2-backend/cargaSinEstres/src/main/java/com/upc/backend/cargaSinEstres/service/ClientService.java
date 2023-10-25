package com.upc.backend.cargaSinEstres.service;
import com.upc.backend.cargaSinEstres.model.Client;
public interface ClientService {

    //GET
    public abstract Client getClientsForLogin(String email, String password);

    public abstract Client getClientById(int id);


    //CREATE
    public abstract Client createClient(Client client);


    //UPDATE
    public abstract Client updateClient(int id, Client client);

}
