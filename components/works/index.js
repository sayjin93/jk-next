import { useRef, useState, useEffect } from 'react';
import { _multiDimensionalUnique } from '../../helpers'

import styles from './index.module.scss'

const worksArr = [
    {
        id: 1,
        name: "SavaTours",
        image: "",
        url: "",
        filter: ["website"]
    },
    {
        id: 2,
        name: "BlueWaterClub",
        image: "",
        url: "",
        filter: ["website"]
    },
    {
        id: 3,
        name: "Pantelis Pantelidis",
        image: "",
        url: "",
        filter: ["website"]
    },
    {
        id: 4,
        name: "Illyrian Plugin",
        image: "",
        url: "",
        filter: ["wordpress plugin"]
    },
    {
        id: 5,
        name: "Oria LA Beauty Home",
        image: "oria",
        url: "",
        filter: ["business card"]
    },
    {
        id: 6,
        name: "AlbTourist Experience",
        image: "",
        url: "",
        filter: ["business card"]
    },
    {
        id: 7,
        name: "BodyCode",
        image: "",
        url: "",
        filter: ["others"]
    },
    {
        id: 8,
        name: "Arsenal Athletic",
        image: "",
        url: "",
        filter: ["logo"]
    },
    {
        id: 9,
        name: "BulletProof",
        image: "",
        url: "",
        filter: ["logo"]
    },
    {
        id: 10,
        name: "Venaria",
        image: "",
        url: "",
        filter: ["logo"]
    },
    {
        id: 11,
        name: "H&M Consulting",
        image: "HMConsulting",
        url: "",
        filter: ["logo"]
    },
    {
        id: 12,
        name: "Morix",
        image: "",
        url: "",
        filter: ["logo"]
    },
    {
        id: 13,
        name: "Quaranta",
        image: "",
        url: "",
        filter: ["others"]
    },


];

export default function Works() {
    // init one ref to store the future isotope object
    const isotope = useRef();
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = useState('*');
    //store coordinates in a state
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 });

    useEffect(() => {
        // initialize an Isotope object with configs
        isotope.current = new Isotope('.isotope', { itemSelector: '.item', layoutMode: 'fitRows' });

        // 👇️ get global mouse coordinates
        const handleWindowMouseMove = event => {
            setGlobalCoords({
                x: event.screenX,
                y: event.screenY,
            });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        // cleanup
        return () => {
            isotope.current.destroy();
            window.removeEventListener('mousemove', handleWindowMouseMove);
        };
    }, [])

    // handling filter key change
    useEffect(() => {
        filterKey === '*'
            ? isotope.current.arrange({ filter: `*` })
            : isotope.current.arrange({ filter: `.${filterKey}` });
    }, [filterKey]);

    const handleFilterKeyChange = key => () => setFilterKey(key);

    const handleMouseMove = event => {
        setCoords({
            x: event.clientX - event.target.offsetLeft,
            y: event.clientY - event.target.offsetTop,
        });
    };


    const createFiltersArray = () => {
        //Create initial array with 'All' element included
        let array = [{ label: 'all', fx: '*' }];

        //Itenerate through worksArr and push filter elements into array
        worksArr.forEach((element) => {
            const workFilters = element.filter;
            workFilters.forEach((element) => {
                const filterLabel = element;
                const filterFx = element.toString().toLocaleLowerCase().replace(/\s/g, "");
                array.push({ label: filterLabel, fx: filterFx });
            });
        });

        //Remove duplicated and empty elements from array
        let cleanedArray = _multiDimensionalUnique(array);

        //Check if 'others' filter exist and move to end
        const index = cleanedArray.findIndex(e => e.label == 'others')
        if (index > -1) cleanedArray.push(cleanedArray.splice(index, 1)[0]);


        return cleanedArray;
    }

    return (
        <>
            <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js" />

            <div id="works" className="section">
                <div className="container">
                    <h1 className="title">Creative Works</h1>

                    {/* Filters */}
                    <div className={styles.filterCon}>
                        {
                            createFiltersArray().map(function (element) {
                                return (
                                    <div
                                        key={`works_filter_${element.label}_key`}
                                        onClick={handleFilterKeyChange(`${element.fx}`)}
                                        className={`${styles.filter} ${filterKey === element.fx ? styles.active : ""}`}>
                                        {element.label}
                                    </div>
                                )
                            })
                        }
                    </div>

                    {/* Isotope */}
                    <div className="isotope">
                        {worksArr.map(function (element) {
                            const renderFilter = () => {
                                const filter = element.filter;
                                let array = [];
                                filter.forEach((element) => {
                                    array.push(element.toLocaleLowerCase().replace(/\s/g, ""));
                                });
                                return array.join(" ");
                            }

                            const renderImage = () => {
                                const name = element.name;
                                let image = element.image;
                                let imageUrl = `/images/works/${name.toLocaleLowerCase().replace(/\s/g, "")}/1.jpg`;

                                if (image) {
                                    imageUrl = `/images/works/${image}/1.jpg`;
                                }

                                return [imageUrl, name];
                            }

                            const renderTitle = (name) => {
                                // if (coords.visible) {
                                return (
                                    <div className={styles.hoverTitle} style={{ left: `${coords.x}px`, top: `${coords.y}px` }}>{name}
                                        <span className={styles.category}>{"Kategoria"}</span>
                                    </div>
                                )
                                // }
                            }

                            return (
                                <a
                                    key={`works_${element.id}_key`}
                                    href='#'
                                    className={`item ${renderFilter()}`}
                                >
                                    <div className='inner'>
                                        <img src={renderImage()[0]}
                                        // onMouseMove={handleMouseMove}
                                        />

                                        {/* {renderTitle(renderImage()[1])} */}
                                    </div>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}