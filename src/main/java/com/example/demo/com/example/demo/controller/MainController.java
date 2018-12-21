package com.example.demo.com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Liudmyla Melnychuk on 21.12.2018.
 */
@Controller
public class MainController {
    @RequestMapping(value = "/**/{[path:[^\\.]*}")
    public String index() {
        return "forward:/";
    }
}
