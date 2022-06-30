package com.example.springmysqldemo.repository;

import com.example.springmysqldemo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
