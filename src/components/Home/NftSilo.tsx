
const NftSilo = () => {
    return (
        <div className="grid grid-cols-6 gap-4">
            <div className="col-start-1 col-span-2">
                <img className="w-1/2" src={require('./examplenft.png')} />
                CryptoPunk
            </div>

            <div className="col-start-3 col-span-7" >
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>APY</th>
                                <th>Rewards</th>
                                <th>Rewards Expiry</th>
                                <th>TVL</th>
                                <th>Status</th>
                                <th>Service</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>17.33%</td>
                                <td>
                                    <div className="avatar-group -space-x-6">
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>November 14 2022</td>
                                <td>$38,820</td>
                                <td>
                                    Live
                                </td>
                                <td><b>Sudoswap</b></td>
                            </tr>
                            <tr>
                                <td>17.33%</td>
                                <td>
                                    <div className="avatar-group -space-x-6">
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                    </div>
                                </td>

                                <td>November 14 2022</td>
                                <td>$38,820</td>
                                <td>
                                    Live
                                </td>
                                <td><b>Sudoswap</b></td>
                            </tr>
                            <tr>
                                <td>17.33%</td>
                                <td>
                                    <div className="avatar-group -space-x-6">
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                        <div className="avatar">
                                            <div className="w-8">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                    </div>
                                </td>


                                <td>November 14 2022</td>
                                <td>$38,820</td>
                                <td>
                                    Live
                                </td>
                                <td><b>Sudoswap</b></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>


    );
}


export default NftSilo;