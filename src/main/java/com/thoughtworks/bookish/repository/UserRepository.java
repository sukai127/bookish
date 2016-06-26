package com.thoughtworks.bookish.repository;

import com.thoughtworks.bookish.entity.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, String>{
    User findUserByEmailAndPassword(String email, String password);

    User save(User user);
}
