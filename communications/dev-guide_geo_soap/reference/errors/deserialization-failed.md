---
layout: page
title:  Deserialization Failed
product: communications
doctype: comms_geo_soap_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>

<h3>Error Description</h3>
One or more fields within the XML request are not formatted properly.

<h3>Example</h3>
{% highlight xml %}
<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" xmlns:u="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
    <s:Header>
        <o:Security s:mustUnderstand="1" xmlns:o="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd">
            <u:Timestamp u:Id="_0">
                <u:Created>2019-02-26T21:56:20.578Z</u:Created>
                <u:Expires>2019-02-26T22:01:20.578Z</u:Expires>
            </u:Timestamp>
        </o:Security>
    </s:Header>
    <s:Body>
        <s:Fault>
            <faultcode xmlns:a="http://schemas.microsoft.com/net/2005/12/windowscommunicationfoundation/dispatcher">a:DeserializationFailed</faultcode>
            <faultstring xml:lang="en-US">The formatter threw an exception while trying to deserialize the message: There was an error while trying to deserialize parameter http://tempuri.org/:inputAddress. The InnerException message was 'There was an error deserializing the object of type EZGeoSaaS.InputAddress. The value '' cannot be parsed as the type 'Boolean'.'.  Please see InnerException for more details.</faultstring>
            <detail>
                <ExceptionDetail xmlns="http://schemas.datacontract.org/2004/07/System.ServiceModel" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
                    <HelpLink i:nil="true"/>
                    <InnerException>
                        <HelpLink i:nil="true"/>
                        <InnerException>
                            <HelpLink i:nil="true"/>
                            <InnerException>
                                <HelpLink i:nil="true"/>
                                <InnerException i:nil="true"/>
                                <Message>The string '' is not a valid Boolean value.</Message>
                                <StackTrace>   at System.Xml.XmlConvert.ToBoolean(String s)&#xD;
