const MembershipNotice = ({ isBasicMember }: { isBasicMember: boolean }) =>
  isBasicMember ? (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
      <p className="text-blue-800 text-sm">
        <strong>Note:</strong> Some features are available with a Pro
        Membership. Upgrade your account to enable advanced listing options.
      </p>
    </div>
  ) : null;

export default MembershipNotice;
