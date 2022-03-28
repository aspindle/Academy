import React from 'react';
import { Link } from 'react-router-dom';
import mag from '../imgs/icon-magnet.gif';
import tub from '../imgs/icon-youtube.jpg';

export default function Resources() {
    return (
        <>

        <Link to="/">Back</Link>
        <h1>Resources</h1>
        {/*<img src={mag} className="mag" alt="magnet link"/> 
        <a href="magnet:?xt=urn:btih:29836D8AC9511C7D4237AF2C4A2E87F0E740BD9D&dn=TI-84+Plus+Silver+Edition+%28OS+version+2.55MP%29+ROM&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.dler.org%3A6969%2Fannounce&tr=udp%3A%2F%2Fopentracker.i2p.rocks%3A6969%2Fannounce&tr=udp%3A%2F%2F47.ip-51-68-199.eu%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.internetwarriors.net%3A1337%2Fannounce&tr=udp%3A%2F%2F9.rarbg.to%3A2920%2Fannounce&tr=udp%3A%2F%2Ftracker.pirateparty.gr%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.cyberia.is%3A6969%2Fannounce">
            TI 84 Calculator ROM</a>*/}
        
        <br />
        <a href="magnet:?xt=urn:btih:12d12d35a45e2142b6a698c1b9a8447768e712d5&dn=SpindlerAcademyExampleVideo.mkv&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.openbittorrent.com:6969">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/watch?v=_j-sUfeqNUU">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
           Example Spindler Academy video 
        <br />
        
        {/*------------ */}
        <a href="magnet:?xt=urn:btih:964b8e675e118920dc92c148ee2a9526d9dba32e&dn=HowToTorrentFinal.mpeg&tr=http://tracker.bt4g.com:2095/announce&tr=udp://tracker.openbittorrent.com:6969&tr=udp://exodus.desync.com:6969/announce&tr=udp://retracker.hotplug.ru:2710/announce&tr=https://tracker.loligirl.cn:443/announce&tr=udp://code2chicken.nl:6969/announce&tr=http://t.nyaatracker.com:80/announce&tr=udp://open.xxtor.com:3074/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://open.stealth.si:80/announce&tr=http://buny.uk:6969/announce&tr=udp://tracker.moeking.eu.org:6969/announce&tr=udp://tracker.beeimg.com:6969/announce&tr=https://tr.torland.ga:443/announce&tr=https://tracker.iriseden.fr:443/announce&tr=https://t.btcland.xyz:443/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://tracker.moeking.me:6969/announce&tr=udp://tracker.dix.tf:6969/announce&tr=https://tr.burnabyhighstar.com:443/announce&tr=https://tr.highstar.shop:443/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=http://tracker.ipv6tracker.ru:80/announce&tr=https://trackme.theom.nz:443/announce&tr=https://t1.tokhmi.xyz:443/announce&tr=udp://www.torrent.eu.org:451/announce&tr=https://tracker.nanoha.org:443/announce&tr=https://tracker.kuroy.me:443/announce&tr=udp://tracker6.lelux.fi:6969/announce&tr=udp://tracker.sylphix.com:6969/announce&tr=https://tr.fuckbitcoin.xyz:443/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://tracker.theoks.net:6969/announce&tr=udp://ipv6.tracker.monitorit4.me:6969/announce&tr=https://tr.doogh.club:443/announce&tr=udp://bt.oiyo.tk:6969/announce&tr=https://tracker.lilithraws.cf:443/announce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/watch?v=XCMPke6Wrgc">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            How To Torrent 
        <br />

        {/*------------ */}

        <a href="magnet:?xt=urn:btih:5f62788fa5d2022a856c49f8d0f212471089b8bf&dn=What%20is%20a%20Username%20and%20Password.mpeg&tr=udp://tracker.moeking.me:6969/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=https://tr.doogh.club:443/announce&tr=udp://bt.oiyo.tk:6969/announce&tr=https://t.btcland.xyz:443/announce&tr=https://tr.burnabyhighstar.com:443/announce&tr=udp://tracker.dix.tf:6969/announce&tr=https://tr.highstar.shop:443/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=https://t1.tokhmi.xyz:443/announce&tr=udp://open.xxtor.com:3074/announce&tr=udp://retracker.hotplug.ru:2710/announce&tr=https://tracker.kuroy.me:443/announce&tr=udp://tracker.moeking.eu.org:6969/announce&tr=udp://ipv6.tracker.monitorit4.me:6969/announce&tr=https://tracker.loligirl.cn:443/announce&tr=https://trackme.theom.nz:443/announce&tr=http://tracker.bt4g.com:2095/announce&tr=https://tracker.nanoha.org:443/announce&tr=udp://open.stealth.si:80/announce&tr=https://tracker.iriseden.fr:443/announce&tr=http://tracker.ipv6tracker.ru:80/announce&tr=udp://tracker.sylphix.com:6969/announce&tr=udp://tracker.theoks.net:6969/announce&tr=udp://www.torrent.eu.org:451/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.beeimg.com:6969/announce&tr=udp://tracker.openbittorrent.com:6969&tr=http://buny.uk:6969/announce&tr=udp://exodus.desync.com:6969/announce&tr=https://tr.torland.ga:443/announce&tr=udp://tracker6.lelux.fi:6969/announce&tr=udp://code2chicken.nl:6969/announce&tr=http://t.nyaatracker.com:80/announce&tr=https://tracker.lilithraws.cf:443/announce&tr=https://tr.fuckbitcoin.xyz:443/announce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/watch?v=87Qra_AEkYs">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            What is a Username and Password? 
        <br />

        {/*------------ */}

        <a href="magnet:?xt=urn:btih:530b57125d54fccaf21e800a79d7d76282d0744e&dn=intro_to_www.mp4&tr=udp://tracker.theoks.net:6969/announce&tr=udp://tracker.moeking.me:6969/announce&tr=http://buny.uk:6969/announce&tr=udp://bt.oiyo.tk:6969/announce&tr=https://tracker.kuroy.me:443/announce&tr=udp://www.torrent.eu.org:451/announce&tr=http://tracker.bt4g.com:2095/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=http://tracker.ipv6tracker.ru:80/announce&tr=https://tr.torland.ga:443/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=https://tracker.nanoha.org:443/announce&tr=https://t1.tokhmi.xyz:443/announce&tr=udp://tracker.openbittorrent.com:6969&tr=https://tr.fuckbitcoin.xyz:443/announce&tr=http://t.nyaatracker.com:80/announce&tr=udp://open.xxtor.com:3074/announce&tr=https://trackme.theom.nz:443/announce&tr=udp://retracker.hotplug.ru:2710/announce&tr=https://tr.burnabyhighstar.com:443/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://tracker.moeking.eu.org:6969/announce&tr=udp://tracker6.lelux.fi:6969/announce&tr=udp://code2chicken.nl:6969/announce&tr=https://tracker.loligirl.cn:443/announce&tr=udp://ipv6.tracker.monitorit4.me:6969/announce&tr=https://tr.highstar.shop:443/announce&tr=udp://tracker.dix.tf:6969/announce&tr=https://tr.doogh.club:443/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://open.stealth.si:80/announce&tr=https://tracker.lilithraws.cf:443/announce&tr=udp://tracker.sylphix.com:6969/announce&tr=udp://tracker.beeimg.com:6969/announce&tr=https://t.btcland.xyz:443/announce&tr=https://tracker.iriseden.fr:443/announce&tr=udp://tracker.opentrackr.org:1337/announce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://youtu.be/jABU9Iu3AXA">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            Introduction to the Internet 
        <br />

        {/*------------ */}

        <a href="magnet:?xt=urn:btih:85930a065a68cfc44932ea815c45dfde6182569d&dn=The_Solar_System.mkv&tr=udp://open.xxtor.com:3074/announce&tr=https://tr.highstar.shop:443/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://code2chicken.nl:6969/announce&tr=https://tracker.lilithraws.cf:443/announce&tr=https://trackme.theom.nz:443/announce&tr=https://tracker.loligirl.cn:443/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=http://t.nyaatracker.com:80/announce&tr=udp://tracker.dix.tf:6969/announce&tr=udp://bt.oiyo.tk:6969/announce&tr=http://tracker.ipv6tracker.ru:80/announce&tr=udp://tracker.openbittorrent.com:6969&tr=udp://tracker.moeking.me:6969/announce&tr=udp://tracker.theoks.net:6969/announce&tr=http://buny.uk:6969/announce&tr=https://tr.fuckbitcoin.xyz:443/announce&tr=udp://tracker.beeimg.com:6969/announce&tr=udp://tracker6.lelux.fi:6969/announce&tr=http://tracker.bt4g.com:2095/announce&tr=udp://www.torrent.eu.org:451/announce&tr=https://tracker.kuroy.me:443/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://retracker.hotplug.ru:2710/announce&tr=https://tracker.iriseden.fr:443/announce&tr=https://tr.torland.ga:443/announce&tr=https://tracker.nanoha.org:443/announce&tr=udp://tracker.sylphix.com:6969/announce&tr=https://tr.burnabyhighstar.com:443/announce&tr=udp://ipv6.tracker.monitorit4.me:6969/announce&tr=udp://open.stealth.si:80/announce&tr=https://t.btcland.xyz:443/announce&tr=https://tr.doogh.club:443/announce&tr=udp://tracker.moeking.eu.org:6969/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=https://t1.tokhmi.xyz:443/announce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/watch?v=M1SoyKBR5lA">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            The Solar System 
        <br />

        {/*------------ */}

        <a href="magnet:?xt=urn:btih:46b99df2990ad2a38e6c0f35e808616772daa031&dn=The%20FOIL%20Method%20vs%20the%20BOX%20Method.mkv&tr=https%3a%2f%2ftr.highstar.shop%3a443%2fannounce&tr=https%3a%2f%2ftr.burnabyhighstar.com%3a443%2fannounce&tr=http%3a%2f%2fbuny.uk%3a6969%2fannounce&tr=https%3a%2f%2ft.btcland.xyz%3a443%2fannounce&tr=https%3a%2f%2ftr.fuckbitcoin.xyz%3a443%2fannounce&tr=http%3a%2f%2ftracker.ipv6tracker.ru%3a80%2fannounce&tr=https%3a%2f%2ftrackme.theom.nz%3a443%2fannounce&tr=udp%3a%2f%2ftracker.beeimg.com%3a6969%2fannounce&tr=udp%3a%2f%2fipv6.tracker.monitorit4.me%3a6969%2fannounce&tr=https%3a%2f%2ftr.doogh.club%3a443%2fannounce&tr=udp%3a%2f%2ftracker.birkenwald.de%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2ftracker.sylphix.com%3a6969%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.cf%3a443%2fannounce&tr=udp%3a%2f%2fretracker.hotplug.ru%3a2710%2fannounce&tr=https%3a%2f%2ftr.torland.ga%3a443%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=https%3a%2f%2ft1.tokhmi.xyz%3a443%2fannounce&tr=https%3a%2f%2ftracker.iriseden.fr%3a443%2fannounce&tr=udp%3a%2f%2fopen.xxtor.com%3a3074%2fannounce&tr=udp%3a%2f%2fcode2chicken.nl%3a6969%2fannounce&tr=http%3a%2f%2ftracker.bt4g.com%3a2095%2fannounce&tr=udp%3a%2f%2ftracker6.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.cyberia.is%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969&tr=udp%3a%2f%2fbt.oiyo.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.eu.org%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=udp%3a%2f%2ftracker.dix.tf%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=https%3a%2f%2ftracker.loligirl.cn%3a443%2fannounce&tr=https%3a%2f%2ftracker.kuroy.me%3a443%2fannounce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/watch?v=v0QtlvOyif8">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            The FOIL Method vs The BOX Method
        <br />

        {/*------------ */}

        <a href="magnet:?xt=urn:btih:abc66638e733cefb566dd2b2cdff6db9eb49b540&dn=mean_median_mode_range.mkv&tr=https%3a%2f%2ftracker.kuroy.me%3a443%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.cf%3a443%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker6.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.birkenwald.de%3a6969%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=https%3a%2f%2ft.btcland.xyz%3a443%2fannounce&tr=https%3a%2f%2ftr.doogh.club%3a443%2fannounce&tr=udp%3a%2f%2fretracker.hotplug.ru%3a2710%2fannounce&tr=udp%3a%2f%2fopen.xxtor.com%3a3074%2fannounce&tr=https%3a%2f%2ftr.torland.ga%3a443%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.sylphix.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969&tr=https%3a%2f%2ftrackme.theom.nz%3a443%2fannounce&tr=https%3a%2f%2ftr.fuckbitcoin.xyz%3a443%2fannounce&tr=udp%3a%2f%2ftracker.moeking.eu.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.cyberia.is%3a6969%2fannounce&tr=http%3a%2f%2fbuny.uk%3a6969%2fannounce&tr=https%3a%2f%2ftr.highstar.shop%3a443%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=http%3a%2f%2ftracker.ipv6tracker.ru%3a80%2fannounce&tr=udp%3a%2f%2fipv6.tracker.monitorit4.me%3a6969%2fannounce&tr=https%3a%2f%2ftracker.iriseden.fr%3a443%2fannounce&tr=udp%3a%2f%2fbt.oiyo.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fcode2chicken.nl%3a6969%2fannounce&tr=https%3a%2f%2ftr.burnabyhighstar.com%3a443%2fannounce&tr=https%3a%2f%2ft1.tokhmi.xyz%3a443%2fannounce&tr=udp%3a%2f%2ftracker.beeimg.com%3a6969%2fannounce&tr=http%3a%2f%2ftracker.bt4g.com%3a2095%2fannounce&tr=https%3a%2f%2ftracker.loligirl.cn%3a443%2fannounce&tr=udp%3a%2f%2ftracker.dix.tf%3a6969%2fannounce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/watch?v=MrPS8RiwFnQ">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            Mean Median Mode and Range
        <br />

        {/*------------ */}

         <a href="magnet:?xt=urn:btih:1e75cde87c5c1d190d5cf2ae1072f86a0a26757f&dn=MAD.mkv&tr=https%3a%2f%2ftracker.lilithraws.cf%3a443%2fannounce&tr=udp%3a%2f%2ftracker6.lelux.fi%3a6969%2fannounce&tr=https%3a%2f%2ftr.fuckbitcoin.xyz%3a443%2fannounce&tr=udp%3a%2f%2ftracker.sylphix.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.beeimg.com%3a6969%2fannounce&tr=https%3a%2f%2ftrackme.theom.nz%3a443%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=https%3a%2f%2ftr.doogh.club%3a443%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.moeking.eu.org%3a6969%2fannounce&tr=http%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=https%3a%2f%2ftracker.kuroy.me%3a443%2fannounce&tr=https%3a%2f%2ftracker.loligirl.cn%3a443%2fannounce&tr=https%3a%2f%2ftr.torland.ga%3a443%2fannounce&tr=udp%3a%2f%2fcode2chicken.nl%3a6969%2fannounce&tr=http%3a%2f%2ftracker.bt4g.com%3a2095%2fannounce&tr=udp%3a%2f%2fopen.xxtor.com%3a3074%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2fipv6.tracker.monitorit4.me%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=https%3a%2f%2ftr.burnabyhighstar.com%3a443%2fannounce&tr=udp%3a%2f%2ftracker.cyberia.is%3a6969%2fannounce&tr=https%3a%2f%2ft.btcland.xyz%3a443%2fannounce&tr=https%3a%2f%2ftr.highstar.shop%3a443%2fannounce&tr=udp%3a%2f%2ftracker.dix.tf%3a6969%2fannounce&tr=http%3a%2f%2ftracker.ipv6tracker.ru%3a80%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=http%3a%2f%2fbuny.uk%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.hotplug.ru%3a2710%2fannounce&tr=https%3a%2f%2ft1.tokhmi.xyz%3a443%2fannounce&tr=udp%3a%2f%2ftracker.birkenwald.de%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt.oiyo.tk%3a6969%2fannounce&tr=https%3a%2f%2ftracker.iriseden.fr%3a443%2fannounce&tr=http%3a%2f%2fbt2.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://youtu.be/YOJUX3EAaQM">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            Mean Absolute Deviation (MAD)
        <br />

        {/*------------ */}

        <a href="magnet:?xt=urn:btih:09b9b3a47e3f64dc9f3fd29ca914a030c6c31f1d&dn=Box%20Plot%20Histogram%20IQR.mkv&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fopen.xxtor.com%3a3074%2fannounce&tr=https%3a%2f%2ftracker.iriseden.fr%3a443%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.cyberia.is%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.beeimg.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969&tr=http%3a%2f%2fbt2.archive.org%3a6969%2fannounce&tr=https%3a%2f%2ftr.highstar.shop%3a443%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.birkenwald.de%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.eu.org%3a6969%2fannounce&tr=http%3a%2f%2ftracker.ipv6tracker.ru%3a80%2fannounce&tr=https%3a%2f%2ftr.torland.ga%3a443%2fannounce&tr=udp%3a%2f%2ftracker.sylphix.com%3a6969%2fannounce&tr=https%3a%2f%2ft.btcland.xyz%3a443%2fannounce&tr=https%3a%2f%2ftr.burnabyhighstar.com%3a443%2fannounce&tr=https%3a%2f%2ftr.doogh.club%3a443%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.cf%3a443%2fannounce&tr=http%3a%2f%2fbuny.uk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker6.lelux.fi%3a6969%2fannounce&tr=https%3a%2f%2ftracker.loligirl.cn%3a443%2fannounce&tr=udp%3a%2f%2fcode2chicken.nl%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dix.tf%3a6969%2fannounce&tr=http%3a%2f%2ftracker.bt4g.com%3a2095%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=https%3a%2f%2ftrackme.theom.nz%3a443%2fannounce&tr=http%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=https%3a%2f%2ftr.fuckbitcoin.xyz%3a443%2fannounce&tr=https%3a%2f%2ft1.tokhmi.xyz%3a443%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2fipv6.tracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.hotplug.ru%3a2710%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=udp%3a%2f%2fbt.oiyo.tk%3a6969%2fannounce&tr=https%3a%2f%2ftracker.kuroy.me%3a443%2fannounce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/watch?v=qIFPCmRjCQQ">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            Histograms Box Plots and Interquartile Range 
        <br />

        {/*------------ */}

        <a href="magnet:?xt=urn:btih:19b05ed53899e974653533aa04790f64b023fb89&dn=squares%20and%20square%20root.mkv&tr=https%3a%2f%2ftr.torland.ga%3a443%2fannounce&tr=udp%3a%2f%2ftracker.dix.tf%3a6969%2fannounce&tr=udp%3a%2f%2fipv6.tracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.beeimg.com%3a6969%2fannounce&tr=udp%3a%2f%2fbt.oiyo.tk%3a6969%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=http%3a%2f%2fbuny.uk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=https%3a%2f%2ftrackme.theom.nz%3a443%2fannounce&tr=https%3a%2f%2ftr.fuckbitcoin.xyz%3a443%2fannounce&tr=http%3a%2f%2ftracker.bt4g.com%3a2095%2fannounce&tr=udp%3a%2f%2fopen.xxtor.com%3a3074%2fannounce&tr=udp%3a%2f%2fcode2chicken.nl%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.sylphix.com%3a6969%2fannounce&tr=https%3a%2f%2ftracker.iriseden.fr%3a443%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=https%3a%2f%2ftr.doogh.club%3a443%2fannounce&tr=https%3a%2f%2ft.btcland.xyz%3a443%2fannounce&tr=udp%3a%2f%2ftracker.birkenwald.de%3a6969%2fannounce&tr=https%3a%2f%2ftracker.kuroy.me%3a443%2fannounce&tr=https%3a%2f%2ft1.tokhmi.xyz%3a443%2fannounce&tr=https%3a%2f%2ftr.burnabyhighstar.com%3a443%2fannounce&tr=https%3a%2f%2ftracker.loligirl.cn%3a443%2fannounce&tr=http%3a%2f%2ftracker.ipv6tracker.ru%3a80%2fannounce&tr=udp%3a%2f%2ftracker.cyberia.is%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=udp%3a%2f%2ftracker.moeking.eu.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2fretracker.hotplug.ru%3a2710%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=https%3a%2f%2ftr.highstar.shop%3a443%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=http%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=udp%3a%2f%2ftracker6.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.cf%3a443%2fannounce&tr=http%3a%2f%2fbt2.archive.org%3a6969%2fannounce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://youtu.be/M7oNYWcEITM">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            Squares and Square Roots 
        <br />

        {/*------------ */}

        <a href="magnet:?xt=urn:btih:95d7ac6f48d378029b9c9210ce99dd4da04adb71&dn=standard%20deviation.mkv&tr=udp%3a%2f%2fbt.oiyo.tk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969&tr=udp%3a%2f%2ftracker.sylphix.com%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=http%3a%2f%2ftracker.ipv6tracker.ru%3a80%2fannounce&tr=udp%3a%2f%2fipv6.tracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2fopen.xxtor.com%3a3074%2fannounce&tr=http%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.birkenwald.de%3a6969%2fannounce&tr=https%3a%2f%2ft1.tokhmi.xyz%3a443%2fannounce&tr=https%3a%2f%2ftrackme.theom.nz%3a443%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=https%3a%2f%2ftr.burnabyhighstar.com%3a443%2fannounce&tr=https%3a%2f%2ftracker.kuroy.me%3a443%2fannounce&tr=https%3a%2f%2ftr.highstar.shop%3a443%2fannounce&tr=http%3a%2f%2fbuny.uk%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.beeimg.com%3a6969%2fannounce&tr=https%3a%2f%2ftr.torland.ga%3a443%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=udp%3a%2f%2ftracker.cyberia.is%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.dix.tf%3a6969%2fannounce&tr=https%3a%2f%2ftracker.iriseden.fr%3a443%2fannounce&tr=https%3a%2f%2ftr.doogh.club%3a443%2fannounce&tr=http%3a%2f%2ftracker.bt4g.com%3a2095%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.cf%3a443%2fannounce&tr=udp%3a%2f%2ftracker.moeking.eu.org%3a6969%2fannounce&tr=http%3a%2f%2fbt2.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2ftracker6.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce&tr=udp%3a%2f%2fretracker.hotplug.ru%3a2710%2fannounce&tr=https%3a%2f%2ftracker.loligirl.cn%3a443%2fannounce&tr=https%3a%2f%2ftr.fuckbitcoin.xyz%3a443%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=https%3a%2f%2ft.btcland.xyz%3a443%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=udp%3a%2f%2fcode2chicken.nl%3a6969%2fannounce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://youtu.be/DWG6x8kZV5A">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            Standard Deviation 
        <br />

        {/*------------ */}

        <a href="magnet:?xt=urn:btih:0e51cd9e0ac7bce92b1b6dbc28d5db081b534eef&dn=ping%20and%20standard%20deviation.mkv&tr=https%3a%2f%2ftracker.kuroy.me%3a443%2fannounce&tr=http%3a%2f%2fbt2.archive.org%3a6969%2fannounce&tr=https%3a%2f%2ft.btcland.xyz%3a443%2fannounce&tr=udp%3a%2f%2ftracker.torrent.eu.org%3a451%2fannounce&tr=http%3a%2f%2ft.nyaatracker.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.dix.tf%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.cyberia.is%3a6969%2fannounce&tr=http%3a%2f%2ftracker.ipv6tracker.ru%3a80%2fannounce&tr=udp%3a%2f%2fwww.torrent.eu.org%3a451%2fannounce&tr=https%3a%2f%2ftracker.loligirl.cn%3a443%2fannounce&tr=udp%3a%2f%2fexodus.desync.com%3a6969%2fannounce&tr=https%3a%2f%2ft1.tokhmi.xyz%3a443%2fannounce&tr=http%3a%2f%2fbt1.archive.org%3a6969%2fannounce&tr=udp%3a%2f%2fcode2chicken.nl%3a6969%2fannounce&tr=https%3a%2f%2ftr.burnabyhighstar.com%3a443%2fannounce&tr=udp%3a%2f%2ftracker.beeimg.com%3a6969%2fannounce&tr=udp%3a%2f%2fipv6.tracker.monitorit4.me%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.birkenwald.de%3a6969%2fannounce&tr=https%3a%2f%2ftracker.nanoha.org%3a443%2fannounce&tr=udp%3a%2f%2ftracker.moeking.me%3a6969%2fannounce&tr=https%3a%2f%2ftr.torland.ga%3a443%2fannounce&tr=http%3a%2f%2fbuny.uk%3a6969%2fannounce&tr=https%3a%2f%2ftr.fuckbitcoin.xyz%3a443%2fannounce&tr=https%3a%2f%2ftr.highstar.shop%3a443%2fannounce&tr=http%3a%2f%2ftracker.bt4g.com%3a2095%2fannounce&tr=udp%3a%2f%2ftracker.moeking.eu.org%3a6969%2fannounce&tr=https%3a%2f%2ftracker.lilithraws.cf%3a443%2fannounce&tr=udp%3a%2f%2fbt.oiyo.tk%3a6969%2fannounce&tr=udp%3a%2f%2fopen.stealth.si%3a80%2fannounce&tr=https%3a%2f%2ftrackme.theom.nz%3a443%2fannounce&tr=udp%3a%2f%2fopen.xxtor.com%3a3074%2fannounce&tr=udp%3a%2f%2ftracker.sylphix.com%3a6969%2fannounce&tr=udp%3a%2f%2fretracker.hotplug.ru%3a2710%2fannounce&tr=udp%3a%2f%2ftracker6.lelux.fi%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a6969&tr=https%3a%2f%2ftr.doogh.club%3a443%2fannounce&tr=https%3a%2f%2ftracker.iriseden.fr%3a443%2fannounce&tr=udp%3a%2f%2ftracker.theoks.net%3a6969%2fannounce&tr=udp%3a%2f%2ftracker.opentrackr.org%3a1337%2fannounce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/watch?v=wPpHuyXfbyQ">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            Ping and Standard Deviation 
        <br />




         {/*------------ */}
         <br />
        <a href="magnet:?xt=urn:btih:0c5410f92a5090ce68dcc65545d0135468a9fd65&dn=Modern%20Cryptography&tr=http://buny.uk:6969/announce&tr=https://tr.doogh.club:443/announce&tr=udp://tracker6.lelux.fi:6969/announce&tr=udp://tracker.openbittorrent.com:6969&tr=udp://www.torrent.eu.org:451/announce&tr=udp://tracker.moeking.eu.org:6969/announce&tr=https://tr.torland.ga:443/announce&tr=udp://tracker.moeking.me:6969/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=https://t1.tokhmi.xyz:443/announce&tr=udp://bt.oiyo.tk:6969/announce&tr=https://tracker.loligirl.cn:443/announce&tr=https://tracker.nanoha.org:443/announce&tr=http://tracker.ipv6tracker.ru:80/announce&tr=https://trackme.theom.nz:443/announce&tr=https://tr.burnabyhighstar.com:443/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=http://t.nyaatracker.com:80/announce&tr=udp://tracker.sylphix.com:6969/announce&tr=udp://tracker.dix.tf:6969/announce&tr=https://t.btcland.xyz:443/announce&tr=https://tracker.lilithraws.cf:443/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://code2chicken.nl:6969/announce&tr=http://tracker.bt4g.com:2095/announce&tr=https://tr.fuckbitcoin.xyz:443/announce&tr=udp://tracker.beeimg.com:6969/announce&tr=udp://tracker.theoks.net:6969/announce&tr=https://tracker.iriseden.fr:443/announce&tr=udp://open.stealth.si:80/announce&tr=https://tracker.kuroy.me:443/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://ipv6.tracker.monitorit4.me:6969/announce&tr=udp://open.xxtor.com:3074/announce&tr=https://tr.highstar.shop:443/announce&tr=udp://retracker.hotplug.ru:2710/announce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/playlist?list=PL-SStBoAJuw0vj8MgTFhY5y9wSFnjGbOB">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            Introduction to Cryptography (UCSD)
        <br />

         {/*------------ */}

         <a href="magnet:?xt=urn:btih:4955dead511f0427c1340022a1709ec31fbe0f80&dn=Web%20Security&tr=http://tracker.ipv6tracker.ru:80/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce&tr=udp://tracker.dix.tf:6969/announce&tr=udp://tracker.theoks.net:6969/announce&tr=udp://code2chicken.nl:6969/announce&tr=https://tracker.nanoha.org:443/announce&tr=https://tracker.iriseden.fr:443/announce&tr=udp://tracker.sylphix.com:6969/announce&tr=http://buny.uk:6969/announce&tr=udp://tracker6.lelux.fi:6969/announce&tr=udp://open.stealth.si:80/announce&tr=https://trackme.theom.nz:443/announce&tr=https://tracker.kuroy.me:443/announce&tr=udp://tracker.moeking.me:6969/announce&tr=https://t1.tokhmi.xyz:443/announce&tr=http://tracker.bt4g.com:2095/announce&tr=udp://tracker.birkenwald.de:6969/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://retracker.hotplug.ru:2710/announce&tr=https://tr.fuckbitcoin.xyz:443/announce&tr=https://tr.highstar.shop:443/announce&tr=udp://bt.oiyo.tk:6969/announce&tr=http://t.nyaatracker.com:80/announce&tr=udp://www.torrent.eu.org:451/announce&tr=https://tr.burnabyhighstar.com:443/announce&tr=udp://ipv6.tracker.monitorit4.me:6969/announce&tr=https://tr.doogh.club:443/announce&tr=https://tracker.lilithraws.cf:443/announce&tr=https://t.btcland.xyz:443/announce&tr=udp://open.xxtor.com:3074/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=https://tracker.loligirl.cn:443/announce&tr=https://tr.torland.ga:443/announce&tr=udp://tracker.openbittorrent.com:6969&tr=udp://tracker.beeimg.com:6969/announce&tr=udp://tracker.moeking.eu.org:6969/announce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/playlist?list=PL1y1iaEtjSYiiSGVlL1cHsXN_kvJOOhu-">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            Web Security (Stanford)
        <br />

         {/*------------ */}

        <a href="magnet:?xt=urn:btih:a1165ef4677f73048e00483908d7f7b7d9268c45&dn=Machine%20Learning%20Fundamentals&tr=udp://ipv6.tracker.monitorit4.me:6969/announce&tr=udp://tracker.moeking.me:6969/announce&tr=https://tracker.kuroy.me:443/announce&tr=https://tracker.loligirl.cn:443/announce&tr=udp://tracker.beeimg.com:6969/announce&tr=https://tr.burnabyhighstar.com:443/announce&tr=https://tracker.iriseden.fr:443/announce&tr=http://buny.uk:6969/announce&tr=udp://open.stealth.si:80/announce&tr=udp://exodus.desync.com:6969/announce&tr=https://tr.highstar.shop:443/announce&tr=udp://bt.oiyo.tk:6969/announce&tr=https://t.btcland.xyz:443/announce&tr=udp://tracker.dix.tf:6969/announce&tr=http://t.nyaatracker.com:80/announce&tr=https://trackme.theom.nz:443/announce&tr=udp://tracker6.lelux.fi:6969/announce&tr=https://tracker.lilithraws.cf:443/announce&tr=udp://www.torrent.eu.org:451/announce&tr=https://tracker.nanoha.org:443/announce&tr=udp://tracker.cyberia.is:6969/announce&tr=udp://open.xxtor.com:3074/announce&tr=http://tracker.ipv6tracker.ru:80/announce&tr=https://tr.doogh.club:443/announce&tr=https://tr.fuckbitcoin.xyz:443/announce&tr=udp://tracker.torrent.eu.org:451/announce&tr=udp://code2chicken.nl:6969/announce&tr=https://tr.torland.ga:443/announce&tr=https://t1.tokhmi.xyz:443/announce&tr=udp://retracker.hotplug.ru:2710/announce&tr=http://tracker.bt4g.com:2095/announce&tr=udp://tracker.sylphix.com:6969/announce&tr=udp://tracker.moeking.eu.org:6969/announce&tr=udp://tracker.theoks.net:6969/announce&tr=udp://tracker.openbittorrent.com:6969&tr=udp://tracker.birkenwald.de:6969/announce&tr=udp://tracker.opentrackr.org:1337/announce">
            <img src={mag} className="mag" alt="magnet link"/>
        </a>
        <a href="https://www.youtube.com/playlist?list=PLxQSlOe-wlgAG_A_6ES9hpD_2-gm1D-UY">
            <img src={tub} className="tub" alt="youtube link"/>
        </a>
            Machine Learning (UCSD)
        <br />

         {/*------------ */}
        
        
       {/*<img src={tub} className="tub" alt="youtube link"/>
        <a href="https://www.youtube.com/watch?v=6F0pR-ANmXY&list=PLchkeZ4DkEwcUwOmNZiVh4nfxGaEcQ6Im">
            Computer Graphics (UCSD)
        </a>*/}
        </>
    )
}