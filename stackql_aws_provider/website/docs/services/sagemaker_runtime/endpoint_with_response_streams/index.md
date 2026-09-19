--- 
title: endpoint_with_response_streams
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoint_with_response_streams
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

Creates, updates, deletes, gets or lists an <code>endpoint_with_response_streams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoint_with_response_streams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker_runtime.endpoint_with_response_streams" /></td></tr>
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
    <td><a href="#invoke_endpoint_with_response_stream"><CopyableCode code="invoke_endpoint_with_response_stream" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-endpoint_name"><code>endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Content-Type"><code>Content-Type</code></a>, <a href="#parameter-X-Amzn-SageMaker-Accept"><code>X-Amzn-SageMaker-Accept</code></a>, <a href="#parameter-X-Amzn-SageMaker-Custom-Attributes"><code>X-Amzn-SageMaker-Custom-Attributes</code></a>, <a href="#parameter-X-Amzn-SageMaker-Target-Variant"><code>X-Amzn-SageMaker-Target-Variant</code></a>, <a href="#parameter-X-Amzn-SageMaker-Target-Container-Hostname"><code>X-Amzn-SageMaker-Target-Container-Hostname</code></a>, <a href="#parameter-X-Amzn-SageMaker-Inference-Id"><code>X-Amzn-SageMaker-Inference-Id</code></a>, <a href="#parameter-X-Amzn-SageMaker-Inference-Component"><code>X-Amzn-SageMaker-Inference-Component</code></a>, <a href="#parameter-X-Amzn-SageMaker-Session-Id"><code>X-Amzn-SageMaker-Session-Id</code></a>, <a href="#parameter-X-Amzn-SageMaker-Prefix-Aware-Id"><code>X-Amzn-SageMaker-Prefix-Aware-Id</code></a></td>
    <td>Invokes a model at the specified endpoint to return the inference response as a stream. The inference stream provides the response payload incrementally as a series of parts. Before you can get an inference stream, you must have access to a model that's deployed using Amazon SageMaker AI hosting services, and the container for that model must support inference streaming. For more information that can help you use this API, see the following sections in the Amazon SageMaker AI Developer Guide: For information about how to add streaming support to a model, see How Containers Serve Requests. For information about how to process the streaming response, see Invoke real-time endpoints. Before you can use this operation, your IAM permissions must allow the sagemaker:InvokeEndpoint action. For more information about Amazon SageMaker AI actions for IAM policies, see Actions, resources, and condition keys for Amazon SageMaker AI in the IAM Service Authorization Reference. Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax. Calls to InvokeEndpointWithResponseStream are authenticated by using Amazon Web Services Signature Version 4. For information, see Authenticating Requests (Amazon Web Services Signature Version 4) in the Amazon S3 API Reference.</td>
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
<tr id="parameter-Content-Type">
    <td><CopyableCode code="Content-Type" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the input data in the request body.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Accept">
    <td><CopyableCode code="X-Amzn-SageMaker-Accept" /></td>
    <td><code>string</code></td>
    <td>The desired MIME type of the inference response from the model container.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Custom-Attributes">
    <td><CopyableCode code="X-Amzn-SageMaker-Custom-Attributes" /></td>
    <td><code>string</code></td>
    <td>Provides additional information about a request for an inference submitted to a model hosted at an Amazon SageMaker AI endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to provide an ID that you can use to track a request or to provide other metadata that a service endpoint was programmed to process. The value must consist of no more than 1024 visible US-ASCII characters as specified in Section 3.3.6. Field Value Components of the Hypertext Transfer Protocol (HTTP/1.1). The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with Trace ID: in your post-processing function. This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker AI Python SDK.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Inference-Component">
    <td><CopyableCode code="X-Amzn-SageMaker-Inference-Component" /></td>
    <td><code>string</code></td>
    <td>If the endpoint hosts one or more inference components, this parameter specifies the name of inference component to invoke for a streaming response.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Inference-Id">
    <td><CopyableCode code="X-Amzn-SageMaker-Inference-Id" /></td>
    <td><code>string</code></td>
    <td>An identifier that you assign to your request.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Prefix-Aware-Id">
    <td><CopyableCode code="X-Amzn-SageMaker-Prefix-Aware-Id" /></td>
    <td><code>string</code></td>
    <td>An optional, stable identifier that serves as a routing hint for prefix-aware routing. The service routes requests with the same prefix and the same identifier to the same instance. If requests from different applications might have the same prompt prefix, set a different identifier for each application to differentiate their routing decisions. Applies only to endpoints configured with a RoutingStrategy of PREFIX_AWARE.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Session-Id">
    <td><CopyableCode code="X-Amzn-SageMaker-Session-Id" /></td>
    <td><code>string</code></td>
    <td>The ID of a stateful session to handle your request. You can't create a stateful session by using the InvokeEndpointWithResponseStream action. Instead, you can create one by using the InvokeEndpoint action. In your request, you specify NEW_SESSION for the SessionId request parameter. The response to that request provides the session ID for the NewSessionId response parameter.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Target-Container-Hostname">
    <td><CopyableCode code="X-Amzn-SageMaker-Target-Container-Hostname" /></td>
    <td><code>string</code></td>
    <td>If the endpoint hosts multiple containers and is configured to use direct invocation, this parameter specifies the host name of the container to invoke.</td>
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
    defaultValue="invoke_endpoint_with_response_stream"
    values={[
        { label: 'invoke_endpoint_with_response_stream', value: 'invoke_endpoint_with_response_stream' }
    ]}
>
<TabItem value="invoke_endpoint_with_response_stream">

Invokes a model at the specified endpoint to return the inference response as a stream. The inference stream provides the response payload incrementally as a series of parts. Before you can get an inference stream, you must have access to a model that's deployed using Amazon SageMaker AI hosting services, and the container for that model must support inference streaming. For more information that can help you use this API, see the following sections in the Amazon SageMaker AI Developer Guide: For information about how to add streaming support to a model, see How Containers Serve Requests. For information about how to process the streaming response, see Invoke real-time endpoints. Before you can use this operation, your IAM permissions must allow the sagemaker:InvokeEndpoint action. For more information about Amazon SageMaker AI actions for IAM policies, see Actions, resources, and condition keys for Amazon SageMaker AI in the IAM Service Authorization Reference. Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax. Calls to InvokeEndpointWithResponseStream are authenticated by using Amazon Web Services Signature Version 4. For information, see Authenticating Requests (Amazon Web Services Signature Version 4) in the Amazon S3 API Reference.

```sql
EXEC aws.sagemaker_runtime.endpoint_with_response_streams.invoke_endpoint_with_response_stream 
@endpoint_name='{{ endpoint_name }}' --required, 
@region='{{ region }}' --required, 
@Content-Type='{{ Content-Type }}', 
@X-Amzn-SageMaker-Accept='{{ X-Amzn-SageMaker-Accept }}', 
@X-Amzn-SageMaker-Custom-Attributes='{{ X-Amzn-SageMaker-Custom-Attributes }}', 
@X-Amzn-SageMaker-Target-Variant='{{ X-Amzn-SageMaker-Target-Variant }}', 
@X-Amzn-SageMaker-Target-Container-Hostname='{{ X-Amzn-SageMaker-Target-Container-Hostname }}', 
@X-Amzn-SageMaker-Inference-Id='{{ X-Amzn-SageMaker-Inference-Id }}', 
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
