import MembershipPlans from "@/components/membership/MembershipPlans";
import SuccessStories from "@/components/membership/SuccessStories";
import Space from "@/components/membership/space";

const MembershipPage = () => {
  return (
    <div className="mt-28">
      <MembershipPlans />
      <SuccessStories />
      <Space />
    </div>
  );
};

export default MembershipPage;
