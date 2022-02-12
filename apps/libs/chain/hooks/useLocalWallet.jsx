import { useState } from 'react';
import * as anchor from '@project-serum/anchor';
import { bs58 } from '@project-serum/anchor/dist/cjs/utils/bytes';
import { useRemix } from 'core/hooks/remix/useRemix';
import { CHAIN_LOCAL_CONNECTION, CHAIN_LOCAL_WALLET } from './state';

export const useLocalWallet = () => {
  const [wallet, setWallet] = useRemix(CHAIN_LOCAL_WALLET);
  const [conn, setConn] = useRemix(CHAIN_LOCAL_CONNECTION);
  const [error, setError] = useState();
  const [waiting, setWaiting] = useState(false);
  const LOCAL_SECRET = 'LOCAL_SECRET';

  // Create a local wallet or use the existing one
  const request = async () => {
    const next_conn = new anchor.web3.Connection('http://localhost:8899');

    // generate a local wallet
    let secret;
    let wallet;
    let local_secret = localStorage.getItem(LOCAL_SECRET);

    // use same wallet from localstorage
    if (local_secret) {
      secret = local_secret;
      wallet = anchor.web3.Keypair.fromSecretKey(bs58.decode(secret));
      setWallet(wallet);
      setConn(next_conn);
    } else {
      // request airdrop
      try {
        setWaiting(true);
        wallet = anchor.web3.Keypair.generate();
        localStorage.setItem(
          LOCAL_SECRET,
          bs58.encode(wallet?._keypair?.secretKey),
        );
        await conn?.requestAirdrop(wallet.publicKey, 1e9 * 10);
        setWaiting(false);
        setWallet(wallet);
        setConn(next_conn);
        setError('');
      } catch (error) {
        setWaiting(false);
        setWallet(null);
        setConn(null);
        setError(error);
      }
    }
  };

  return {
    wallet,
    conn,
    waiting,
    error,
    createLocalWallet: () => {
      setWaiting(true);
      return request();
    },
  };
};
