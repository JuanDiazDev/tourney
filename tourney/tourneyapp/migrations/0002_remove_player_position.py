# Generated by Django 3.2 on 2021-04-21 23:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tourneyapp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='player',
            name='position',
        ),
    ]
