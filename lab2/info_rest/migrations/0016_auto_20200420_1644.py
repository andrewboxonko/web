# Generated by Django 2.2.7 on 2020-04-20 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info_rest', '0015_auto_20200420_1634'),
    ]

    operations = [
        migrations.AlterField(
            model_name='dish',
            name='image',
            field=models.ImageField(blank=True, default='photo/g_tea.jpg', upload_to='photo/'),
        ),
    ]
