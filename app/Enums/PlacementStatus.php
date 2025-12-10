<?php 
namespace App\Enums;

enum PlacementStatus: string{
    case ATTENDED ='attended';
    case NOT_ATTENDED ='not-attended';
    case CANCELLED ='cancelled';
    case LATE ='late';

}