import { Box } from "@mui/material";
import "./about.scss";

//clase 49 - 42min

const About = () => {
    return (
        <Box className="about">
            <Box
                component="section"
                className="about__section">
                <h3>Misión</h3>
                <img
                    src="/images/about/mision.png"
                    alt="Fotografia de la misión de la empresa"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quam, similique quisquam ducimus error incidunt. Vel quam at aliquid labore voluptatem minus libero temporibus doloribus ipsam sed, deleniti sint ad, minima aliquam repudiandae maiores earum voluptatum ipsa eos quaerat totam? Hic nemo quidem soluta necessitatibus, nesciunt ducimus. A incidunt, sequi asperiores quos laborum inventore nam natus totam nisi repellat cum, quod earum labore dolore modi distinctio molestiae, impedit omnis alias vel pariatur odio nostrum dolorum adipisci. Impedit facilis eveniet quam iusto hic labore obcaecati rem mollitia, ea dolorem nam fugiat, corporis odio ut deleniti voluptates. Eos dolorem debitis reprehenderit dolore?</p>
            </Box>
            <Box
                component="section"
                className="about__section about__section--vision">
                <h3>Visión</h3>
                <img
                    src="/images/about/vision.png"
                    alt="Fotografia de la misión de la empresa"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quam, similique quisquam ducimus error incidunt. Vel quam at aliquid labore voluptatem minus libero temporibus doloribus ipsam sed, deleniti sint ad, minima aliquam repudiandae maiores earum voluptatum ipsa eos quaerat totam? Hic nemo quidem soluta necessitatibus, nesciunt ducimus. A incidunt, sequi asperiores quos laborum inventore nam natus totam nisi repellat cum, quod earum labore dolore modi distinctio molestiae, impedit omnis alias vel pariatur odio nostrum dolorum adipisci. Impedit facilis eveniet quam iusto hic labore obcaecati rem mollitia, ea dolorem nam fugiat, corporis odio ut deleniti voluptates. Eos dolorem debitis reprehenderit dolore?</p>
            </Box>
            <Box
                component="section"
                className="about__section">
                <h3>Valores</h3>
                <img
                    src="/images/about/valores.png"
                    alt="Fotografia de la misión de la empresa"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quam, similique quisquam ducimus error incidunt. Vel quam at aliquid labore voluptatem minus libero temporibus doloribus ipsam sed, deleniti sint ad, minima aliquam repudiandae maiores earum voluptatum ipsa eos quaerat totam? Hic nemo quidem soluta necessitatibus, nesciunt ducimus. A incidunt, sequi asperiores quos laborum inventore nam natus totam nisi repellat cum, quod earum labore dolore modi distinctio molestiae, impedit omnis alias vel pariatur odio nostrum dolorum adipisci. Impedit facilis eveniet quam iusto hic labore obcaecati rem mollitia, ea dolorem nam fugiat, corporis odio ut deleniti voluptates. Eos dolorem debitis reprehenderit dolore?</p>
            </Box>
        </Box>
    );
};

export default About;