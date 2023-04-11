<?php

class Router{
    protected $routes = [];

    public function addRoute($method,$path,$handler){
        $this->routes[] = ['method' => $method,'path'=>$path,'handler'=>$handler];
    }

    public function handleRequest(){
        $method = $_SERVER['REQUEST_METHOD'];
        $uri = $_SERVER['REQUEST_URI'];

        foreach($this->routes as $route){
            if($route['method'] === $method && preg_match('#^'.$route['path'] . '$#',$uri,$matches)){
                array_shift($matches);
                $controllerName = $route['controller'];
                $actionName = $route['action'];
                $controller = new $controllerName();
                return $controller->$actionName(...$matches);
            }
        }



        http_response_code(404);
        echo '404 Not Found';
    }
}


?>