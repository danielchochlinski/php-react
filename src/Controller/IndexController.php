<?php

// src/Controller/IndexController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route('/', name: 'app_index')]
    public function index(): Response
    {   
        $numbers = [1, 2, 3, 5];
        return $this->render('index/index.html.twig', [
            'controller_name' => 'IndexController',
            'numbers' => $numbers, // Pass the 'numbers' variable to the template
        ]);
    }
}
