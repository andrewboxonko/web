# Generated by Django 2.2.7 on 2020-04-20 13:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info_rest', '0014_auto_20200420_1628'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dish',
            name='image',
            field=models.ImageField(blank=True, default='uploads/Dino2.jpg', upload_to='uploads//%Y/%m/%d'),
        ),
    ]
