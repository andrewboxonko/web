# Generated by Django 2.2.7 on 2020-04-11 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info_rest', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='dish',
            name='composition',
        ),
        migrations.AddField(
            model_name='ingredients',
            name='composition',
            field=models.ManyToManyField(to='info_rest.Dish'),
        ),
    ]