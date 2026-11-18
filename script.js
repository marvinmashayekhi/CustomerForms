const table = document.getElementById("sampleTable");
const params = new URLSearchParams(window.location.search);

const devis = params.get("devis");

if (devis) {

    document.getElementById("devisReference").textContent =
        devis;
}


for(let i = 0 ; i < 15 ; i++)
{
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
            <input
                class="sample-input"
                type="text"
                placeholder="Référence"
            >
        </td>

        <td>
            <input
                class="sample-qty"
                type="number"
                min="1"
                value="1"
            >
        </td>

        <td>
            <input
                class="sample-input"
                type="text"
                placeholder="Nature"
            >
        </td>
    `;

    table.appendChild(row);
}

document
    .getElementById("submitBtn")
    .addEventListener("click", () => {

        alert(
            "✅ Informations transmises avec succès\n\n(Mode POC)"
        );

    });