import Candidate from "../models/Candidate";

export const sidInit = async () => {
  try {
    const cands = [
      {
        name: "John",
        image: "https://randomuser.me/api/portraits/med/men/81.jpg",
      },
      {
        name: "Johnny",
        image: "https://randomuser.me/api/portraits/med/men/13.jpg",
      },
      {
        name: "Johnnyiahoo",
        image: "https://randomuser.me/api/portraits/med/men/83.jpg",
      },
      {
        name: "Johnniel",
        image: "https://randomuser.me/api/portraits/med/men/0.jpg",
      },
      {
        name: "Johnny",
        image: "https://randomuser.me/api/portraits/med/men/6.jpg",
      },
      {
        name: "moshe",
        image: "https://randomuser.me/api/portraits/med/men/90.jpg",
      },
      {
        name: "shlomi",
        image: "https://randomuser.me/api/portraits/med/men/4.jpg",
      },
      {
        name: "yosi",
        image: "https://randomuser.me/api/portraits/med/men/89.jpg",
      },
      {
        name: "hanoch",
        image: "https://randomuser.me/api/portraits/med/men/23.jpg",
      },
      {
        name: "teela",
        image: "https://randomuser.me/api/portraits/med/men/45.jpg",
      },
      {
        name: "dudi",
        image: "https://randomuser.me/api/portraits/med/men/56.jpg",
      }
    ];
    for (const cand of cands) {
      const newCand = new Candidate(cand);
      await newCand.save();
    }
  } catch (error) {
    console.log("Error accorde while creating initial state of candidate",error);
  }
};

export const getCandidates = async ()=>{
    try {
        const list = Candidate.find({})
        return list
    } catch (error) {
        console.log(error)
    }
}
