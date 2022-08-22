<script>
    import { message_, timeMessage_ } from '../store'

    let output = 'È il turno di Mattia';

    let msgBox;

    let msg = $message_;

    $: msg = $message_;

    function messageChange(m){
        setTimeout(() => {
            msgBox.classList.remove('d-none');
            msgBox.classList.add('d-flex');
            output = msg;
        }, 0);
        

        setTimeout(() => {
            msgBox.classList.add('d-none');
            msgBox.classList.remove('d-flex');
        }, $timeMessage_);
    }

    $: messageChange(msg);

</script>

<main>
    <div class="screen d-none align-items-center justify-content-center position-fixed top-0 start-0" bind:this={msgBox}>
        <div class="text fw-bold">{output}</div>
    </div>
</main>

<style>
    .screen{
        width: 100vw;
        height: 100vh;
        background: rgba(128, 128, 128, 0.6);
    }

    .text{
        font-size: 32px;
    }
</style>