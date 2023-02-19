<template>
    <div class="col-5 align-self-center h-100 bordering-right d-none d-md-block">
        <div class="continer">
            <div class="row justify-content-center">
                <div class="col-12">
                    <span class="login-quote">
                        {{ strings.quote }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "LeftBarQuote",
    data() {
        return {
            strings: {
                "quote": "Let's Make Some Influencing!",
            }
        }
    },
    props: {},
};
</script>