--- 
title: endpoint_asyncs
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoint_asyncs
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

Creates, updates, deletes, gets or lists an <code>endpoint_asyncs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoint_asyncs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker_runtime.endpoint_asyncs" /></td></tr>
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
    <td><a href="#invoke_endpoint_async"><CopyableCode code="invoke_endpoint_async" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-endpoint_name"><code>endpoint_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-X-Amzn-SageMaker-Content-Type"><code>X-Amzn-SageMaker-Content-Type</code></a>, <a href="#parameter-X-Amzn-SageMaker-Accept"><code>X-Amzn-SageMaker-Accept</code></a>, <a href="#parameter-X-Amzn-SageMaker-Custom-Attributes"><code>X-Amzn-SageMaker-Custom-Attributes</code></a>, <a href="#parameter-X-Amzn-SageMaker-Inference-Id"><code>X-Amzn-SageMaker-Inference-Id</code></a>, <a href="#parameter-X-Amzn-SageMaker-InputLocation"><code>X-Amzn-SageMaker-InputLocation</code></a>, <a href="#parameter-X-Amzn-SageMaker-S3OutputPathExtension"><code>X-Amzn-SageMaker-S3OutputPathExtension</code></a>, <a href="#parameter-X-Amzn-SageMaker-Filename"><code>X-Amzn-SageMaker-Filename</code></a>, <a href="#parameter-X-Amzn-SageMaker-RequestTTLSeconds"><code>X-Amzn-SageMaker-RequestTTLSeconds</code></a>, <a href="#parameter-X-Amzn-SageMaker-InvocationTimeoutSeconds"><code>X-Amzn-SageMaker-InvocationTimeoutSeconds</code></a></td>
    <td>After you deploy a model into production using Amazon SageMaker AI hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint in an asynchronous manner. Inference requests sent to this API are enqueued for asynchronous processing. The processing of the inference request may or may not complete before you receive a response from this API. The response from this API will not contain the result of the inference request but contain information about where you can locate it. Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax. Calls to InvokeEndpointAsync are authenticated by using Amazon Web Services Signature Version 4. For information, see Authenticating Requests (Amazon Web Services Signature Version 4) in the Amazon S3 API Reference.</td>
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
<tr id="parameter-X-Amzn-SageMaker-Accept">
    <td><CopyableCode code="X-Amzn-SageMaker-Accept" /></td>
    <td><code>string</code></td>
    <td>The desired MIME type of the inference response from the model container.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Content-Type">
    <td><CopyableCode code="X-Amzn-SageMaker-Content-Type" /></td>
    <td><code>string</code></td>
    <td>The MIME type of the input data in the request body.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Custom-Attributes">
    <td><CopyableCode code="X-Amzn-SageMaker-Custom-Attributes" /></td>
    <td><code>string</code></td>
    <td>Provides additional information about a request for an inference submitted to a model hosted at an Amazon SageMaker AI endpoint. The information is an opaque value that is forwarded verbatim. You could use this value, for example, to provide an ID that you can use to track a request or to provide other metadata that a service endpoint was programmed to process. The value must consist of no more than 1024 visible US-ASCII characters as specified in Section 3.3.6. Field Value Components of the Hypertext Transfer Protocol (HTTP/1.1). The code in your model is responsible for setting or updating any custom attributes in the response. If your code does not set this value in the response, an empty value is returned. For example, if a custom attribute represents the trace ID, your model can prepend the custom attribute with Trace ID: in your post-processing function. This feature is currently supported in the Amazon Web Services SDKs but not in the Amazon SageMaker AI Python SDK.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Filename">
    <td><CopyableCode code="X-Amzn-SageMaker-Filename" /></td>
    <td><code>string</code></td>
    <td>The filename for the inference response payload stored in Amazon S3. If not specified, Amazon SageMaker AI generates a filename based on the inference ID.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-Inference-Id">
    <td><CopyableCode code="X-Amzn-SageMaker-Inference-Id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the inference request. Amazon SageMaker AI will generate an identifier for you if none is specified.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-InputLocation">
    <td><CopyableCode code="X-Amzn-SageMaker-InputLocation" /></td>
    <td><code>string</code></td>
    <td>The Amazon S3 URI where the inference request payload is stored.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-InvocationTimeoutSeconds">
    <td><CopyableCode code="X-Amzn-SageMaker-InvocationTimeoutSeconds" /></td>
    <td><code>integer</code></td>
    <td>Maximum amount of time in seconds a request can be processed before it is marked as expired. The default is 15 minutes, or 900 seconds.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-RequestTTLSeconds">
    <td><CopyableCode code="X-Amzn-SageMaker-RequestTTLSeconds" /></td>
    <td><code>integer</code></td>
    <td>Maximum age in seconds a request can be in the queue before it is marked as expired. The default is 6 hours, or 21,600 seconds.</td>
</tr>
<tr id="parameter-X-Amzn-SageMaker-S3OutputPathExtension">
    <td><CopyableCode code="X-Amzn-SageMaker-S3OutputPathExtension" /></td>
    <td><code>string</code></td>
    <td>The path extension that is appended to the Amazon S3 output path where the inference response payload is stored.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="invoke_endpoint_async"
    values={[
        { label: 'invoke_endpoint_async', value: 'invoke_endpoint_async' }
    ]}
>
<TabItem value="invoke_endpoint_async">

After you deploy a model into production using Amazon SageMaker AI hosting services, your client applications use this API to get inferences from the model hosted at the specified endpoint in an asynchronous manner. Inference requests sent to this API are enqueued for asynchronous processing. The processing of the inference request may or may not complete before you receive a response from this API. The response from this API will not contain the result of the inference request but contain information about where you can locate it. Amazon SageMaker AI strips all POST headers except those supported by the API. Amazon SageMaker AI might add additional headers. You should not rely on the behavior of headers outside those enumerated in the request syntax. Calls to InvokeEndpointAsync are authenticated by using Amazon Web Services Signature Version 4. For information, see Authenticating Requests (Amazon Web Services Signature Version 4) in the Amazon S3 API Reference.

```sql
EXEC aws.sagemaker_runtime.endpoint_asyncs.invoke_endpoint_async 
@endpoint_name='{{ endpoint_name }}' --required, 
@region='{{ region }}' --required, 
@X-Amzn-SageMaker-Content-Type='{{ X-Amzn-SageMaker-Content-Type }}', 
@X-Amzn-SageMaker-Accept='{{ X-Amzn-SageMaker-Accept }}', 
@X-Amzn-SageMaker-Custom-Attributes='{{ X-Amzn-SageMaker-Custom-Attributes }}', 
@X-Amzn-SageMaker-Inference-Id='{{ X-Amzn-SageMaker-Inference-Id }}', 
@X-Amzn-SageMaker-InputLocation='{{ X-Amzn-SageMaker-InputLocation }}', 
@X-Amzn-SageMaker-S3OutputPathExtension='{{ X-Amzn-SageMaker-S3OutputPathExtension }}', 
@X-Amzn-SageMaker-Filename='{{ X-Amzn-SageMaker-Filename }}', 
@X-Amzn-SageMaker-RequestTTLSeconds='{{ X-Amzn-SageMaker-RequestTTLSeconds }}', 
@X-Amzn-SageMaker-InvocationTimeoutSeconds='{{ X-Amzn-SageMaker-InvocationTimeoutSeconds }}' 
@@json=
'{
"Body": "{{ Body }}"
}'
;
```
</TabItem>
</Tabs>
