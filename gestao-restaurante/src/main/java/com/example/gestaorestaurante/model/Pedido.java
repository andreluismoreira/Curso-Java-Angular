package com.example.gestaorestaurante.model;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@Entity
public class Pedido {

     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;
     @NotBlank(message = "Nome é obrigatório")
     private String name;
     @NotNull(message = "Valor é obrigatório")
     private Double value;
     @NotNull(message = "Quantidade é obrigatória")
     private Integer quant;
     @NotNull(message = "O numero da Mesa é obrigatório")
     private Integer mesa;
     private String status;






}

