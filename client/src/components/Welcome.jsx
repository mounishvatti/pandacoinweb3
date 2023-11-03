import React, { useContext } from "react";
import { AiFillAlipayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { TransactionContext } from "../context/TransactionContext";
import { Loader } from './';
import { shortenAddress } from "../utils/shortenAddress";

const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
    />
  );

const Welcome = () => {
    const { currentAccount, connectWallet, formData, sendTransaction, handleChange, isLoading } = useContext(TransactionContext);

    const handleSubmit = (e) => {
        const { addressTo, amount, keyword, message } = formData;

        e.preventDefault();

        if(!addressTo || !amount || !keyword || !message) return;

        sendTransaction();
    };
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
                    <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
                        Send Crypto <br /> across the world
                    </h1>
                    <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                        Explore the crypto world. Buy and sell cryptocurrencies easily on PandaCoin.
                    </p>
                    {!currentAccount && (
                       <button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-5 bg-[#5b5d1e] p-3 rounded-full cursor-pointer hover:bg-[#bda425]"
                    >
                        <p className="text-white text-base font-semibold">Connect Wallet</p>
                    </button> 
                    )}
                    
                    <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
                        <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
                            Reliable 😮‍💨
                        </div>
                        <div className={companyCommonStyles}>Secure 🔐</div>
                        <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
                            Ethereum 💠
                        </div>
                        <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
                            Web 3.0 👨🏻‍💻
                        </div>
                        <div className={companyCommonStyles}>Low Fee 💰</div>
                        <div className={`rounded-br-2xl ${companyCommonStyles}`}>
                            Blockchain ⛓️
                        </div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-9 h-9 rounded-full border-2 border-black flex justify-center items-center">
                                    <SiEthereum fontSize={25} color="black" />
                                </div>
                                <BsInfoCircle fontSize={16} color="black" />
                            </div>
                            <div>
                                <p className="text-#666 font-light text-sm">{shortenAddress(currentAccount)}</p>
                                <p className="text-#666 font-semibold text-lg mt-1">Sepolia-ETH</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center yellowgreen-glassmorphism">
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange={handleChange} />
                        <Input placeholder="Amount (ETH)" name="amount" type="number" handleChange={handleChange} />
                        <Input placeholder="Keyword (Gif)" name="keyword" type="text" handleChange={handleChange} />
                        <Input placeholder="Enter Message" name="message" type="text" handleChange={handleChange} />

                        <div className="h-[1px] w-full bg-gray-400 my-2" />
                        
                        {isLoading ? 
                            <Loader />
                         : (
                         <div>
                            <button
                            type="button"
                            onClick={handleSubmit}
                            className="text-white w-full mt-2 border-[1px] p-2 border-[#747c3d] bg-[#4f5529] hover:bg-[#37381f] rounded-full cursor-pointer"
                            >
                                Send now
                            </button>
                         </div>

                        )}
                    </div>

                </div>

            </div>
        </div>

    );
}

export default Welcome;