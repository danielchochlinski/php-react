<?php

// src/Controller/NumberController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class AxiosController extends AbstractController
{
    #[Route('/api/numbers', name: 'api_numbers')]
    public function numbers(): JsonResponse
    {
        $numbers = [1, 2, 3, 4, 5];

        return $this->json($numbers);
    }
}
