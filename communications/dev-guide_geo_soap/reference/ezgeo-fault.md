---
layout: page
title:  Chapter 4.2.7 - Fault
product: communications
doctype: comms_geo_soap_dev_guide
chapter: reference
nav: apis
disqus: 0
---

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/get-server-time-response"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode-offline/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>

<h3>Fault</h3>

The <code>Fault</code> object contains the error description as applicable:

<div class="mobile-table">
  <table class="styled-table">
    <thead>
      <tr>
        <th>Key</th>
        <th>Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>faultcode</code></td>
        <td><code>[string]</code> Fault Code</td>
      </tr>
      <tr>
        <td><code>faultstring</code></td>
        <td><code>[string]</code> Error Message</td>
      </tr>
      <tr>
        <td><code>detail</code></td>
        <td><code>[ArrayOfstring]</code> Detailed Error Message
        <br/><br/>
        Includes the error message, stack trace, and type of error generated
    </tbody>
  </table>
</div>
<br/>

<h3>Example</h3>

{% highlight xml %}
<Fault>
  <faultcode xmlns:a="http://schemas.microsoft.com/net/2005/12/windowscommunicationfoundation/dispatcher">a:DeserializationFailed</faultcode>
  <faultstring xml:lang="en-US">The formatter threw an exception while trying to deserialize the message: There was an error while trying to deserialize parameter http://tempuri.org/:latitude. The InnerException message was 'There was an error deserializing the object of type System.Double. The value '' cannot be parsed as the type 'double'.'.  Please see InnerException for more details.</faultstring>
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
            <Message>Input string was not in a correct format.</Message>
            <StackTrace>at System.Number.ParseDouble(String value, NumberStyles options, NumberFormatInfo numfmt)
              at System.Xml.XmlConvert.ToDouble(String s)
              at System.Xml.XmlConverter.ToDouble(String value)</StackTrace>
            <Type>System.FormatException</Type>
          </InnerException>
          <Message>The value '' cannot be parsed as the type 'double'.</Message>
          <StackTrace>at System.Xml.XmlConverter.ToDouble(String value)
          at System.Xml.XmlBaseReader.ReadContentAsDouble()
          at System.Xml.XmlDictionaryReader.ReadElementContentAsDouble()
          at System.Runtime.Serialization.XmlReaderDelegator.ReadElementContentAsDouble()
          at System.Runtime.Serialization.DoubleDataContract.ReadXmlValue(XmlReaderDelegator reader, XmlObjectSerializerReadContext context)
          at System.Runtime.Serialization.DataContractSerializer.InternalReadObject(XmlReaderDelegator xmlReader, Boolean verifyObjectName, DataContractResolver dataContractResolver)
          at System.Runtime.Serialization.XmlObjectSerializer.ReadObjectHandleExceptions(XmlReaderDelegator reader, Boolean verifyObjectName, DataContractResolver dataContractResolver)</StackTrace>
          <Type>System.Xml.XmlException</Type>
        </InnerException>
        <Message>There was an error deserializing the object of type System.Double. The value '' cannot be parsed as the type 'double'.</Message>
        <StackTrace>at System.Runtime.Serialization.XmlObjectSerializer.ReadObjectHandleExceptions(XmlReaderDelegator reader, Boolean verifyObjectName, DataContractResolver dataContractResolver)
        at System.Runtime.Serialization.DataContractSerializer.ReadObject(XmlDictionaryReader reader, Boolean verifyObjectName)
        at System.ServiceModel.Dispatcher.DataContractSerializerOperationFormatter.PartInfo.ReadObject(XmlDictionaryReader reader, XmlObjectSerializer serializer)
        at System.ServiceModel.Dispatcher.DataContractSerializerOperationFormatter.DeserializeParameterPart(XmlDictionaryReader reader, PartInfo part, Boolean isRequest)</StackTrace>
        <Type>System.Runtime.Serialization.SerializationException</Type>
      </InnerException>
      <Message>The formatter threw an exception while trying to deserialize the message: There was an error while trying to deserialize parameter http://tempuri.org/:latitude. The InnerException message was 'There was an error deserializing the object of type System.Double. The value '' cannot be parsed as the type 'double'.'.  Please see InnerException for more details.</Message>
      <StackTrace><![CDATA[at System.ServiceModel.Dispatcher.DataContractSerializerOperationFormatter.DeserializeParameterPart(XmlDictionaryReader reader, PartInfo part, Boolean isRequest)
      at System.ServiceModel.Dispatcher.DataContractSerializerOperationFormatter.DeserializeParameter(XmlDictionaryReader reader, PartInfo part, Boolean isRequest)
      at System.ServiceModel.Dispatcher.DataContractSerializerOperationFormatter.DeserializeParameters(XmlDictionaryReader reader, PartInfo[] parts, Object[] parameters, Boolean isRequest)
      at System.ServiceModel.Dispatcher.DataContractSerializerOperationFormatter.DeserializeBody(XmlDictionaryReader reader, MessageVersion version, String action, MessageDescription messageDescription, Object[] parameters, Boolean isRequest)
      at System.ServiceModel.Dispatcher.OperationFormatter.DeserializeBodyContents(Message message, Object[] parameters, Boolean isRequest)
      at System.ServiceModel.Dispatcher.OperationFormatter.DeserializeRequest(Message message, Object[] parameters)
      at System.ServiceModel.Dispatcher.DispatchOperationRuntime.DeserializeInputs(MessageRpc& rpc)
      at System.ServiceModel.Dispatcher.DispatchOperationRuntime.InvokeBegin(MessageRpc& rpc)
      at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage5(MessageRpc& rpc)
      at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage41(MessageRpc& rpc)
      at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage4(MessageRpc& rpc)
      at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage31(MessageRpc& rpc)
      at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage3(MessageRpc& rpc)
      at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage2(MessageRpc& rpc)
      at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage11(MessageRpc& rpc)
      at System.ServiceModel.Dispatcher.ImmutableDispatchRuntime.ProcessMessage1(MessageRpc& rpc)
      at System.ServiceModel.Dispatcher.MessageRpc.Process(Boolean isOperationContextSet)]]></StackTrace>
      <Type>System.ServiceModel.Dispatcher.NetDispatcherFaultException</Type>
    </ExceptionDetail>
  </detail>
</Fault>
{% endhighlight %}

<ul class="pager">
  <li class="previous"><a href="/communications/dev-guide_geo_soap/reference/get-server-time-response"><i class="glyphicon glyphicon-chevron-left"></i>Previous</a></li>
  <li class="next"><a href="/communications/dev-guide_geo_soap/geocode-offline/">Next Chapter<i class="glyphicon glyphicon-chevron-right"></i></a></li>
</ul>