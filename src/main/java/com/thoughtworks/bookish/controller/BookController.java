package com.thoughtworks.bookish.controller;
import com.thoughtworks.bookish.entity.Book;
import com.thoughtworks.bookish.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@RestController
@RequestMapping("/api")
public class BookController {

    @Autowired
    private BookRepository bookRepository;

    @RequestMapping("/books")
    public Page<Book> getBooks(@PageableDefault(value = 15, sort = { "id" }, direction = Sort.Direction.ASC)
                                       Pageable pageable) {
        return bookRepository.findAll(pageable);
    }

    @RequestMapping("/books/{id}")
    public Book getBook(@PathVariable("id") Integer id) {
        return bookRepository.findById(id);
    }
}