at System.Xml.XmlConverter.ToBoolean(String value)</StackTrace>
                                <Type>System.FormatException</Type>
                            </InnerException>
                            <Message>The value '' cannot be parsed as the type 'Boolean'.</Message>
                            <StackTrace>   at System.Xml.XmlConverter.ToBoolean(String value)&#xD;
   at System.Xml.XmlBaseReader.ReadContentAsBoolean()&#xD;
   at System.Xml.XmlDictionaryReader.ReadElementContentAsBoolean()&#xD;
   at System.Runtime.Serialization.XmlReaderDelegator.ReadElementContentAsBoolean()&#xD;
   at ReadInputAddressFromXml(XmlReaderDelegator , XmlObjectSerializerReadContext , XmlDictionaryString[] , XmlDictionaryString[] )&#xD;
   at System.Runtime.Serialization.ClassDataContract.ReadXmlValue(XmlReaderDelegator xmlReader, XmlObjectSerializerReadContext context)&#xD;
   at System.Runtime.Serialization.XmlObjectSerializerReadContext.ReadDataContractValue(DataContract dataContract, XmlReaderDelegator reader)&#xD;
   at System.Runtime.Serialization.XmlObjectSerializerReadContext.InternalDeserialize(XmlReaderDelegator reader, String name, String ns, Type declaredType, DataContract&amp; dataContract)&#xD;
   at System.Runtime.Serialization.XmlObjectSerializerReadContext.InternalDeserialize(XmlReaderDelegator xmlReader, Type declaredType, DataContract dataContract, String name, String ns)&#xD;
   at System.Runtime.Serialization.DataContractSerializer.InternalReadObject(XmlReaderDelegator xmlReader, Boolean verifyObjectName, DataContractResolver dataContractResolver)&#xD;
   at System.Runtime.Serialization.XmlObjectSerializer.ReadObjectHandleExceptions(XmlReaderDelegator reader, Boolean verifyObjectName, DataContractResolver dataContractResolver)</StackTrace>
                            <Type>System.Xml.XmlException</Type>
                        </InnerException>
                        <Message>There was an error deserializing the object of type EZGeoSaaS.InputAddress. The value '' cannot be parsed as the type 'Boolean'.</Message>
                        <StackTrace>   at System.Runtime.Serialization.XmlObjectSerializer.ReadObjectHandleExceptions(XmlReaderDelegator reader, Boolean verifyObjectName, DataContractResolver dataContractResolver)&#xD;
   at System.Runtime.Serialization.DataContractSerializer.ReadObject(XmlDictionaryReader reader, Boolean verifyObjectName)&#xD;
   at System.ServiceModel.Dispatcher.DataContractSerializerOperationFormatter.PartInfo.ReadObject(XmlDictionaryReader reader, XmlObjectSerializer serializer)&#xD;
   at System.ServiceModel.Dispatcher.DataContractSerializerOperationFormatter.DeserializeParameterPart(XmlDictionaryReader reader, PartInfo part, Boolean isRequest)</StackTrace>
                        <Type>System.Runtime.Serialization.SerializationException</Type>
                    </InnerException>
                    <Message>The formatter threw an exception while trying to deserialize the message: There was an error while trying to deserialize parameter http://tempuri.org/:inputAddress. The InnerException message was 'There was an error deserializing the object of type EZGeoSaaS.InputAddress. The value '' cannot be parsed as the type 'Boolean'.'.  Please see InnerException for more details.</Message>
                    <StackTrace>   at System.ServiceModel.Dispatcher.DataContractSerializerOperationFormatter.DeserializeParameterPart(XmlDictionaryReader reader, PartInfo part, Boolean isRequest)&#xD;
   at System.ServiceModel.Dispatcher.DataContractSerializerOperationFormatter.DeserializeParameter(XmlDictionaryReader reader, PartInfo part, Boolean isRequest)&#xD;
   at System.ServiceModel.Dispatcher.DataContractSerializerOperationFormatter.DeserializeParameters(XmlDictionaryReader reader, PartInfo[] parts, Object[] parameters, Boolean isRequest)&#xD;
   at System.ServiceModel.Dispatcher.DataContractSerializerOperationFormatter.DeserializeBody(XmlDictionaryReader reader, MessageVersion version, String action, MessageDescription messageDescription, Object[] parameters, Boolean isRequest)&#xD;
   at System.ServiceModel.Dispatcher.OperationFormatter.DeserializeBodyContents(Message message, Object[] parameters, Boolean isRequest)&#xD;
   at System.ServiceModel.Dispatcher.OperationFormatter.DeserializeRequest(Message message, Object[] parameters)&#xD;
   at System.ServiceModel.Dispatcher.DispatchOperationRuntime.DeserializeInputs(MessageRpc&amp; rpc)&#xD;
   at System.ServiceModel.Dispatcher.DispatchOperationRuntime.InvokeBegin(MessageRpc&amp; rpc)&#xD;
   at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage5(MessageRpc&amp; rpc)&#xD;
   at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage41(MessageRpc&amp; rpc)&#xD;
   at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage4(MessageRpc&amp; rpc)&#xD;
   at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage31(MessageRpc&amp; rpc)&#xD;
   at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage3(MessageRpc&amp; rpc)&#xD;
   at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage2(MessageRpc&amp; rpc)&#xD;
   at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage11(MessageRpc&amp; rpc)&#xD;
   at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage1(MessageRpc&amp; rpc)&#xD;
   at System.ServiceModel.Dispatcher.MessageRpc.Process(Boolean isOperationContextSet)</StackTrace>
                    <Type>System.ServiceModel.Dispatcher.NetDispatcherFaultException</Type>
                </ExceptionDetail>
            </detail>
        </s:Fault>
    </s:Body>
</s:Envelope>
{% endhighlight %}

<h3>How to Resolve</h3>
Check the values of all fields included in the request - some fields, such as <code>CassCertify</code> and <code>MinimumScore</code> require values if the tag is included.  Populate these fields or remove the tag completely.

Possible fields to check:
<ul class="dev-guide-list">
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/input-address/">inputAddress</a>
  <ul class="dev-guide-list">
    <li><code>CassCertify</code></li>
    <li><code>MinimumScore</code></li>
    <li><code>Offset</code></li>
    <li><code>Options</code></li>
  </ul>
  </li>
  <li><a class="dev-guide-link" href="/communications/dev-guide_geo_soap/reference/geocode-lat-long">GeocodeLatLong</a>
  <ul class="dev-guide-list">
    <li><code>latitude</code></li>
    <li><code>longitude</code></li>
  </ul>
  </li>
</ul>

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/errors/"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
</ul>