import pygame
import time
from button import Button
from snakegame import Snakegame
from util import Color
    
WIDTH = 500
HEIGHT = 500
LOWER_MENU_HEIGHT = 100
GAMEWIDTH = 20
GAMEHEIGHT = 20
SQUARESIZE = WIDTH / GAMEWIDTH
LINETHICKNESS = 1
GAME_INTERVAL = 100
snakeGame = Snakegame(GAMEWIDTH, GAMEHEIGHT)
start = Button(5, 510, 100, 30, "Start")

def main():
    running = True
    pygame.init()
    pygame.display.set_caption("Snake game")
    screen = pygame.display.set_mode((WIDTH, HEIGHT + LOWER_MENU_HEIGHT))

    while running:
        if snakeGame.alive:
            mainLoop(snakeGame)
        if snakeGame.alive:
            draw(screen, snakeGame)
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
        time.sleep(GAME_INTERVAL / 2 / 1000.0)
                
                
def mainLoop(snakeGame):
    global running
    snakeGame.step1()
    time.sleep(GAME_INTERVAL / 2 / 1000.0)
    snakeGame.step2(GAMEWIDTH, GAMEHEIGHT)

def draw(screen, snakeGame):
    screen.fill(Color.WHITE)
    start.draw(screen)
    snakeGame.draw(screen, SQUARESIZE)

    
    for i in range(0, GAMEWIDTH + 1):
        pygame.draw.rect(screen, Color.BLACK, (i * SQUARESIZE, 0, LINETHICKNESS, HEIGHT))
    for i in range(0, GAMEHEIGHT + 1):
        pygame.draw.rect(screen, Color.BLACK, (0, i * SQUARESIZE, WIDTH, LINETHICKNESS))
    pygame.display.flip()
    
    


main()