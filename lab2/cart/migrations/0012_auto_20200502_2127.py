# Generated by Django 2.2.7 on 2020-05-02 18:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0011_auto_20200502_1953'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='order',
        ),
        migrations.AddField(
            model_name='orderitem',
            name='order',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, related_name='items', to='cart.Order'),
        ),
    ]