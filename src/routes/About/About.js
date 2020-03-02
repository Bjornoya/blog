import React from 'react';
import Header from "../../components/Header/Header";
import style from './About.module.scss';
import AboutImg from '../../assets/img/about.jpg';
const About = () => {
    return (
        <>
            <Header />
            <div className={style.container}>
                <img className={style.img} src={AboutImg} alt="About image" />
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                   dolore magna aliqua. Ut tortor pretium viverra suspendisse potenti nullam. Eget mi proin sed libero.
                   Dignissim diam quis enim lobortis scelerisque. In vitae turpis massa sed elementum. Nunc pulvinar sapien
                   et ligula ullamcorper malesuada. Nec nam aliquam sem et. Dictum varius duis at consectetur lorem donec
                   massa sapien faucibus. Sit amet nisl purus in mollis. Habitant morbi tristique senectus et netus et.
                   Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Mauris in aliquam sem fringilla.
                   Morbi quis commodo odio aenean sed adipiscing diam donec.</p>

                <p>Massa tempor nec feugiat nisl pretium. Ac orci phasellus egestas tellus. Viverra justo nec ultrices dui
                    sapien eget mi proin. Dui id ornare arcu odio ut sem nulla pharetra. Volutpat lacus laoreet non curabitur.
                    Vel eros donec ac odio. Posuere urna nec tincidunt praesent semper feugiat nibh. Tempus quam pellentesque
                    nec nam aliquam sem et. At urna condimentum mattis pellentesque id nibh tortor id. Massa id neque
                    aliquam vestibulum morbi blandit cursus risus at. Vel pharetra vel turpis nunc eget lorem. Turpis cursus
                    in hac habitasse platea. Morbi blandit cursus risus at ultrices mi. Dignissim convallis aenean et tortor.</p>

                <p>Diam quis enim lobortis scelerisque fermentum. Quisque id diam vel quam. Elit sed vulputate mi sit.
                    Quisque egestas diam in arcu cursus euismod quis viverra nibh. Cras tincidunt lobortis feugiat vivamus
                    at augue eget. Aliquam sem et tortor consequat id porta nibh venenatis cras. Lectus sit amet est placerat
                    in egestas erat imperdiet sed. Sed odio morbi quis commodo odio. Commodo viverra maecenas accumsan lacus
                    vel facilisis. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Tellus id interdum velit laoreet.
                    Non odio euismod lacinia at quis. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque.
                    Commodo ullamcorper a lacus vestibulum sed arcu. Posuere sollicitudin aliquam ultrices sagittis orci a
                    scelerisque purus. A arcu cursus vitae congue mauris. Feugiat in ante metus dictum at tempor. Consequat
                    interdum varius sit amet mattis vulputate enim. Adipiscing elit pellentesque habitant morbi tristique
                    senectus et netus et.</p>

                <p>Neque aliquam vestibulum morbi blandit cursus risus at ultrices mi. Turpis egestas integer eget aliquet.
                    Mauris commodo quis imperdiet massa tincidunt nunc. Hendrerit gravida rutrum quisque non tellus orci ac
                    auctor augue. Lacinia at quis risus sed vulputate odio ut enim blandit. Tristique nulla aliquet enim
                    tortor. Tellus molestie nunc non blandit. Eget mi proin sed libero enim sed. Magna eget est lorem ipsum
                    dolor sit amet consectetur. Faucibus interdum posuere lorem ipsum dolor. Diam sollicitudin tempor id eu
                    nisl nunc mi. Odio morbi quis commodo odio aenean sed adipiscing. Lorem ipsum dolor sit amet consectetur
                    adipiscing elit pellentesque.</p>

                <p>Condimentum id venenatis a condimentum vitae. Velit scelerisque in dictum non consectetur a. Tristique
                    magna sit amet purus gravida quis blandit. Purus sit amet luctus venenatis. Facilisis gravida neque
                    convallis a cras semper auctor. Varius quam quisque id diam vel quam elementum. Integer enim neque
                    volutpat ac. Sed vulputate mi sit amet mauris commodo quis. Vel facilisis volutpat est velit egestas.
                    Lectus urna duis convallis convallis tellus id interdum velit laoreet. Quis hendrerit dolor magna eget
                    est lorem ipsum. Tristique et egestas quis ipsum suspendisse. Sed egestas egestas fringilla phasellus
                    faucibus scelerisque. Lorem donec massa sapien faucibus et molestie. Facilisis leo vel fringilla est
                    ullamcorper eget nulla facilisi etiam. Gravida cum sociis natoque penatibus et magnis dis.</p>
            </div>
        </>
    );
};

export default About;