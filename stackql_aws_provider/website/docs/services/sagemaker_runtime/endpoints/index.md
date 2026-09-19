--- 
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
  - sagemaker_runtime
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker_runtime.endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#invoke_endpoint"><CopyableCode code="invoke_endpoint" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-endpoint_name"><code>endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-Accept"><code>Accept</code></a>, <a href="#parameter-X-Amzn-SageMaker-Custom-Attributes"><code>X-Amzn-SageMaker-Custom-Attributes</code></a>, <a href="#parameter-X-Amzn-SageMaker-Target-Model"><code>X-Amzn-SageMaker-Target-Model</code></a>, <a href="#parameter-X-Amzn-SageMaker-Target-Variant"><code>X-Amzn-SageMaker-Target-Variant</code></a>, <a href="#parameter-X-Amzn-SageMaker-Target-Container-Hostname"><code>X-Amzn-SageMaker-Target-Container-Hostname</code></a>, <a href="#parameter-X-Amzn-SageMaker-Inference-Id"><code>X-Amzn-SageMaker-Inference-Id</code></a>, <a href="#parameter-X-Amzn-SageMaker-Enable-Explanations"><code>X-Amzn-SageMaker-Enable-Explanations</code></a>, <a href="#parameter-X-Amzn-SageMaker-Inference-Component"><code>X-Amzn-SageMaker-Inference-Component</code></a>, <a href="#parameter-X-Amzn-SageMaker-Session-Id"><code>X-Amzn-SageMaker-Session-Id</code></a>, <a href="#parameter-X-Amzn-SageMaker-Prefix-Aware-Id"><code>X-Amzn-SageMaker-Prefix-Aware-Id</code></a></td>
    <td>After you deploy a model into production using Amazon SageMaker AI hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint. For an overview of Amazon SageMaker AI, see How It Works. Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax. Calls to InvokeEndpoint are authenticated by using Amazon Web Services Signature Version 4. For information, see Authenticating Requests (Amazon Web Services Signature Version 4) in the Amazon S3 API Reference. A customer's model containers must respond to requests within 60 seconds. The model itself can have a maximum processing time of 60 seconds before responding to invocations. If your model is going to take 50-60 seconds of processing time, the SDK socket timeout should be set to be 70 seconds. Endpoints are scoped to an individual account, and are not public. The URL does not contain the account ID, but Amazon SageMaker AI determines the account ID from the authentication token that is supplied by the caller.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-endpoint_name">
    <td><CopyableCode code="endpoint_name" /></td>
    <td><code>string</code></td>
    <td>The name of the endpoint that you specified when you created the endpoint using the CreateEndpoint API.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Accept">
    <td><CopyableCode code="Accept" /></td>
    <td><code>string</code></td>
    <td>The desired MIME type of the inference response from the model container.</td>
