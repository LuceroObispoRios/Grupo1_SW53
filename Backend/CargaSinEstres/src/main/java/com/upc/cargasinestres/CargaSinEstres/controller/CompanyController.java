package com.upc.cargasinestres.CargaSinEstres.controller;

import com.upc.cargasinestres.CargaSinEstres.model.dto.Company.request.CompanyRequestDto;
import com.upc.cargasinestres.CargaSinEstres.model.dto.Company.response.CompanyResponseDto;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.upc.cargasinestres.CargaSinEstres.service.ICompanyService;

import java.util.List;

@Tag(name="Company")
@RestController
@RequestMapping("/api/v1")
public class CompanyController {

    private final ICompanyService companyService;

    public CompanyController(ICompanyService companyService) {
        this.companyService = companyService;
    }

    @Operation(summary = "Get all companies")
    @GetMapping("/companies")
    public ResponseEntity<List<CompanyResponseDto>> getAllCompanies() {
        var res = companyService.getAllCompanies();
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @Operation(summary = "Get a company by Id")
    @GetMapping("/companies/{id}")
    public ResponseEntity<CompanyResponseDto> getCompanyById(@PathVariable Long id) {
        var res = companyService.getCompanyById(id);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @Operation(summary = "Create a Company")
    @PostMapping("/companies")
    public ResponseEntity<CompanyResponseDto> createCompany(@RequestBody CompanyRequestDto companyRequestDto) {
        var res = companyService.createCompany(companyRequestDto);
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }

    @Operation(summary = "Get companies for login")
    @GetMapping("/companies/login")
    public ResponseEntity<List<CompanyResponseDto>> getCompanyForLogin(@RequestParam(name="email") String email, @RequestParam(name="password")String password){
        var res = companyService.getCompanyForLogin(email, password);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}
