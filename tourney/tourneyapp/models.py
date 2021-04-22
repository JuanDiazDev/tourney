from django.db import models

class Player(models.Model):
    name = models.CharField(max_length=120)
    team = models.CharField(max_length=120)
    matches_played = models.IntegerField(default=0)
    points = models.IntegerField(default=0)
    wins = models.IntegerField(default=0)
    draws = models.IntegerField(default=0)
    losses = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.name} {self.team}'

    