</tr>
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the input data in the request body.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Custom-Attributes">
    <td><CopyableCode code="X-Amzn-SageMaker-Custom-Attributes" /></td>
    <td><code>string</code></td>
    <td>Provides additional information about a request for an inference submitted to a model hosted at an Amazon SageMaker AI endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to provide an ID that you can use to track a request or to provide other metadata that a service endpoint was programmed to process. The value must consist of no more than 1024 visible US-ASCII characters as specified in Section 3.3.6. Field Value Components of the Hypertext Transfer Protocol (HTTP/1.1). The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with Trace ID: in your post-processing function. This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker AI Python SDK.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Enable-Explanations">
    <td><CopyableCode code="X-Amzn-SageMaker-Enable-Explanations" /></td>
    <td><code>string</code></td>
    <td>An optional JMESPath expression used to override the EnableExplanations parameter of the ClarifyExplainerConfig API. See the EnableExplanations section in the developer guide for more information.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Inference-Component">
    <td><CopyableCode code="X-Amzn-SageMaker-Inference-Component" /></td>
    <td><code>string</code></td>
    <td>If the endpoint hosts one or more inference components, this parameter specifies the name of inference component to invoke.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Inference-Id">
    <td><CopyableCode code="X-Amzn-SageMaker-Inference-Id" /></td>
    <td><code>string</code></td>
    <td>If you provide a value, it is added to the captured data when you enable data capture on the endpoint. For information about data capture, see Capture Data.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Prefix-Aware-Id">
    <td><CopyableCode code="X-Amzn-SageMaker-Prefix-Aware-Id" /></td>
    <td><code>string</code></td>
    <td>An optional, stable identifier that serves as a routing hint for prefix-aware routing. The service routes requests with the same prefix and the same identifier to the same instance. If requests from different applications might have the same prompt prefix, set a different identifier for each application to differentiate their routing decisions. Applies only to endpoints configured with a RoutingStrategy of PREFIX_AWARE.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Session-Id">
    <td><CopyableCode code="X-Amzn-SageMaker-Session-Id" /></td>
    <td><code>string</code></td>
    <td>Creates a stateful session or identifies an existing one. You can do one of the following: Create a stateful session by specifying the value NEW_SESSION. Send your request to an existing stateful session by specifying the ID of that session. With a stateful session, you can send multiple requests to a stateful model. When you create a session with a stateful model, the model must create the session ID and set the expiration time. The model must also provide that information in the response to your request. You can get the ID and timestamp from the NewSessionId response parameter. For any subsequent request where you specify that session ID, SageMaker AI routes the request to the same instance that supports the session.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Target-Container-Hostname">
    <td><CopyableCode code="X-Amzn-SageMaker-Target-Container-Hostname" /></td>
    <td><code>string</code></td>
    <td>If the endpoint hosts multiple containers and is configured to use direct invocation, this parameter specifies the host name of the container to invoke.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Target-Model">
    <td><CopyableCode code="X-Amzn-SageMaker-Target-Model" /></td>
    <td><code>string</code></td>
    <td>The model to request for inference when invoking a multi-model endpoint.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Target-Variant">
    <td><CopyableCode code="X-Amzn-SageMaker-Target-Variant" /></td>
    <td><code>string</code></td>
    <td>Specify the production variant to send the inference request to when invoking an endpoint that is running two or more variants. Note that this parameter overrides the default behavior for the endpoint, which is to distribute the invocation traffic based on the variant weights. For information about how to use variant targeting to perform a/b testing, see Test models in production</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="invoke_endpoint"
    values={[
        { label: 'invoke_endpoint', value: 'invoke_endpoint' }
    ]}
>
<TabItem value="invoke_endpoint">

After you deploy a model into production using Amazon SageMaker AI hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint. For an overview of Amazon SageMaker AI, see How It Works. Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax. Calls to InvokeEndpoint are authenticated by using Amazon Web Services Signature Version 4. For information, see Authenticating Requests (Amazon Web Services Signature Version 4) in the Amazon S3 API Reference. A customer's model containers must respond to requests within 60 seconds. The model itself can have a maximum processing time of 60 seconds before responding to invocations. If your model is going to take 50-60 seconds of processing time, the SDK socket timeout should be set to be 70 seconds. Endpoints are scoped to an individual account, and are not public. The URL does not contain the account ID, but Amazon SageMaker AI determines the account ID from the authentication token that is supplied by the caller.

```sql
EXEC aws.sagemaker_runtime.endpoints.invoke_endpoint 
@endpoint_name='{{ endpoint_name }}' --required, 
@region='{{ region }}' --required, 
@Content-Type='{{ Content-Type }}', 
@Accept='{{ Accept }}', 
@X-Amzn-SageMaker-Custom-Attributes='{{ X-Amzn-SageMaker-Custom-Attributes }}', 
@X-Amzn-SageMaker-Target-Model='{{ X-Amzn-SageMaker-Target-Model }}', 
@X-Amzn-SageMaker-Target-Variant='{{ X-Amzn-SageMaker-Target-Variant }}', 
@X-Amzn-SageMaker-Target-Container-Hostname='{{ X-Amzn-SageMaker-Target-Container-Hostname }}', 
@X-Amzn-SageMaker-Inference-Id='{{ X-Amzn-SageMaker-Inference-Id }}', 
@X-Amzn-SageMaker-Enable-Explanations='{{ X-Amzn-SageMaker-Enable-Explanations }}', 
@X-Amzn-SageMaker-Inference-Component='{{ X-Amzn-SageMaker-Inference-Component }}', 
@X-Amzn-SageMaker-Session-Id='{{ X-Amzn-SageMaker-Session-Id }}', 
@X-Amzn-SageMaker-Prefix-Aware-Id='{{ X-Amzn-SageMaker-Prefix-Aware-Id }}' 
@@json=
'{
"Body": "{{ Body }}"
}'
;
```
</TabItem>
</Tabs>
