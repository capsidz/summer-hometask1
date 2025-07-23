const friendsContainer = document.getElementById('friendsContainer');
const addFriendBtn = document.getElementById('addFriendBtn');
let friendCount = 0;
const maxFriends = 3;

function createFriendFields() {
    friendCount++;
    const friendId = `friend-${friendCount}`;

    const friendBlock = document.createElement('div');
    friendBlock.className = 'friend-block';
    friendBlock.id = friendId;

    friendBlock.innerHTML = `
            <div class="friend-header">
                <div class="friend-title">Друг ${friendCount}</div>
            </div>
            <div class="form-field">
                <div class="label-frame">
                    <label class="control-name">ФИО друга <span class="label-span">*</span></label>
                </div>
                <div class="control">
                    <input type="text" name="friendName${friendCount}" class="input-text" placeholder="Введите ФИО друга">
                </div>
            </div>
            <div class="form-field">
                <div class="label-frame">
                    <label class="control-name">Email друга <span class="label-span">*</span></label>
                </div>
                <div class="control">
                    <input type="text" name="friendEmail${friendCount}" class="input-text" placeholder="Введите имейл друга">
                </div>
            </div>
            <div class="form-field">
                <div class="label-frame">
                    <label class="control-name">Номер телефона друга <span class="label-span">*</span></label>
                </div>
                <div class="control">
                    <input type="text" name="friendPhone${friendCount}" class="input-text" placeholder="+7 777 77 77">
                </div>
            </div>
        `;

    friendsContainer.appendChild(friendBlock);
    updateAddButton();
}
function updateAddButton() {
    if (friendCount >= maxFriends) {
        addFriendBtn.disabled = true;
        addFriendBtn.classList.add('disabled');
    } else {
        addFriendBtn.disabled = false;
        addFriendBtn.classList.remove('disabled');
    }
}


addFriendBtn.addEventListener('click', function(e) {
    e.preventDefault();
    if (friendCount < maxFriends) {
        createFriendFields();
    }
    updateAddButton();
});
