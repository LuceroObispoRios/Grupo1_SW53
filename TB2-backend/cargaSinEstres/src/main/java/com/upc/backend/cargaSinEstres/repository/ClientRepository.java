package com.upc.backend.cargaSinEstres.repository;

import com.upc.backend.cargaSinEstres.model.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ClientRepository extends JpaRepository<Client, Long>{
    Boolean existsByEmailAndPassword(String email, String password);
}
