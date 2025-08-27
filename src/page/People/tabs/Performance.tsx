export default function Performance() {
  return (
    <div className="space-y-4">
      <div className="rounded border p-4">
        <h3 className="text-sm text-gray-500">Goals</h3>
        <div className="flex items-center gap-4 mt-4">
          <div className="w-24 h-24 rounded bg-gray-100 flex items-center justify-center">
            <div className="text-4xl font-bold">0</div>
          </div>
          <div className="flex-1">
            <div className="w-28 h-28 rounded-full bg-gray-100" />
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-gray-300 inline-block" />
              <span>0 Not started</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
              <span>0 Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-lime-400 inline-block" />
              <span>0 On track</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
              <span>0 Progressing</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-orange-400 inline-block" />
              <span>0 Off track</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
              <span>0 Incomplete</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded border p-4">
        <h3 className="text-sm text-gray-500">Feedback</h3>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="rounded border p-4">
            <div className="text-xs text-blue-600">Received</div>
            <div className="text-3xl font-bold text-right">0</div>
            <div className="mt-2 text-sm text-blue-600">Requested</div>
            <div className="text-3xl font-bold text-right">0</div>
          </div>
          <div className="rounded border p-4">
            <div className="text-xs text-blue-600">Given</div>
            <div className="text-3xl font-bold text-right">0</div>
            <div className="mt-2 text-sm text-blue-600">Pending</div>
            <div className="text-3xl font-bold text-right">0</div>
          </div>
        </div>
      </div>
    </div>
  );
}
