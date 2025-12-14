'use client';
import { useRef, useState } from 'react';
import styles from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
    const [image, setImage] = useState(null);
    const imageInputRef = useRef();

    function handlePickImage() {
        imageInputRef.current.click();
    };


    function handleImageChange(event) {
        const file = event.target.files[0];
        if (!file) {
            return;
        }
        setImage(file);
    }

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <input
                    className={styles.input}
                    type="file"
                    id={name}
                    accept='image/png, image/jpeg'
                    name={name}
                    ref={imageInputRef}
                    onChange={handleImageChange}
                />

                <button className={styles.button} type='button' onClick={handlePickImage}>
                    Pick Image
                </button>
            </div>
        </div>
    )
}