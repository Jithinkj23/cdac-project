package com.example.bookstore.controller;

import com.example.bookstore.model.Order;
import com.example.bookstore.model.Book;
import com.example.bookstore.repository.OrderRepository;
import com.example.bookstore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private BookRepository bookRepository;

    @PostMapping
    public ResponseEntity<Order> placeOrder(@RequestBody Order orderDetails) {
        Book book = bookRepository.findById(orderDetails.getBook().getId()).orElse(null);
        
        if (book == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        
        try {
            orderDetails.setBook(book);
            Order savedOrder = orderRepository.save(orderDetails);
            return new ResponseEntity<>(savedOrder, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderRepository.findAll();
        return new ResponseEntity<>(orders, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        return orderRepository.findById(id)
            .map(order -> new ResponseEntity<>(order, HttpStatus.OK))
            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
}
