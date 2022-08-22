<script>
    import { time_, timePlayer_ } from '../store';

    let progress = 0;

    $:  progress = (100*$time_)/($timePlayer_*1000); 

</script>

<main>
    <div class="position-fixed start-0 top-0 timebar w-100 px-2">
        <div class="progress h-100" style="width: {100 - progress}%; background: rgb({(progress*255)/100}, {255-(progress*220)/100}, 0)">
        </div>
    </div>
    <div class="position-fixed start-50 bottom-0 w-auto d-flex align-items-center justify-content-center  translate-middle-x">
        <div class="time p-1 rounded-top text-center" style="background: rgb({(progress*255)/100}, {255-(progress*220)/100}, 0)">{Math.ceil($timePlayer_ - $time_/1000)}</div>
    </div>
</main>

<style>
    .timebar{
        height: 10px;
    }

    .time{
        width: 60px;
        font-size: 25px;
    }
</style>