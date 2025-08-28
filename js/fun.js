const call_history = [];

for (let i = 1; i <= 10; i++) {
    let b = "call" + i;
    let w = "what" + i;
    let h = "how" + i;

    document.getElementById(b).addEventListener("click", function () {
        let avlb_coin = parseInt(document.getElementById("available_coin").innerText);

        if (avlb_coin < 20) {
            alert("You can't make a call due to low star");
            return;
        }

        const send_what = document.getElementById(w).innerText;
        const send_how = document.getElementById(h).innerText;

        alert("Service: "+send_what+"\nNumber: "+send_how);

        const o = { what: send_what, how: send_how };

        call_history.push(o);

        avlb_coin = avlb_coin - 20;
        document.getElementById("available_coin").innerText = avlb_coin;

        const child= document.createElement("div");
        child.className="flex justify-between items-center mt-5 bg-gray-100 rounded-xl p-2";
        child.innerHTML=`
        <div>
                <div class="font-semibold">${send_what}</div>
                <div class="text-gray-600">${send_how}</div>
            </div>
            <div>${new Date().toLocaleTimeString()}</div>
        `
        document.getElementById('father').appendChild(child);
    });
}
