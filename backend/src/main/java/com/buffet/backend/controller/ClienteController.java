package com.buffet.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.buffet.backend.model.Cliente;
import com.buffet.backend.service.ClienteService;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
public class ClienteController {

	@Autowired
	private ClienteService clienteService;
	
	
	//Rest API - CRUD
	//Create(read) User - POST
	//Read(listar) USer - GET
	//Delete user - DELETE
	//Update User - PUT
	
	//create User
	@PostMapping("/addcliente")
	public Cliente createCliente(@RequestBody Cliente cliente) {
		Cliente cliente1 = clienteService.createCliente(cliente);
		return cliente1;
	}
	
	//Read(listar)
	@GetMapping("/cliente")
	public List<Cliente> getCliente(){
		return clienteService.getCliente();
	}
	
	//update- Put
	@PutMapping("/updatecliente/{id}")
	public Cliente updateClienteById(@RequestBody Cliente cliente, @PathVariable("id") long id) {
		return clienteService.updateCliente(cliente, id);
	}
	
	//Delete user by id
	@DeleteMapping("/deletecliente/{id}")
	public String deleteCliente(@PathVariable("id") long id) {
		clienteService.deleteCliente(id);
		return "Apagado com Sucesso";
	}
	
	//get User by id
	@GetMapping("/cliente/{id}")
	public Cliente getById(@PathVariable("id") long id) {

	return clienteService.getClienteById(id);
	}	
}