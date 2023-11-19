package com.upc.cargasinestres.CargaSinEstres.repository;

import com.upc.cargasinestres.CargaSinEstres.model.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ICompanyRepository extends JpaRepository<Company, Long> {

    Optional<Company> findByNameAndNumeroContacto(String name, String numeroContacto);
    List<Company> findByEmailAndPassword(String email, String password);
}
