/**
 Combat routines

 */

COMBAT_INTRO_DELAY = 60;

var combat = new Object();

combat.enemy = ENEMY_SKELETON;
combat.intro_timer = 0;

function combat_logic() {
  
  if (combat.intro_timer > 0) {
    combat.intro_timer--;
    if (combat.intro_timer == 0) redraw = true;
    return;
  }

  if (action_checkuse(BUTTON_POS_ATTACK)) {
    gamestate = STATE_EXPLORE;
    redraw = true;
    return;
  }

  if (action_checkuse(BUTTON_POS_RUN)) {
    gamestate = STATE_EXPLORE;
    redraw = true;
    return;
  }

  action_logic();
}

function combat_render() {
  tileset_background();
  mazemap_render(avatar.x, avatar.y, avatar.facing);
  enemy_render(combat.enemy);
  bitfont_render(enemy.stats[combat.enemy].name, 80, 2, JUSTIFY_CENTER);

  if (combat.intro_timer == 0) {
    info_render_hpmp();
    action_render();
  }
}

