# Generated by Django 2.2.7 on 2020-04-11 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info_rest', '0002_auto_20200411_1815'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ingredients',
            old_name='util',
            new_name='unit',
        ),
        migrations.RemoveField(
            model_name='ingredients',
            name='composition',
        ),
        migrations.AddField(
            model_name='dish',
            name='composition',
            field=models.ManyToManyField(to='info_rest.Ingredients'),
        ),
    ]
