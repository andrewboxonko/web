# Generated by Django 2.2.7 on 2020-04-19 20:07

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('info_rest', '0011_dish_category'),
    ]

    operations = [
        migrations.AlterIndexTogether(
            name='dish',
            index_together={('id', 'slug')},
        ),
    ]
