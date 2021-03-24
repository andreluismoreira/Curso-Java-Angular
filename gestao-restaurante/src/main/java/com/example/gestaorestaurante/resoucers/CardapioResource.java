package com.example.gestaorestaurante.resoucers;

import com.example.gestaorestaurante.model.Cardapio;
import com.example.gestaorestaurante.repository.CardapioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@RestController
@RequestMapping(path ="/api/cardapio")
@CrossOrigin("http://localhost:4200")
public class CardapioResource {

    @Autowired
    private CardapioRepository cardapioRepository;

    // metodo post//
    @PostMapping
    public ResponseEntity<Cardapio> save( @RequestBody Cardapio cardapio) {
        cardapioRepository.save(cardapio);
        return new ResponseEntity<>(cardapio, HttpStatus.OK);
    }

    // metodo getAll
    @GetMapping
    public ResponseEntity<List<Cardapio>> getall() {
        List<Cardapio> cardapios = cardapioRepository.findAll();
        return new ResponseEntity<>(cardapios, HttpStatus.OK);
    }

    //metodo getById
    @GetMapping(path = "/{id}")
    public ResponseEntity<Optional<Cardapio>> getById(@PathVariable Long id){
        Optional<Cardapio> cardapio;
        try {
            cardapio = cardapioRepository.findById(id);
            return new ResponseEntity<>(cardapio, HttpStatus.OK);
        } catch ( NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //metodo Delete
    @DeleteMapping(path = "/{id}")
    public ResponseEntity<Optional<Cardapio>> deleteById(@PathVariable Long id){
        try {
            cardapioRepository.deleteById(id);
            return new ResponseEntity<>( HttpStatus.OK);
        } catch ( NoSuchElementException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    //metodo Put
    @PutMapping(path = "/{id}")
    public ResponseEntity<Cardapio> update(@PathVariable Long id, @RequestBody Cardapio cardapioAtulizado) {
        return cardapioRepository.findById(id)
            .map(cardapio -> {
            cardapio.setName(cardapioAtulizado.getName());
            cardapio.setValue(cardapioAtulizado.getValue());
            Cardapio cardapioAtual = cardapioRepository.save(cardapio);
            return ResponseEntity.ok().body(cardapioAtual);
        }).orElse(ResponseEntity.notFound().build());
    }











}
