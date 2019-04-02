import discord
from discord.ext.commands import Bot
from discord.ext import commands
import asyncio
import time
import random
from discord import Game


Client = discord.client
client = commands.Bot(command_prefix = '!')
Clientdiscord = discord.Client()


@client.event
async def on_ready():
    await client.change_presence(game=Game(name='      '))
    print('Ready, Freddy') 


@client.event
async def on_message(message):
    if message.content == '!homework':
        await client.send_message(message.channel,'roomvroom')
client.login(process.env.NTU2OTM4NjA2MjUwNDI2Mzgx.XKOylg.1jopR1lRVeJk3wDmYGsY5jhmFg4);

