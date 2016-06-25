package com.thoughtworks.bookish.repository;

import com.thoughtworks.bookish.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends PagingAndSortingRepository<Book, String> {
    Page<Book> findAll(Pageable pageable);

    Book findById(Integer id);
}
