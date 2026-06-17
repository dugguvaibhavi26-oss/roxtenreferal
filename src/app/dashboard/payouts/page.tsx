"use client";
import { useState } from "react";
import { Plus, Edit2, Trash2, CheckCircle2, AlertCircle, Building2, Smartphone } from "lucide-react";

type BankDetail = {
  id: string;
  accountName: string;
  accountNumber: string;
  bankName: string;
  ifsc: string;
};

type UpiDetail = {
  id: string;
  upiId: string;
};

export default function PayoutsPage() {
  // Bank Account State
  const [bankAccounts, setBankAccounts] = useState<BankDetail[]>([
    {
      id: "1",
      accountName: "John Doe",
      accountNumber: "XXXXXXXXX1234",
      bankName: "HDFC Bank",
      ifsc: "HDFC0001234",
    }
  ]);
  const [isAddingBank, setIsAddingBank] = useState(false);
  const [editingBankId, setEditingBankId] = useState<string | null>(null);
  const [bankFormData, setBankFormData] = useState({
    accountName: "",
    accountNumber: "",
    bankName: "",
    ifsc: "",
  });

  // UPI ID State
  const [upiIds, setUpiIds] = useState<UpiDetail[]>([]);
  const [isAddingUpi, setIsAddingUpi] = useState(false);
  const [editingUpiId, setEditingUpiId] = useState<string | null>(null);
  const [upiFormData, setUpiFormData] = useState({
    upiId: "",
  });

  // --- Bank Account Handlers ---
  const handleSaveBank = () => {
    if (editingBankId) {
      setBankAccounts(bankAccounts.map(b => b.id === editingBankId ? { ...bankFormData, id: editingBankId } : b));
      setEditingBankId(null);
    } else {
      setBankAccounts([...bankAccounts, { ...bankFormData, id: Date.now().toString() }]);
      setIsAddingBank(false);
    }
    setBankFormData({ accountName: "", accountNumber: "", bankName: "", ifsc: "" });
  };

  const handleEditBank = (bank: BankDetail) => {
    setBankFormData(bank);
    setEditingBankId(bank.id);
  };

  const handleDeleteBank = (id: string) => {
    setBankAccounts(bankAccounts.filter(b => b.id !== id));
  };

  // --- UPI ID Handlers ---
  const handleSaveUpi = () => {
    if (editingUpiId) {
      setUpiIds(upiIds.map(u => u.id === editingUpiId ? { ...upiFormData, id: editingUpiId } : u));
      setEditingUpiId(null);
    } else {
      setUpiIds([...upiIds, { ...upiFormData, id: Date.now().toString() }]);
      setIsAddingUpi(false);
    }
    setUpiFormData({ upiId: "" });
  };

  const handleEditUpi = (upi: UpiDetail) => {
    setUpiFormData(upi);
    setEditingUpiId(upi.id);
  };

  const handleDeleteUpi = (id: string) => {
    setUpiIds(upiIds.filter(u => u.id !== id));
  };

  return (
    <div className="p-8 md:p-12 max-w-5xl mx-auto space-y-12">
      <div>
        <h1 className="text-2xl font-heading font-black tracking-[-0.04em] uppercase mb-2">Payout Details</h1>
        <p className="text-white/60">Manage your payment methods for receiving referral commissions.</p>
      </div>

      <div className="glass-card p-6 border-white/10 bg-yellow-500/10 text-yellow-500 flex gap-4 items-start rounded-xl">
        <AlertCircle size={24} className="shrink-0 mt-1" />
        <div>
          <h3 className="font-semibold mb-1">Important Notice</h3>
          <p className="text-sm">Referral amounts will only be paid out after the client successfully completes their payment to Roxten Studios.</p>
        </div>
      </div>

      {/* --- BANK ACCOUNTS SECTION --- */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Building2 className="text-white/80" size={24} />
            <h2 className="text-lg font-heading font-bold">Bank Accounts</h2>
          </div>
          {!isAddingBank && !editingBankId && (
            <button onClick={() => setIsAddingBank(true)} className="px-4 py-2 text-sm rounded-full border border-white/20 hover:bg-white/5 transition-colors flex items-center gap-2">
              <Plus size={16} /> Add Bank Account
            </button>
          )}
        </div>

        {(isAddingBank || editingBankId) && (
          <div className="glass-card p-8 mb-6 border-white/10 bg-white/[0.02]">
            <h3 className="text-lg font-heading font-bold mb-6">{editingBankId ? 'Edit' : 'Add'} Bank Account</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Account Name</label>
                <input 
                  type="text" 
                  value={bankFormData.accountName}
                  onChange={e => setBankFormData({...bankFormData, accountName: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30" 
                  placeholder="Name on account"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Bank Name</label>
                <input 
                  type="text" 
                  value={bankFormData.bankName}
                  onChange={e => setBankFormData({...bankFormData, bankName: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30" 
                  placeholder="e.g. HDFC Bank"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">Account Number</label>
                <input 
                  type="text" 
                  value={bankFormData.accountNumber}
                  onChange={e => setBankFormData({...bankFormData, accountNumber: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30" 
                  placeholder="Account Number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white/60 mb-2">IFSC Code</label>
                <input 
                  type="text" 
                  value={bankFormData.ifsc}
                  onChange={e => setBankFormData({...bankFormData, ifsc: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30" 
                  placeholder="IFSC Code"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={handleSaveBank} className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:scale-[1.02] transition-transform">Save Bank Details</button>
              <button onClick={() => { setIsAddingBank(false); setEditingBankId(null); }} className="px-6 py-2 rounded-full hover:bg-white/5 transition-colors border border-white/10">Cancel</button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {bankAccounts.map((bank) => (
            <div key={bank.id} className="glass-card p-6 border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-white/20 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Building2 size={18} className="text-white/80" />
                </div>
                <div>
                  <div className="font-bold">{bank.bankName}</div>
                  <div className="text-sm text-white/60">{bank.accountName} • {bank.accountNumber} • IFSC: {bank.ifsc}</div>
                </div>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <button onClick={() => handleEditBank(bank)} className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center gap-2 text-sm">
                  <Edit2 size={14} /> Edit
                </button>
                <button onClick={() => handleDeleteBank(bank.id)} className="px-3 py-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors border border-red-500/20 flex items-center justify-center gap-2 text-sm">
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          ))}
          {bankAccounts.length === 0 && !isAddingBank && (
            <div className="text-center py-10 text-white/40 border border-dashed border-white/10 rounded-2xl">
              No bank accounts added yet.
            </div>
          )}
        </div>
      </section>

      {/* --- UPI IDS SECTION --- */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Smartphone className="text-white/80" size={24} />
            <h2 className="text-lg font-heading font-bold">UPI IDs</h2>
          </div>
          {!isAddingUpi && !editingUpiId && (
            <button onClick={() => setIsAddingUpi(true)} className="px-4 py-2 text-sm rounded-full border border-white/20 hover:bg-white/5 transition-colors flex items-center gap-2">
              <Plus size={16} /> Add UPI ID
            </button>
          )}
        </div>

        {(isAddingUpi || editingUpiId) && (
          <div className="glass-card p-8 mb-6 border-white/10 bg-white/[0.02]">
            <h3 className="text-lg font-heading font-bold mb-6">{editingUpiId ? 'Edit' : 'Add'} UPI ID</h3>
            <div className="mb-6">
              <label className="block text-sm font-medium text-white/60 mb-2">UPI ID</label>
              <input 
                type="text" 
                value={upiFormData.upiId}
                onChange={e => setUpiFormData({...upiFormData, upiId: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30" 
                placeholder="e.g. johndoe@upi"
              />
            </div>
            <div className="flex gap-4">
              <button onClick={handleSaveUpi} className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:scale-[1.02] transition-transform">Save UPI ID</button>
              <button onClick={() => { setIsAddingUpi(false); setEditingUpiId(null); }} className="px-6 py-2 rounded-full hover:bg-white/5 transition-colors border border-white/10">Cancel</button>
            </div>
          </div>
        )}

        <div className="space-y-4">
          {upiIds.map((upi) => (
            <div key={upi.id} className="glass-card p-6 border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-white/20 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                  <Smartphone size={18} className="text-white/80" />
                </div>
                <div>
                  <div className="font-bold">{upi.upiId}</div>
                  <div className="text-sm text-white/60">Verified UPI ID</div>
                </div>
              </div>
              <div className="flex gap-2 w-full md:w-auto">
                <button onClick={() => handleEditUpi(upi)} className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center gap-2 text-sm">
                  <Edit2 size={14} /> Edit
                </button>
                <button onClick={() => handleDeleteUpi(upi.id)} className="px-3 py-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors border border-red-500/20 flex items-center justify-center gap-2 text-sm">
                  <Trash2 size={14} /> Delete
                </button>
              </div>
            </div>
          ))}
          {upiIds.length === 0 && !isAddingUpi && (
            <div className="text-center py-10 text-white/40 border border-dashed border-white/10 rounded-2xl">
              No UPI IDs added yet.
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
