export const useWindowSizes = (useState, useLayoutEffect) => {
  const [size, setSize] = useState([0, 0]);
  const [isResponsive, setResponsive] = useState(false);
  let width = null;
  let height = null;
  let responsive = null;

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
      if (window.innerWidth <= 767) {
        setResponsive(true);
      }
      else {
        setResponsive(false);
      }
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  width = size[0];
  height = size[1];
  responsive = isResponsive;
  console.log("width :", width, "height :", height, "isResponsive :", responsive);
};