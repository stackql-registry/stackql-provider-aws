--- 
title: resource_requests
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_requests
  - cloudcontrol
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

Creates, updates, deletes, gets or lists a <code>resource_requests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_requests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudcontrol.resource_requests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_resource_requests"
    values={[
        { label: 'list_resource_requests', value: 'list_resource_requests' }
    ]}
>
<TabItem value="list_resource_requests">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="ErrorCode" /></td>
    <td><code>string</code></td>
    <td>For requests with a status of FAILED, the associated error code. For error code definitions, see Handler error codes in the CloudFormation Command Line Interface User Guide for Extension Development. (NotUpdatable, InvalidRequest, AccessDenied, UnauthorizedTaggingOperation, InvalidCredentials, AlreadyExists, NotFound, ResourceConflict, Throttling, ServiceLimitExceeded, NotStabilized, GeneralServiceException, ServiceInternalError, ServiceTimeout, NetworkFailure, InternalFailure)</td>
</tr>
<tr>
    <td><CopyableCode code="EventTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>When the resource operation request was initiated.</td>
</tr>
<tr>
    <td><CopyableCode code="HooksRequestToken" /></td>
    <td><code>string</code></td>
    <td>The unique token representing the Hooks operation for the request. (pattern: &lt;code&gt;&#91;-A-Za-z0-9+/=&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Identifier" /></td>
    <td><code>string</code></td>
    <td>The primary identifier for the resource. In some cases, the resource identifier may be available before the resource operation has reached a status of SUCCESS. (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Operation" /></td>
    <td><code>string</code></td>
    <td>The resource operation type. (CREATE, DELETE, UPDATE)</td>
</tr>
<tr>
    <td><CopyableCode code="OperationStatus" /></td>
    <td><code>string</code></td>
    <td>The current status of the resource operation request. PENDING: The resource operation hasn't yet started. IN_PROGRESS: The resource operation is currently in progress. SUCCESS: The resource operation has successfully completed. FAILED: The resource operation has failed. Refer to the error code and status message for more information. CANCEL_IN_PROGRESS: The resource operation is in the process of being canceled. CANCEL_COMPLETE: The resource operation has been canceled. (PENDING, IN_PROGRESS, SUCCESS, FAILED, CANCEL_IN_PROGRESS, CANCEL_COMPLETE)</td>
</tr>
<tr>
    <td><CopyableCode code="RequestToken" /></td>
    <td><code>string</code></td>
    <td>The unique token representing this resource operation request. Use the RequestToken with GetResourceRequestStatus to return the current status of a resource operation request. (pattern: &lt;code&gt;&#91;-A-Za-z0-9+/=&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ResourceModel" /></td>
    <td><code>string</code></td>
    <td>A JSON string containing the resource model, consisting of each resource property and its current value. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RetryAfter" /></td>
    <td><code>string (date-time)</code></td>
    <td>When to next request the status of this resource operation request.</td>
</tr>
<tr>
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>Any message explaining the current status. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TypeName" /></td>
    <td><code>string</code></td>
    <td>The name of the resource type used in the operation. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#123;2,64&#125;::&#91;A-Za-z0-9&#93;&#123;2,64&#125;::&#91;A-Za-z0-9&#93;&#123;2,64&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

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
    <td><a href="#list_resource_requests"><CopyableCode code="list_resource_requests" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns existing resource operation requests. This includes requests of all status types. For more information, see Listing active resource operation requests in the Amazon Web Services Cloud Control API User Guide. Resource operation requests expire after 7 days.</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_resource_requests"
    values={[
        { label: 'list_resource_requests', value: 'list_resource_requests' }
    ]}
>
<TabItem value="list_resource_requests">

Returns existing resource operation requests. This includes requests of all status types. For more information, see Listing active resource operation requests in the Amazon Web Services Cloud Control API User Guide. Resource operation requests expire after 7 days.

```sql
SELECT
ErrorCode,
EventTime,
HooksRequestToken,
Identifier,
Operation,
OperationStatus,
RequestToken,
ResourceModel,
RetryAfter,
StatusMessage,
TypeName
FROM aws.cloudcontrol.resource_requests
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
