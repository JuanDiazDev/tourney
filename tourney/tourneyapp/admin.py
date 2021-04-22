from django.contrib import admin
from .models import Player

class PlayerAdmin(admin.ModelAdmin):
    list_display = ('name', 'team',
                    'matches_played', 'points', 'wins', 'draws', 'losses')

# Register your models here.

admin.site.register(Player, PlayerAdmin)
