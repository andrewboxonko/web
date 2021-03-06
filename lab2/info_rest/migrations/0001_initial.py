# Generated by Django 2.2.7 on 2020-04-11 15:04

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Ingredients',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
                ('stocks', models.IntegerField()),
                ('util', models.CharField(max_length=4)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Dish',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=30)),
                ('composition', models.ForeignKey(on_delete=None, to='info_rest.Ingredients')),
            ],
            options={
                'ordering': ['name'],
            },
        ),
    ]
