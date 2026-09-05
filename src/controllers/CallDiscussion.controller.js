import { asyncHandler } from "../utils/asyncHandler.js";
import { STATUS_CODE } from "../constants/status.code.js";
import{
    createCallDiscussion,
    getAllCallDiscussions,
    updateCallDiscussion,
    updateCallDiscussionStatus,
    deleteCallDiscussion,
} from "../services/CallDiscussion.service.js";

const createCallDiscussionController = asyncHandler(
  async (req, res) => {
    const callDiscussion = await createCallDiscussion(req.body);

    return res.status(STATUS_CODE.CREATED).json({
      success: true,
      message: "Call Discussion created successfully",
      data: callDiscussion,
    });
  }
);

const getAllCallDiscussionsController = asyncHandler(
  async (req, res) => {
    const callDiscussions = await getAllCallDiscussions();

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Call Discussions fetched successfully",
      data: callDiscussions,
    });
  }
);

const updateCallDiscussionController = asyncHandler(
  async (req, res) => {
    const callDiscussion = await updateCallDiscussion(
      req.params.id,
      req.body
    );

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Call Discussion updated successfully",
      data: callDiscussion,
    });
  }
);

const updateCallDiscussionStatusController = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const data = await updateCallDiscussionStatus(id, status);

    res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Call Discussion status updated successfully",
      data,
    });
  },
);

const deleteCallDiscussionController = asyncHandler(
  async (req, res) => {
    await deleteCallDiscussion(req.params.id);

    return res.status(STATUS_CODE.SUCCESS).json({
      success: true,
      message: "Call Discussion deleted successfully",
    });
  }
);

export{
    createCallDiscussionController,
    getAllCallDiscussionsController,
    updateCallDiscussionController,
    updateCallDiscussionStatusController,
    deleteCallDiscussionController,
}