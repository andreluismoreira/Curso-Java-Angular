package com.example.gestaorestaurante.repository;

import com.example.gestaorestaurante.model.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PedidoRepository extends JpaRepository<Pedido, Long> {

}
