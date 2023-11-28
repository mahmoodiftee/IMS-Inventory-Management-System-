import logo from "../../../../../assets/man.png"
import logo1 from "../../../../../assets/woman.png"

const TableComponent = () => {
  return (
    <div className="overflow-x-auto bg-gradient-to-r from-blue-200 to-cyan-200 px-4 rounded-2xl">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={logo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak
              <br />
            </td>
            <td>Purple</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={logo1} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm">China</div>
                </div>
              </div>
            </td>
            <td>
              Carroll Group
              <br />
              </td>
            <td>Red</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          {/* row 3 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={logo} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                  <div className="text-sm">Russia</div>
                </div>
              </div>
            </td>
            <td>
              Rowe-Schoen
              <br />
              </td>
            <td>Crimson</td>
            <th>
              <button className="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default TableComponent;
