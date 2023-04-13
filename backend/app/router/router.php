<?php

class Router{
    protected $routes = [];

    public function addRoute($method,$path,$handler){
        $this->routes[] = ['method' => $method,'path'=>$path,'handler'=>$handler];
    }

    public function handleRequest() {
        $method = $_SERVER['REQUEST_METHOD'];
        $uri = $_SERVER['REQUEST_URI'];
    
        foreach ($this->routes as $route) {
            if ($route['method'] === $method && preg_match('#^' . $route['path'] . '$#', $uri, $matches)) {
                array_shift($matches);
                $controllerName = $route['handler']['controller'];
                $actionName = $route['handler']['action'];
                $controller = new $controllerName();
                $response = $controller->$actionName(...$matches);
                echo json_encode($response);
                return;
            }
        }
    
        http_response_code(404);
        echo json_encode('404 Not Found');
    }
    
}


?>