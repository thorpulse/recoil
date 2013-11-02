var search_data = {
    'index': {
        'searchIndex': ["icecave","icecave\\coro","icecave\\coro\\channel","icecave\\coro\\channel\\exception","icecave\\coro\\coroutine","icecave\\coro\\coroutine\\exception","icecave\\coro\\primitive","icecave\\coro\\tree","icecave\\coro\\channel\\bidirectionalchannelinterface","icecave\\coro\\channel\\channel","icecave\\coro\\channel\\channelinterface","icecave\\coro\\channel\\exception\\channelclosedexception","icecave\\coro\\channel\\exception\\channelexceptioninterface","icecave\\coro\\channel\\readablechannelinterface","icecave\\coro\\channel\\writablechannelinterface","icecave\\coro\\coro","icecave\\coro\\coroutine\\baseresumableinterface","icecave\\coro\\coroutine\\coroutine","icecave\\coro\\coroutine\\coroutineinterface","icecave\\coro\\coroutine\\coroutinestatus","icecave\\coro\\coroutine\\driverinterface","icecave\\coro\\coroutine\\exception\\cancelexception","icecave\\coro\\coroutine\\generatordriver","icecave\\coro\\coroutine\\resumableinterface","icecave\\coro\\coroutine\\scopedresumable","icecave\\coro\\engine","icecave\\coro\\engineinterface","icecave\\coro\\packageinfo","icecave\\coro\\primitive\\abstractcallbackprimitive","icecave\\coro\\primitive\\abstractdetachprimitive","icecave\\coro\\primitive\\abstractprimitive","icecave\\coro\\primitive\\callbackprimitive","icecave\\coro\\primitive\\cooperativeprimitive","icecave\\coro\\primitive\\detachprimitive","icecave\\coro\\primitive\\detachwithexceptionprimitive","icecave\\coro\\primitive\\enqueuecallbackprimitive","icecave\\coro\\primitive\\sendparentprimitive","icecave\\coro\\primitive\\sleepprimitive","icecave\\coro\\primitive\\suspendprimitive","icecave\\coro\\tree\\childnodeinterface","icecave\\coro\\tree\\executablenodeinterface","icecave\\coro\\tree\\intermediatenodeinterface","icecave\\coro\\tree\\nodeadaptor","icecave\\coro\\tree\\nodeadaptorinterface","icecave\\coro\\tree\\nodeinterface","icecave\\coro\\tree\\parentnodeinterface","icecave\\coro\\tree\\rootnode","icecave\\coro\\channel\\channel::__construct","icecave\\coro\\channel\\channel::read","icecave\\coro\\channel\\channel::tryread","icecave\\coro\\channel\\channel::write","icecave\\coro\\channel\\channel::trywrite","icecave\\coro\\channel\\channel::close","icecave\\coro\\channel\\channel::readytoread","icecave\\coro\\channel\\channel::readyforwrite","icecave\\coro\\channel\\channel::isclosed","icecave\\coro\\channel\\channelinterface::close","icecave\\coro\\channel\\channelinterface::isclosed","icecave\\coro\\channel\\exception\\channelclosedexception::__construct","icecave\\coro\\channel\\exception\\channelclosedexception::channel","icecave\\coro\\channel\\exception\\channelexceptioninterface::channel","icecave\\coro\\channel\\readablechannelinterface::read","icecave\\coro\\channel\\readablechannelinterface::tryread","icecave\\coro\\channel\\writablechannelinterface::write","icecave\\coro\\channel\\writablechannelinterface::trywrite","icecave\\coro\\coro::get","icecave\\coro\\coro::__callstatic","icecave\\coro\\coro::eventloop","icecave\\coro\\coro::sleep","icecave\\coro\\coro::suspend","icecave\\coro\\coro::detach","icecave\\coro\\coro::detachwithexception","icecave\\coro\\coroutine\\baseresumableinterface::resume","icecave\\coro\\coroutine\\baseresumableinterface::resumewithexception","icecave\\coro\\coroutine\\baseresumableinterface::cancel","icecave\\coro\\coroutine\\coroutine::__construct","icecave\\coro\\coroutine\\coroutine::status","icecave\\coro\\coroutine\\coroutine::returnvalue","icecave\\coro\\coroutine\\coroutine::setreturnvalue","icecave\\coro\\coroutine\\coroutine::execute","icecave\\coro\\coroutine\\coroutine::resume","icecave\\coro\\coroutine\\coroutine::resumewithexception","icecave\\coro\\coroutine\\coroutine::cancel","icecave\\coro\\coroutine\\coroutine::sendvalue","icecave\\coro\\coroutine\\coroutine::senderror","icecave\\coro\\coroutine\\coroutine::destroy","icecave\\coro\\coroutine\\coroutineinterface::status","icecave\\coro\\coroutine\\coroutineinterface::returnvalue","icecave\\coro\\coroutine\\coroutineinterface::setreturnvalue","icecave\\coro\\coroutine\\driverinterface::fetch","icecave\\coro\\coroutine\\exception\\cancelexception::__construct","icecave\\coro\\coroutine\\generatordriver::__construct","icecave\\coro\\coroutine\\generatordriver::generator","icecave\\coro\\coroutine\\generatordriver::fetch","icecave\\coro\\coroutine\\generatordriver::resume","icecave\\coro\\coroutine\\generatordriver::resumewithexception","icecave\\coro\\coroutine\\generatordriver::cancel","icecave\\coro\\coroutine\\scopedresumable::__construct","icecave\\coro\\coroutine\\scopedresumable::__destruct","icecave\\coro\\coroutine\\scopedresumable::resume","icecave\\coro\\coroutine\\scopedresumable::resumewithexception","icecave\\coro\\coroutine\\scopedresumable::cancel","icecave\\coro\\coroutine\\scopedresumable::release","icecave\\coro\\coroutine\\scopedresumable::innerresumable","icecave\\coro\\engine::__construct","icecave\\coro\\engine::execute","icecave\\coro\\engine::enqueue","icecave\\coro\\engine::enqueuecallback","icecave\\coro\\engine::eventloop","icecave\\coro\\engine::rootnode","icecave\\coro\\engine::isrunning","icecave\\coro\\engine::run","icecave\\coro\\engine::stop","icecave\\coro\\engine::nodeadaptor","icecave\\coro\\engineinterface::execute","icecave\\coro\\engineinterface::enqueue","icecave\\coro\\engineinterface::enqueuecallback","icecave\\coro\\engineinterface::eventloop","icecave\\coro\\engineinterface::rootnode","icecave\\coro\\engineinterface::isrunning","icecave\\coro\\engineinterface::run","icecave\\coro\\engineinterface::stop","icecave\\coro\\primitive\\abstractcallbackprimitive::__construct","icecave\\coro\\primitive\\abstractcallbackprimitive::bind","icecave\\coro\\primitive\\abstractcallbackprimitive::callback","icecave\\coro\\primitive\\abstractcallbackprimitive::arguments","icecave\\coro\\primitive\\abstractdetachprimitive::__construct","icecave\\coro\\primitive\\abstractdetachprimitive::execute","icecave\\coro\\primitive\\callbackprimitive::execute","icecave\\coro\\primitive\\cooperativeprimitive::execute","icecave\\coro\\primitive\\enqueuecallbackprimitive::execute","icecave\\coro\\primitive\\sendparentprimitive::execute","icecave\\coro\\primitive\\sleepprimitive::__construct","icecave\\coro\\primitive\\sleepprimitive::execute","icecave\\coro\\primitive\\suspendprimitive::__construct","icecave\\coro\\primitive\\suspendprimitive::execute","icecave\\coro\\tree\\childnodeinterface::attach","icecave\\coro\\tree\\childnodeinterface::detach","icecave\\coro\\tree\\childnodeinterface::parent","icecave\\coro\\tree\\childnodeinterface::sendvaluetoparent","icecave\\coro\\tree\\childnodeinterface::senderrortoparent","icecave\\coro\\tree\\childnodeinterface::sendvaluetoparentanddestroy","icecave\\coro\\tree\\childnodeinterface::senderrortoparentanddestroy","icecave\\coro\\tree\\executablenodeinterface::execute","icecave\\coro\\tree\\nodeadaptor::__construct","icecave\\coro\\tree\\nodeadaptor::adapt","icecave\\coro\\tree\\nodeadaptor::tryadapt","icecave\\coro\\tree\\nodeadaptorinterface::adapt","icecave\\coro\\tree\\nodeadaptorinterface::tryadapt","icecave\\coro\\tree\\nodeinterface::engine","icecave\\coro\\tree\\nodeinterface::destroy","icecave\\coro\\tree\\parentnodeinterface::addchild","icecave\\coro\\tree\\parentnodeinterface::removechild","icecave\\coro\\tree\\parentnodeinterface::children","icecave\\coro\\tree\\parentnodeinterface::sendvalue","icecave\\coro\\tree\\parentnodeinterface::senderror","icecave\\coro\\tree\\rootnode::__construct","icecave\\coro\\tree\\rootnode::engine","icecave\\coro\\tree\\rootnode::setengine","icecave\\coro\\tree\\rootnode::destroy","icecave\\coro\\tree\\rootnode::sendvalue","icecave\\coro\\tree\\rootnode::senderror"],
        'info': [["Icecave","","Icecave.html","","",3],["Icecave\\Coro","","Icecave\/Coro.html","","",3],["Icecave\\Coro\\Channel","","Icecave\/Coro\/Channel.html","","",3],["Icecave\\Coro\\Channel\\Exception","","Icecave\/Coro\/Channel\/Exception.html","","",3],["Icecave\\Coro\\Coroutine","","Icecave\/Coro\/Coroutine.html","","",3],["Icecave\\Coro\\Coroutine\\Exception","","Icecave\/Coro\/Coroutine\/Exception.html","","",3],["Icecave\\Coro\\Primitive","","Icecave\/Coro\/Primitive.html","","",3],["Icecave\\Coro\\Tree","","Icecave\/Coro\/Tree.html","","",3],["BidirectionalChannelInterface","Icecave\\Coro\\Channel","Icecave\/Coro\/Channel\/BidirectionalChannelInterface.html","","",1],["Channel","Icecave\\Coro\\Channel","Icecave\/Coro\/Channel\/Channel.html","","",1],["ChannelInterface","Icecave\\Coro\\Channel","Icecave\/Coro\/Channel\/ChannelInterface.html","","",1],["ChannelClosedException","Icecave\\Coro\\Channel\\Exception","Icecave\/Coro\/Channel\/Exception\/ChannelClosedException.html"," < Exception","",1],["ChannelExceptionInterface","Icecave\\Coro\\Channel\\Exception","Icecave\/Coro\/Channel\/Exception\/ChannelExceptionInterface.html","","",1],["ReadableChannelInterface","Icecave\\Coro\\Channel","Icecave\/Coro\/Channel\/ReadableChannelInterface.html","","",1],["WritableChannelInterface","Icecave\\Coro\\Channel","Icecave\/Coro\/Channel\/WritableChannelInterface.html","","",1],["Coro","Icecave\\Coro","Icecave\/Coro\/Coro.html","","Utility operations for co-routines.",1],["BaseResumableInterface","Icecave\\Coro\\Coroutine","Icecave\/Coro\/Coroutine\/BaseResumableInterface.html","","",1],["Coroutine","Icecave\\Coro\\Coroutine","Icecave\/Coro\/Coroutine\/Coroutine.html","","",1],["CoroutineInterface","Icecave\\Coro\\Coroutine","Icecave\/Coro\/Coroutine\/CoroutineInterface.html","","",1],["CoroutineStatus","Icecave\\Coro\\Coroutine","Icecave\/Coro\/Coroutine\/CoroutineStatus.html"," < Enumeration","",1],["DriverInterface","Icecave\\Coro\\Coroutine","Icecave\/Coro\/Coroutine\/DriverInterface.html","","Low-level driver for co-routine implementations.",1],["CancelException","Icecave\\Coro\\Coroutine\\Exception","Icecave\/Coro\/Coroutine\/Exception\/CancelException.html"," < Exception","",1],["GeneratorDriver","Icecave\\Coro\\Coroutine","Icecave\/Coro\/Coroutine\/GeneratorDriver.html","","Low-level driver for co-routines based on PHP generators.",1],["ResumableInterface","Icecave\\Coro\\Coroutine","Icecave\/Coro\/Coroutine\/ResumableInterface.html","","",1],["ScopedResumable","Icecave\\Coro\\Coroutine","Icecave\/Coro\/Coroutine\/ScopedResumable.html","","Wraps a resumable, and automatically cancels it if",1],["Engine","Icecave\\Coro","Icecave\/Coro\/Engine.html","","Coro's default co-routine engine.",1],["EngineInterface","Icecave\\Coro","Icecave\/Coro\/EngineInterface.html","","A co-routine engine.",1],["PackageInfo","Icecave\\Coro","Icecave\/Coro\/PackageInfo.html","","",1],["AbstractCallbackPrimitive","Icecave\\Coro\\Primitive","Icecave\/Coro\/Primitive\/AbstractCallbackPrimitive.html"," < AbstractPrimitive","A base class for primitive's that invoke callbacks.",1],["AbstractDetachPrimitive","Icecave\\Coro\\Primitive","Icecave\/Coro\/Primitive\/AbstractDetachPrimitive.html"," < AbstractPrimitive","A primitive that detaches the parent from it's parent",1],["AbstractPrimitive","Icecave\\Coro\\Primitive","Icecave\/Coro\/Primitive\/AbstractPrimitive.html","","The base class for all primitives.",1],["CallbackPrimitive","Icecave\\Coro\\Primitive","Icecave\/Coro\/Primitive\/CallbackPrimitive.html"," < AbstractCallbackPrimitive","Invoke a callback, and send the result to the parent",1],["CooperativePrimitive","Icecave\\Coro\\Primitive","Icecave\/Coro\/Primitive\/CooperativePrimitive.html"," < AbstractPrimitive","Perform a co-operative yield.",1],["DetachPrimitive","Icecave\\Coro\\Primitive","Icecave\/Coro\/Primitive\/DetachPrimitive.html"," < AbstractDetachPrimitive","A primitive that detaches the parent from it's parent",1],["DetachWithExceptionPrimitive","Icecave\\Coro\\Primitive","Icecave\/Coro\/Primitive\/DetachWithExceptionPrimitive.html"," < AbstractDetachPrimitive","A primitive that detaches the parent from it's parent",1],["EnqueueCallbackPrimitive","Icecave\\Coro\\Primitive","Icecave\/Coro\/Primitive\/EnqueueCallbackPrimitive.html"," < AbstractCallbackPrimitive","Invoke a callback, and send the result to the parent",1],["SendParentPrimitive","Icecave\\Coro\\Primitive","Icecave\/Coro\/Primitive\/SendParentPrimitive.html"," < AbstractPrimitive","A primitive that sends the current co-routine to itself.",1],["SleepPrimitive","Icecave\\Coro\\Primitive","Icecave\/Coro\/Primitive\/SleepPrimitive.html"," < AbstractPrimitive","A primitive which sends null to it's parent after the",1],["SuspendPrimitive","Icecave\\Coro\\Primitive","Icecave\/Coro\/Primitive\/SuspendPrimitive.html"," < AbstractPrimitive","Do nothing.",1],["ChildNodeInterface","Icecave\\Coro\\Tree","Icecave\/Coro\/Tree\/ChildNodeInterface.html","","A node that has a parent.",1],["ExecutableNodeInterface","Icecave\\Coro\\Tree","Icecave\/Coro\/Tree\/ExecutableNodeInterface.html","","A node that has side-effects.",1],["IntermediateNodeInterface","Icecave\\Coro\\Tree","Icecave\/Coro\/Tree\/IntermediateNodeInterface.html","","A node that is both a parent and a child.",1],["NodeAdaptor","Icecave\\Coro\\Tree","Icecave\/Coro\/Tree\/NodeAdaptor.html","","The default node adaptor.",1],["NodeAdaptorInterface","Icecave\\Coro\\Tree","Icecave\/Coro\/Tree\/NodeAdaptorInterface.html","","Adapts arbitrary values into executable nodes.",1],["NodeInterface","Icecave\\Coro\\Tree","Icecave\/Coro\/Tree\/NodeInterface.html","","A node that can be attached to a parent.",1],["ParentNodeInterface","Icecave\\Coro\\Tree","Icecave\/Coro\/Tree\/ParentNodeInterface.html","","A node that has children.",1],["RootNode","Icecave\\Coro\\Tree","Icecave\/Coro\/Tree\/RootNode.html","","The root node of a co-routine graph.",1],["Channel::__construct","Icecave\\Coro\\Channel\\Channel","Icecave\/Coro\/Channel\/Channel.html#method___construct","()","",2],["Channel::read","Icecave\\Coro\\Channel\\Channel","Icecave\/Coro\/Channel\/Channel.html#method_read","()","Read from this channel.",2],["Channel::tryRead","Icecave\\Coro\\Channel\\Channel","Icecave\/Coro\/Channel\/Channel.html#method_tryRead","($value)","Attempt a non-blocking read from this channel.",2],["Channel::write","Icecave\\Coro\\Channel\\Channel","Icecave\/Coro\/Channel\/Channel.html#method_write","($value)","Write to this channel.",2],["Channel::tryWrite","Icecave\\Coro\\Channel\\Channel","Icecave\/Coro\/Channel\/Channel.html#method_tryWrite","($value)","Attempt a non-blocking write to this channel.",2],["Channel::close","Icecave\\Coro\\Channel\\Channel","Icecave\/Coro\/Channel\/Channel.html#method_close","()","Close this channel.",2],["Channel::readyToRead","Icecave\\Coro\\Channel\\Channel","Icecave\/Coro\/Channel\/Channel.html#method_readyToRead","()","Check if a value can be read from the channel without",2],["Channel::readyForWrite","Icecave\\Coro\\Channel\\Channel","Icecave\/Coro\/Channel\/Channel.html#method_readyForWrite","()","Check if a value can be written to the channel without",2],["Channel::isClosed","Icecave\\Coro\\Channel\\Channel","Icecave\/Coro\/Channel\/Channel.html#method_isClosed","()","Check if this channel is closed.",2],["ChannelInterface::close","Icecave\\Coro\\Channel\\ChannelInterface","Icecave\/Coro\/Channel\/ChannelInterface.html#method_close","()","Close this channel.",2],["ChannelInterface::isClosed","Icecave\\Coro\\Channel\\ChannelInterface","Icecave\/Coro\/Channel\/ChannelInterface.html#method_isClosed","()","Check if this channel is closed.",2],["ChannelClosedException::__construct","Icecave\\Coro\\Channel\\Exception\\ChannelClosedException","Icecave\/Coro\/Channel\/Exception\/ChannelClosedException.html#method___construct","(<a href=\"Icecave\/Coro\/Channel\/ChannelInterface.html\"><abbr title=\"Icecave\\Coro\\Channel\\ChannelInterface\">ChannelInterface<\/abbr><\/a> $channel, <a href=\"http:\/\/php.net\/Exception\"><abbr title=\"Exception\">Exception<\/abbr><\/a> $previous = null)","",2],["ChannelClosedException::channel","Icecave\\Coro\\Channel\\Exception\\ChannelClosedException","Icecave\/Coro\/Channel\/Exception\/ChannelClosedException.html#method_channel","()","Fetch the channel that has been closed.",2],["ChannelExceptionInterface::channel","Icecave\\Coro\\Channel\\Exception\\ChannelExceptionInterface","Icecave\/Coro\/Channel\/Exception\/ChannelExceptionInterface.html#method_channel","()","",2],["ReadableChannelInterface::read","Icecave\\Coro\\Channel\\ReadableChannelInterface","Icecave\/Coro\/Channel\/ReadableChannelInterface.html#method_read","()","Read from this channel.",2],["ReadableChannelInterface::tryRead","Icecave\\Coro\\Channel\\ReadableChannelInterface","Icecave\/Coro\/Channel\/ReadableChannelInterface.html#method_tryRead","($value)","Attempt a non-blocking read from this channel.",2],["WritableChannelInterface::write","Icecave\\Coro\\Channel\\WritableChannelInterface","Icecave\/Coro\/Channel\/WritableChannelInterface.html#method_write","($value)","Write to this channel.",2],["WritableChannelInterface::tryWrite","Icecave\\Coro\\Channel\\WritableChannelInterface","Icecave\/Coro\/Channel\/WritableChannelInterface.html#method_tryWrite","($value)","Attempt a non-blocking write to this channel.",2],["Coro::get","Icecave\\Coro\\Coro","Icecave\/Coro\/Coro.html#method_get","()","Get the currently executing co-routine.",2],["Coro::__callStatic","Icecave\\Coro\\Coro","Icecave\/Coro\/Coro.html#method___callStatic","($name, array $arguments)","Call a method on the currently executing co-routine.",2],["Coro::eventLoop","Icecave\\Coro\\Coro","Icecave\/Coro\/Coro.html#method_eventLoop","()","Return the event loop to the co-routine.",2],["Coro::sleep","Icecave\\Coro\\Coro","Icecave\/Coro\/Coro.html#method_sleep","($timeout)","Sleep for a specified period.",2],["Coro::suspend","Icecave\\Coro\\Coro","Icecave\/Coro\/Coro.html#method_suspend","(<abbr title=\"Icecave\\Coro\\callable\">callable<\/abbr> $callback)","Suspend the current co-routine.",2],["Coro::detach","Icecave\\Coro\\Coro","Icecave\/Coro\/Coro.html#method_detach","($value = null)","Detach from the parent co-routine and continue executing.",2],["Coro::detachWithException","Icecave\\Coro\\Coro","Icecave\/Coro\/Coro.html#method_detachWithException","(<a href=\"http:\/\/php.net\/Exception\"><abbr title=\"Exception\">Exception<\/abbr><\/a> $exception)","Detach the current co-routine from it's parent, and",2],["BaseResumableInterface::resume","Icecave\\Coro\\Coroutine\\BaseResumableInterface","Icecave\/Coro\/Coroutine\/BaseResumableInterface.html#method_resume","(mixed $value = null)","Resume execution of this co-routine.",2],["BaseResumableInterface::resumeWithException","Icecave\\Coro\\Coroutine\\BaseResumableInterface","Icecave\/Coro\/Coroutine\/BaseResumableInterface.html#method_resumeWithException","(<a href=\"http:\/\/php.net\/Exception\"><abbr title=\"Exception\">Exception<\/abbr><\/a> $exception)","Resume execution of this co-routine with an error.",2],["BaseResumableInterface::cancel","Icecave\\Coro\\Coroutine\\BaseResumableInterface","Icecave\/Coro\/Coroutine\/BaseResumableInterface.html#method_cancel","()","Cancel execution of a suspended co-routine.",2],["Coroutine::__construct","Icecave\\Coro\\Coroutine\\Coroutine","Icecave\/Coro\/Coroutine\/Coroutine.html#method___construct","(<a href=\"Icecave\/Coro\/Coroutine\/DriverInterface.html\"><abbr title=\"Icecave\\Coro\\Coroutine\\DriverInterface\">DriverInterface<\/abbr><\/a> $driver, <a href=\"Icecave\/Coro\/Tree\/NodeAdaptorInterface.html\"><abbr title=\"Icecave\\Coro\\Tree\\NodeAdaptorInterface\">NodeAdaptorInterface<\/abbr><\/a> $nodeAdaptor)","",2],["Coroutine::status","Icecave\\Coro\\Coroutine\\Coroutine","Icecave\/Coro\/Coroutine\/Coroutine.html#method_status","()","Fetch the co-routine's current status.",2],["Coroutine::returnValue","Icecave\\Coro\\Coroutine\\Coroutine","Icecave\/Coro\/Coroutine\/Coroutine.html#method_returnValue","()","Fetch the value that will be sent to the parent node",2],["Coroutine::setReturnValue","Icecave\\Coro\\Coroutine\\Coroutine","Icecave\/Coro\/Coroutine\/Coroutine.html#method_setReturnValue","(mixed $returnValue)","Set the value that will be sent to the parent node",2],["Coroutine::execute","Icecave\\Coro\\Coroutine\\Coroutine","Icecave\/Coro\/Coroutine\/Coroutine.html#method_execute","()","Execute the action associated with this node.",2],["Coroutine::resume","Icecave\\Coro\\Coroutine\\Coroutine","Icecave\/Coro\/Coroutine\/Coroutine.html#method_resume","(mixed $value = null)","Resume execution of this co-routine.",2],["Coroutine::resumeWithException","Icecave\\Coro\\Coroutine\\Coroutine","Icecave\/Coro\/Coroutine\/Coroutine.html#method_resumeWithException","(<a href=\"http:\/\/php.net\/Exception\"><abbr title=\"Exception\">Exception<\/abbr><\/a> $exception)","Resume execution of this co-routine with an error.",2],["Coroutine::cancel","Icecave\\Coro\\Coroutine\\Coroutine","Icecave\/Coro\/Coroutine\/Coroutine.html#method_cancel","()","Cancel execution of a suspended co-routine.",2],["Coroutine::sendValue","Icecave\\Coro\\Coroutine\\Coroutine","Icecave\/Coro\/Coroutine\/Coroutine.html#method_sendValue","(<a href=\"Icecave\/Coro\/Tree\/ChildNodeInterface.html\"><abbr title=\"Icecave\\Coro\\Tree\\ChildNodeInterface\">ChildNodeInterface<\/abbr><\/a> $child, mixed $value = null)","Send this node a value.",2],["Coroutine::sendError","Icecave\\Coro\\Coroutine\\Coroutine","Icecave\/Coro\/Coroutine\/Coroutine.html#method_sendError","(<a href=\"Icecave\/Coro\/Tree\/ChildNodeInterface.html\"><abbr title=\"Icecave\\Coro\\Tree\\ChildNodeInterface\">ChildNodeInterface<\/abbr><\/a> $child, <a href=\"http:\/\/php.net\/Exception\"><abbr title=\"Exception\">Exception<\/abbr><\/a> $exception)","Send this node an error.",2],["Coroutine::destroy","Icecave\\Coro\\Coroutine\\Coroutine","Icecave\/Coro\/Coroutine\/Coroutine.html#method_destroy","()","Destroy this node.",2],["CoroutineInterface::status","Icecave\\Coro\\Coroutine\\CoroutineInterface","Icecave\/Coro\/Coroutine\/CoroutineInterface.html#method_status","()","Fetch the co-routine's current status.",2],["CoroutineInterface::returnValue","Icecave\\Coro\\Coroutine\\CoroutineInterface","Icecave\/Coro\/Coroutine\/CoroutineInterface.html#method_returnValue","()","Fetch the value that will be sent to the parent node",2],["CoroutineInterface::setReturnValue","Icecave\\Coro\\Coroutine\\CoroutineInterface","Icecave\/Coro\/Coroutine\/CoroutineInterface.html#method_setReturnValue","(mixed $returnValue)","Set the value that will be sent to the parent node",2],["DriverInterface::fetch","Icecave\\Coro\\Coroutine\\DriverInterface","Icecave\/Coro\/Coroutine\/DriverInterface.html#method_fetch","()","Fetch the current value from the co-routine.",2],["CancelException::__construct","Icecave\\Coro\\Coroutine\\Exception\\CancelException","Icecave\/Coro\/Coroutine\/Exception\/CancelException.html#method___construct","()","",2],["GeneratorDriver::__construct","Icecave\\Coro\\Coroutine\\GeneratorDriver","Icecave\/Coro\/Coroutine\/GeneratorDriver.html#method___construct","(<a href=\"http:\/\/php.net\/Generator\"><abbr title=\"Generator\">Generator<\/abbr><\/a> $generator)","",2],["GeneratorDriver::generator","Icecave\\Coro\\Coroutine\\GeneratorDriver","Icecave\/Coro\/Coroutine\/GeneratorDriver.html#method_generator","()","Fetch the PHP generator that implements the co-routine",2],["GeneratorDriver::fetch","Icecave\\Coro\\Coroutine\\GeneratorDriver","Icecave\/Coro\/Coroutine\/GeneratorDriver.html#method_fetch","()","Fetch the current value from the co-routine.",2],["GeneratorDriver::resume","Icecave\\Coro\\Coroutine\\GeneratorDriver","Icecave\/Coro\/Coroutine\/GeneratorDriver.html#method_resume","(mixed $value = null)","Resume execution of this co-routine.",2],["GeneratorDriver::resumeWithException","Icecave\\Coro\\Coroutine\\GeneratorDriver","Icecave\/Coro\/Coroutine\/GeneratorDriver.html#method_resumeWithException","(<a href=\"http:\/\/php.net\/Exception\"><abbr title=\"Exception\">Exception<\/abbr><\/a> $exception)","Resume execution of this co-routine with an error.",2],["GeneratorDriver::cancel","Icecave\\Coro\\Coroutine\\GeneratorDriver","Icecave\/Coro\/Coroutine\/GeneratorDriver.html#method_cancel","()","Cancel execution of a suspended co-routine.",2],["ScopedResumable::__construct","Icecave\\Coro\\Coroutine\\ScopedResumable","Icecave\/Coro\/Coroutine\/ScopedResumable.html#method___construct","(<a href=\"Icecave\/Coro\/Coroutine\/ResumableInterface.html\"><abbr title=\"Icecave\\Coro\\Coroutine\\ResumableInterface\">ResumableInterface<\/abbr><\/a> $resumable)","",2],["ScopedResumable::__destruct","Icecave\\Coro\\Coroutine\\ScopedResumable","Icecave\/Coro\/Coroutine\/ScopedResumable.html#method___destruct","()","",2],["ScopedResumable::resume","Icecave\\Coro\\Coroutine\\ScopedResumable","Icecave\/Coro\/Coroutine\/ScopedResumable.html#method_resume","(mixed $value = null)","Resume execution of the suspended co-routine.",2],["ScopedResumable::resumeWithException","Icecave\\Coro\\Coroutine\\ScopedResumable","Icecave\/Coro\/Coroutine\/ScopedResumable.html#method_resumeWithException","(<a href=\"http:\/\/php.net\/Exception\"><abbr title=\"Exception\">Exception<\/abbr><\/a> $exception)","Resume execution of the suspended co-routine with an",2],["ScopedResumable::cancel","Icecave\\Coro\\Coroutine\\ScopedResumable","Icecave\/Coro\/Coroutine\/ScopedResumable.html#method_cancel","()","Cancel execution of a suspended co-routine.",2],["ScopedResumable::release","Icecave\\Coro\\Coroutine\\ScopedResumable","Icecave\/Coro\/Coroutine\/ScopedResumable.html#method_release","()","Release the inner resumable object.",2],["ScopedResumable::innerResumable","Icecave\\Coro\\Coroutine\\ScopedResumable","Icecave\/Coro\/Coroutine\/ScopedResumable.html#method_innerResumable","()","Fetch the inner resumable object.",2],["Engine::__construct","Icecave\\Coro\\Engine","Icecave\/Coro\/Engine.html#method___construct","(<abbr title=\"React\\EventLoop\\LoopInterface\">LoopInterface<\/abbr> $eventLoop = null, <a href=\"Icecave\/Coro\/Tree\/NodeAdaptorInterface.html\"><abbr title=\"Icecave\\Coro\\Tree\\NodeAdaptorInterface\">NodeAdaptorInterface<\/abbr><\/a> $nodeAdaptor = null, <a href=\"Icecave\/Coro\/Tree\/RootNode.html\"><abbr title=\"Icecave\\Coro\\Tree\\RootNode\">RootNode<\/abbr><\/a> $rootNode = null)","",2],["Engine::execute","Icecave\\Coro\\Engine","Icecave\/Coro\/Engine.html#method_execute","(mixed $coroutine)","Execute a co-routine.",2],["Engine::enqueue","Icecave\\Coro\\Engine","Icecave\/Coro\/Engine.html#method_enqueue","(mixed $coroutine)","Enqueue a co-routine for execution on the next tick.",2],["Engine::enqueueCallback","Icecave\\Coro\\Engine","Icecave\/Coro\/Engine.html#method_enqueueCallback","(<abbr title=\"Icecave\\Coro\\callable\">callable<\/abbr> $callback, array $arguments = array())","Enqueue a callback for execution on the next tick.",2],["Engine::eventLoop","Icecave\\Coro\\Engine","Icecave\/Coro\/Engine.html#method_eventLoop","()","Fetch the ReactPHP event loop to used by the engine",2],["Engine::rootNode","Icecave\\Coro\\Engine","Icecave\/Coro\/Engine.html#method_rootNode","()","Fetch the root node of the co-routine graph.",2],["Engine::isRunning","Icecave\\Coro\\Engine","Icecave\/Coro\/Engine.html#method_isRunning","()","Check if the engine is currently running.",2],["Engine::run","Icecave\\Coro\\Engine","Icecave\/Coro\/Engine.html#method_run","(mixed $coroutine = null)","Run the co-routine engine.",2],["Engine::stop","Icecave\\Coro\\Engine","Icecave\/Coro\/Engine.html#method_stop","()","Stop the co-routine engine.",2],["Engine::nodeAdaptor","Icecave\\Coro\\Engine","Icecave\/Coro\/Engine.html#method_nodeAdaptor","()","Fetch the adaptor used to convert values into co-routines.",2],["EngineInterface::execute","Icecave\\Coro\\EngineInterface","Icecave\/Coro\/EngineInterface.html#method_execute","(mixed $coroutine)","Execute a co-routine.",2],["EngineInterface::enqueue","Icecave\\Coro\\EngineInterface","Icecave\/Coro\/EngineInterface.html#method_enqueue","(mixed $coroutine)","Enqueue a co-routine for execution on the next tick.",2],["EngineInterface::enqueueCallback","Icecave\\Coro\\EngineInterface","Icecave\/Coro\/EngineInterface.html#method_enqueueCallback","(<abbr title=\"Icecave\\Coro\\callable\">callable<\/abbr> $callback, array $arguments = array())","Enqueue a callback for execution on the next tick.",2],["EngineInterface::eventLoop","Icecave\\Coro\\EngineInterface","Icecave\/Coro\/EngineInterface.html#method_eventLoop","()","Fetch the ReactPHP event loop to used by the engine",2],["EngineInterface::rootNode","Icecave\\Coro\\EngineInterface","Icecave\/Coro\/EngineInterface.html#method_rootNode","()","Fetch the root node of the co-routine graph.",2],["EngineInterface::isRunning","Icecave\\Coro\\EngineInterface","Icecave\/Coro\/EngineInterface.html#method_isRunning","()","Check if the engine is currently running.",2],["EngineInterface::run","Icecave\\Coro\\EngineInterface","Icecave\/Coro\/EngineInterface.html#method_run","(mixed $coroutine = null)","Run the co-routine engine.",2],["EngineInterface::stop","Icecave\\Coro\\EngineInterface","Icecave\/Coro\/EngineInterface.html#method_stop","()","Stop the co-routine engine.",2],["AbstractCallbackPrimitive::__construct","Icecave\\Coro\\Primitive\\AbstractCallbackPrimitive","Icecave\/Coro\/Primitive\/AbstractCallbackPrimitive.html#method___construct","(<abbr title=\"Icecave\\Coro\\Primitive\\callable\">callable<\/abbr> $callback = null, array $arguments = array())","",2],["AbstractCallbackPrimitive::bind","Icecave\\Coro\\Primitive\\AbstractCallbackPrimitive","Icecave\/Coro\/Primitive\/AbstractCallbackPrimitive.html#method_bind","(<abbr title=\"Icecave\\Coro\\Primitive\\callable\">callable<\/abbr> $callback, array $arguments = array())","Re-bind to a new callback and arguments.",2],["AbstractCallbackPrimitive::callback","Icecave\\Coro\\Primitive\\AbstractCallbackPrimitive","Icecave\/Coro\/Primitive\/AbstractCallbackPrimitive.html#method_callback","()","",2],["AbstractCallbackPrimitive::arguments","Icecave\\Coro\\Primitive\\AbstractCallbackPrimitive","Icecave\/Coro\/Primitive\/AbstractCallbackPrimitive.html#method_arguments","()","",2],["AbstractDetachPrimitive::__construct","Icecave\\Coro\\Primitive\\AbstractDetachPrimitive","Icecave\/Coro\/Primitive\/AbstractDetachPrimitive.html#method___construct","(mixed $value)","",2],["AbstractDetachPrimitive::execute","Icecave\\Coro\\Primitive\\AbstractDetachPrimitive","Icecave\/Coro\/Primitive\/AbstractDetachPrimitive.html#method_execute","()","Execute the action associated with this node.",2],["CallbackPrimitive::execute","Icecave\\Coro\\Primitive\\CallbackPrimitive","Icecave\/Coro\/Primitive\/CallbackPrimitive.html#method_execute","()","Execute the action associated with this node.",2],["CooperativePrimitive::execute","Icecave\\Coro\\Primitive\\CooperativePrimitive","Icecave\/Coro\/Primitive\/CooperativePrimitive.html#method_execute","()","Execute the action associated with this node.",2],["EnqueueCallbackPrimitive::execute","Icecave\\Coro\\Primitive\\EnqueueCallbackPrimitive","Icecave\/Coro\/Primitive\/EnqueueCallbackPrimitive.html#method_execute","()","Execute the action associated with this node.",2],["SendParentPrimitive::execute","Icecave\\Coro\\Primitive\\SendParentPrimitive","Icecave\/Coro\/Primitive\/SendParentPrimitive.html#method_execute","()","Execute the action associated with this node.",2],["SleepPrimitive::__construct","Icecave\\Coro\\Primitive\\SleepPrimitive","Icecave\/Coro\/Primitive\/SleepPrimitive.html#method___construct","(<abbr title=\"Icecave\\Coro\\Primitive\\float\">float<\/abbr>|integer $duration)","",2],["SleepPrimitive::execute","Icecave\\Coro\\Primitive\\SleepPrimitive","Icecave\/Coro\/Primitive\/SleepPrimitive.html#method_execute","()","Execute the action associated with this node.",2],["SuspendPrimitive::__construct","Icecave\\Coro\\Primitive\\SuspendPrimitive","Icecave\/Coro\/Primitive\/SuspendPrimitive.html#method___construct","(<abbr title=\"Icecave\\Coro\\Primitive\\callable\">callable<\/abbr> $callback)","",2],["SuspendPrimitive::execute","Icecave\\Coro\\Primitive\\SuspendPrimitive","Icecave\/Coro\/Primitive\/SuspendPrimitive.html#method_execute","()","Execute the action associated with this node.",2],["ChildNodeInterface::attach","Icecave\\Coro\\Tree\\ChildNodeInterface","Icecave\/Coro\/Tree\/ChildNodeInterface.html#method_attach","(<a href=\"Icecave\/Coro\/Tree\/ParentNodeInterface.html\"><abbr title=\"Icecave\\Coro\\Tree\\ParentNodeInterface\">ParentNodeInterface<\/abbr><\/a> $parent)","Attach this node to a parent.",2],["ChildNodeInterface::detach","Icecave\\Coro\\Tree\\ChildNodeInterface","Icecave\/Coro\/Tree\/ChildNodeInterface.html#method_detach","()","Detach this node from its parent.",2],["ChildNodeInterface::parent","Icecave\\Coro\\Tree\\ChildNodeInterface","Icecave\/Coro\/Tree\/ChildNodeInterface.html#method_parent","()","Fetch the parent of this node.",2],["ChildNodeInterface::sendValueToParent","Icecave\\Coro\\Tree\\ChildNodeInterface","Icecave\/Coro\/Tree\/ChildNodeInterface.html#method_sendValueToParent","(mixed $value = null)","Send this node's parent a value.",2],["ChildNodeInterface::sendErrorToParent","Icecave\\Coro\\Tree\\ChildNodeInterface","Icecave\/Coro\/Tree\/ChildNodeInterface.html#method_sendErrorToParent","(<a href=\"http:\/\/php.net\/Exception\"><abbr title=\"Exception\">Exception<\/abbr><\/a> $exception)","Send this node's parent an error.",2],["ChildNodeInterface::sendValueToParentAndDestroy","Icecave\\Coro\\Tree\\ChildNodeInterface","Icecave\/Coro\/Tree\/ChildNodeInterface.html#method_sendValueToParentAndDestroy","(mixed $value = null)","Send this node's parent a value.",2],["ChildNodeInterface::sendErrorToParentAndDestroy","Icecave\\Coro\\Tree\\ChildNodeInterface","Icecave\/Coro\/Tree\/ChildNodeInterface.html#method_sendErrorToParentAndDestroy","(<a href=\"http:\/\/php.net\/Exception\"><abbr title=\"Exception\">Exception<\/abbr><\/a> $exception)","Send this node's parent an error.",2],["ExecutableNodeInterface::execute","Icecave\\Coro\\Tree\\ExecutableNodeInterface","Icecave\/Coro\/Tree\/ExecutableNodeInterface.html#method_execute","()","Execute the action associated with this node.",2],["NodeAdaptor::__construct","Icecave\\Coro\\Tree\\NodeAdaptor","Icecave\/Coro\/Tree\/NodeAdaptor.html#method___construct","()","",2],["NodeAdaptor::adapt","Icecave\\Coro\\Tree\\NodeAdaptor","Icecave\/Coro\/Tree\/NodeAdaptor.html#method_adapt","(mixed $value)","Adapt a value into a node.",2],["NodeAdaptor::tryAdapt","Icecave\\Coro\\Tree\\NodeAdaptor","Icecave\/Coro\/Tree\/NodeAdaptor.html#method_tryAdapt","(mixed $value)","Attempt to adapt a value into a node.",2],["NodeAdaptorInterface::adapt","Icecave\\Coro\\Tree\\NodeAdaptorInterface","Icecave\/Coro\/Tree\/NodeAdaptorInterface.html#method_adapt","(mixed $value)","Adapt a value into a node.",2],["NodeAdaptorInterface::tryAdapt","Icecave\\Coro\\Tree\\NodeAdaptorInterface","Icecave\/Coro\/Tree\/NodeAdaptorInterface.html#method_tryAdapt","(mixed $value)","Attempt to adapt a value into a node.",2],["NodeInterface::engine","Icecave\\Coro\\Tree\\NodeInterface","Icecave\/Coro\/Tree\/NodeInterface.html#method_engine","()","Fetch the engine on which this node is executing.",2],["NodeInterface::destroy","Icecave\\Coro\\Tree\\NodeInterface","Icecave\/Coro\/Tree\/NodeInterface.html#method_destroy","()","Destroy this node.",2],["ParentNodeInterface::addChild","Icecave\\Coro\\Tree\\ParentNodeInterface","Icecave\/Coro\/Tree\/ParentNodeInterface.html#method_addChild","(<a href=\"Icecave\/Coro\/Tree\/ChildNodeInterface.html\"><abbr title=\"Icecave\\Coro\\Tree\\ChildNodeInterface\">ChildNodeInterface<\/abbr><\/a> $child)","Add a child to the list of children.",2],["ParentNodeInterface::removeChild","Icecave\\Coro\\Tree\\ParentNodeInterface","Icecave\/Coro\/Tree\/ParentNodeInterface.html#method_removeChild","(<a href=\"Icecave\/Coro\/Tree\/ChildNodeInterface.html\"><abbr title=\"Icecave\\Coro\\Tree\\ChildNodeInterface\">ChildNodeInterface<\/abbr><\/a> $child)","Remove a child from the list of children.",2],["ParentNodeInterface::children","Icecave\\Coro\\Tree\\ParentNodeInterface","Icecave\/Coro\/Tree\/ParentNodeInterface.html#method_children","()","Fetch the children attached to the root.",2],["ParentNodeInterface::sendValue","Icecave\\Coro\\Tree\\ParentNodeInterface","Icecave\/Coro\/Tree\/ParentNodeInterface.html#method_sendValue","(<a href=\"Icecave\/Coro\/Tree\/ChildNodeInterface.html\"><abbr title=\"Icecave\\Coro\\Tree\\ChildNodeInterface\">ChildNodeInterface<\/abbr><\/a> $child, mixed $value = null)","Send this node a value.",2],["ParentNodeInterface::sendError","Icecave\\Coro\\Tree\\ParentNodeInterface","Icecave\/Coro\/Tree\/ParentNodeInterface.html#method_sendError","(<a href=\"Icecave\/Coro\/Tree\/ChildNodeInterface.html\"><abbr title=\"Icecave\\Coro\\Tree\\ChildNodeInterface\">ChildNodeInterface<\/abbr><\/a> $child, <a href=\"http:\/\/php.net\/Exception\"><abbr title=\"Exception\">Exception<\/abbr><\/a> $exception)","Send this node an error.",2],["RootNode::__construct","Icecave\\Coro\\Tree\\RootNode","Icecave\/Coro\/Tree\/RootNode.html#method___construct","()","",2],["RootNode::engine","Icecave\\Coro\\Tree\\RootNode","Icecave\/Coro\/Tree\/RootNode.html#method_engine","()","Fetch the engine on which this node is executing.",2],["RootNode::setEngine","Icecave\\Coro\\Tree\\RootNode","Icecave\/Coro\/Tree\/RootNode.html#method_setEngine","(<a href=\"Icecave\/Coro\/EngineInterface.html\"><abbr title=\"Icecave\\Coro\\EngineInterface\">EngineInterface<\/abbr><\/a> $engine)","Set the engine on which this node is executing.",2],["RootNode::destroy","Icecave\\Coro\\Tree\\RootNode","Icecave\/Coro\/Tree\/RootNode.html#method_destroy","()","Destroy this node.",2],["RootNode::sendValue","Icecave\\Coro\\Tree\\RootNode","Icecave\/Coro\/Tree\/RootNode.html#method_sendValue","(<a href=\"Icecave\/Coro\/Tree\/ChildNodeInterface.html\"><abbr title=\"Icecave\\Coro\\Tree\\ChildNodeInterface\">ChildNodeInterface<\/abbr><\/a> $child, mixed $value = null)","Send this node a value.",2],["RootNode::sendError","Icecave\\Coro\\Tree\\RootNode","Icecave\/Coro\/Tree\/RootNode.html#method_sendError","(<a href=\"Icecave\/Coro\/Tree\/ChildNodeInterface.html\"><abbr title=\"Icecave\\Coro\\Tree\\ChildNodeInterface\">ChildNodeInterface<\/abbr><\/a> $child, <a href=\"http:\/\/php.net\/Exception\"><abbr title=\"Exception\">Exception<\/abbr><\/a> $exception)","Send this node an error.",2]]
    }
}
search_data['index']['longSearchIndex'] = search_data['index']['searchIndex']