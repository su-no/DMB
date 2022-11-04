$(document).ready(function () {
  show_comment();
});

function delete_comment(num) {
  if (!confirm('방명록을 삭제하시겠습니까?')) return;
  $.ajax({
    type: 'DELETE',
    url: '/guestbook/comments',
    data: { num_give: num },
    success: function (response) {
      alert(response['msg']);
      window.location.reload();
    },
  });
}

function update_comment(num) {
  const newComment = prompt('수정할 내용을 입력해주세요.');
  if (!newComment) {
    alert('수정할 내용이 없습니다.');
    return;
  }
  $.ajax({
    type: 'POST',
    url: '/guestbook/comments/update',
    data: { num_give: num, comment_give: newComment },
    success: function (response) {
      alert(response['msg']);
      window.location.reload();
    },
  });
}

function save_comment() {
  const name = $('#name').val();
  const comment = $('#comment').val();

  $.ajax({
    type: 'POST',
    url: '/guestbook/comments',
    data: { name_give: name, comment_give: comment },
    success: function (response) {
      alert(response['msg']);
      window.location.reload();
    },
  });
}

function show_comment() {
  $('#comment_list').empty();
  $.ajax({
    type: 'GET',
    url: '/guestbook/comments',
    data: {},
    success: function (response) {
      const rows = response['comments'];
      for (let i = 0; i < rows.length; i++) {
        const name = rows[i]['name'];
        const comment = rows[i]['comment'];
        const num = rows[i]['num'];

        const temp_html = ` <div class="card">
                              <div class="card-body">
                                <blackquote class="blockquote mb-0">
                                  <p>${comment}</p>
                                  <footer class="blockquote-footer">${name}</footer>
                                </blackquote>
                                <div class="comment-btns">
                                  <button
                                    id="btn-delete"
                                    onclick="update_comment(${num})"
                                    type="button"
                                    class="btn btn-dark f"
                                  >
                                    수정
                                  </button>
                                  <button
                                    id="btn-delete"
                                    onclick="delete_comment(${num})"
                                    type="button"
                                    class="btn btn-dark f"
                                  >
                                    삭제
                                  </button>
                                </div>
                              </div>`;

        $('#comment-list').append(temp_html);
      }
    },
  });
}
