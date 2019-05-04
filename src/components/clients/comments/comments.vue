<template>
    <div class="commentsList">
        <p>{comment.text}</p>
        <p>{comment.createdAt}</p>
    </div>
</template>

<script>
    export default{
        props: ['comment'],
    }
</script>

<style scoped lang="scss">
    $yellow: #ffe300;
    $darkBlue: #1c1e22;
    $gray: #32383e;

</style>
