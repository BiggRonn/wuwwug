import { useState, useEffect } from "react";
import {projectStorage} from "../firebase/config"

const useStorage = (name, comment) => {
    const storageRef = projectStorage.ref();

}
