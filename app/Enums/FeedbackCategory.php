<?php

namespace App\Enums;

enum FeedbackCategory: string{
    case CLINICAL_SKILLS ='clinical-skills';
    case PROFESSIONALISM ='professionalism';
    case COMMUNICATION ='communication';
    case WRITTEN ='written';
}

