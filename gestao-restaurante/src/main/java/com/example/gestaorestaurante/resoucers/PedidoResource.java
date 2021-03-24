package com.example.gestaorestaurante.resoucers;

import com.example.gestaorestaurante.model.Pedido;
import com.example.gestaorestaurante.repository.PedidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping(path ="/api/pedido")
@CrossOrigin("http://localhost:4200")
public class PedidoResource {

    @Autowired
    private PedidoRepository pedidoRepository;

    // metodo post//
    @PostMapping
    public ResponseEntity<Pedido> save(@RequestBody Pedido pedido) {
        pedidoRepository.save(pedido);
        return new ResponseEntity<>(pedido, HttpStatus.OK);
    }

    // metodo getAll
    @GetMapping
    public ResponseEntity<List<Pedido>> getall() {
        List<Pedido> pedidos = pedidoRepository.findAll();
        return new ResponseEntity<>(pedidos, HttpStatus.OK);
    }

    //metodo getById
    @GetMapping(path = "/{id}")
    public ResponseEntity<Optional<Pedido>> getById(@PathVariable Long id) {
        Optional<Pedido> pedido;
        try {
            pedido = pedidoRepository.findById(id);
            return new ResponseEntity<>(pedido, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //metodo Delete
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Optional<Pedido>> deleteById(@PathVariable Long id) {
        try {
            pedidoRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //metodo Put
    @PutMapping(path = "/{id}")
    public ResponseEntity<Pedido> update(@PathVariable Long id, @RequestBody Pedido pedidoAtualizado) {
        return pedidoRepository.findById(id)
                .map(pedido -> {
                    pedido.setName(pedidoAtualizado.getName());
                    pedido.setValue(pedidoAtualizado.getValue());
                    pedido.setQuant(pedidoAtualizado.getQuant());
                    pedido.setStatus(pedidoAtualizado.getStatus());
                    pedido.setMesa(pedidoAtualizado.getMesa());
                    Pedido pedidoAtual = pedidoRepository.save(pedido);
                    return ResponseEntity.ok().body(pedidoAtual);
                }).orElse(ResponseEntity.notFound().build());
    }

    @ResponseStatus(HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public Map<String, String> handleValidationExceptions(
        MethodArgumentNotValidException ex) {
        Map<String, String> errors = new HashMap<>();
        ex.getBindingResult().getAllErrors().forEach((error) ->{
            String fieldName = ((FieldError) error).getField();
            String errorMessage = error.getDefaultMessage();
            errors.put(fieldName, errorMessage);
        });
        return errors;
    }


}


