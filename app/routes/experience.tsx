export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto">
      <ul className="rounded-xl p-4 bg-white/5 divide-y divide-white/10">
        <li>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 p-4">
            <div>
              <h3 className="text-white/80 text-lg">Frontend Web Developer</h3>
              <div className="text-sm text-white/30">Xypher Labs Pvt Ltd</div>
            </div>
            <div className="text-sm text-white/30">Apr 2023 - Nov 2024</div>
          </div>
        </li>
        <li>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 p-4">
            <div>
              <h3 className="text-white/80 text-lg">Frontend Web Developer</h3>
              <div className="text-sm text-white/30">Tallentor Pvt Ltd</div>
            </div>
            <div className="text-sm text-white/30">Jan 2022 - Dec 2022</div>
          </div>
        </li>
        <li>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 p-4">
            <div>
              <h3 className="text-white/80 text-lg">Trainee Web Developer</h3>
              <div className="text-sm text-white/30">eBEYONDS Pvt Ltd</div>
            </div>
            <div className="text-sm text-white/30">Sep 2019 - Mar 2020</div>
          </div>
        </li>
      </ul>
    </div>
  );
}
