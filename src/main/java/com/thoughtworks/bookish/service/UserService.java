package com.thoughtworks.bookish.service;

import com.thoughtworks.bookish.entity.User;
import com.thoughtworks.bookish.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    public boolean login(User user) {
        User currentUser = userRepository.findUserByEmailAndPassword(user.getEmail(), user.getPassword());
        return currentUser != null;
    }

    public boolean save(User user) {
        User currentUser = userRepository.save(user);
        return currentUser.getId() != null;
    }
}
