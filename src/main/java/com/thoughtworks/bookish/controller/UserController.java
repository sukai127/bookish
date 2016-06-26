package com.thoughtworks.bookish.controller;

import com.thoughtworks.bookish.entity.User;
import com.thoughtworks.bookish.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/api")
@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "/user/", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public boolean save(@RequestBody User user) {
        return userService.save(user);
    }
}
