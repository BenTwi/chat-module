BENTWI.events.on('twitch.chat', (CHAT) => {
    console.log(CHAT);

    const FRAGMENTS = CHAT.message.fragments;
    const BADGES_FRAG = CHAT.badges;
    const MESSAGE_FRAGMENTED = [];
    const USER_FRAGMENTED = [];

    FRAGMENTS.forEach(fragment => {
        if (fragment.type === "emote") {
            MESSAGE_FRAGMENTED.push(`<img src='${fragment.emote.image_url_1x}' class="emote">`);
        } else {
            MESSAGE_FRAGMENTED.push(fragment.text);
        }
    });

    BADGES_FRAG.forEach(badge => {
            USER_FRAGMENTED.push(`<img src='${badge.image_url_1x}' class="emote">`);
    });

    // Join fragments with a space to prevent concatenation issues
    const MESSAGE = MESSAGE_FRAGMENTED.join(" ");
    const BADGES = USER_FRAGMENTED.join(" ");

    appendTwitchMessage(
        { username: CHAT.chatter_user_name, color: CHAT.color },
        MESSAGE,
        BADGES
    );
});