package com.example.springmysqldemo.controller;

import com.example.springmysqldemo.model.User;
import com.example.springmysqldemo.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@Slf4j
@CrossOrigin
@RestController
@RequestMapping("/api/")
public class UserController {

    @Autowired
    private UserService userService;

    // URI - /api/users

    @GetMapping("/users")
    public ResponseEntity<List<User>> listAllUsers()  {
        List<User> users = userService.listAll();
        return new ResponseEntity<List<User>> (users, HttpStatus.OK);
    }

    // URI - /api/user/id/1
    @GetMapping("/user/id/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(name = "id") final Long userId) {
        try {
            final User user = userService.get(userId);
            return new ResponseEntity<User>(user, HttpStatus.OK);
        } catch (NoSuchElementException e ) {
            return  new ResponseEntity<User>(HttpStatus.NOT_FOUND);
        }
    }

    // URI - /api/user/save
    @PostMapping("/user/save")
    public ResponseEntity<User> save(@RequestBody User user) {
        userService.save(user);
        return new ResponseEntity<User>(user, HttpStatus.CREATED);
    }

    // URI - /api/user/delete/id/1
    @DeleteMapping("/user/delete/id/{id}")
    public ResponseEntity<User> delete(@PathVariable(name = "id") final Long userId) {
        userService.delete(userId);
        return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
    }

    // dont need this
//    @CrossOrigin(value = "*")
//    @RequestMapping(value = "/health")
//    @GetMapping()
//    public ResponseEntity<?> health() throws Exception {
//        try {
//            return ResponseEntity.status(200).body("Ok");
//        } catch (Exception e) {
//            return (ResponseEntity<?>)  ResponseEntity.internalServerError().body(e.getMessage());
//        }
//    }
}
