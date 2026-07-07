--- 
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
  - pinpoint
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_endpoint"
    values={[
        { label: 'get_endpoint', value: 'get_endpoint' }
    ]}
>
<TabItem value="get_endpoint">

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
    <td><CopyableCode code="Address" /></td>
    <td><code>string</code></td>
    <td>The destination address for messages or push notifications that you send to the endpoint. The address varies by channel. For example, the address for a push-notification channel is typically the token provided by a push notification service, such as an Apple Push Notification service (APNs) device token or a Firebase Cloud Messaging (FCM) registration token. The address for the SMS channel is a phone number in E.164 format, such as +12065550100. The address for the email channel is an email address.</td>
</tr>
<tr>
    <td><CopyableCode code="ApplicationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application that's associated with the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="Attributes" /></td>
    <td><code>object</code></td>
    <td>One or more custom attributes that describe the endpoint by associating a name with an array of values. For example, the value of a custom attribute named Interests might be: &#91;"Science", "Music", "Travel"&#93;. You can use these attributes as filter criteria when you create segments.</td>
</tr>
<tr>
    <td><CopyableCode code="ChannelType" /></td>
    <td><code>string</code></td>
    <td>The channel that's used when sending messages or push notifications to the endpoint. (PUSH, GCM, APNS, APNS_SANDBOX, APNS_VOIP, APNS_VOIP_SANDBOX, ADM, SMS, VOICE, EMAIL, BAIDU, CUSTOM, IN_APP)</td>
</tr>
<tr>
    <td><CopyableCode code="CohortId" /></td>
    <td><code>string</code></td>
    <td>A number from 0-99 that represents the cohort that the endpoint is assigned to. Endpoints are grouped into cohorts randomly, and each cohort contains approximately 1 percent of the endpoints for an application. Amazon Pinpoint assigns cohorts to the holdout or treatment allocations for campaigns.</td>
</tr>
<tr>
    <td><CopyableCode code="CreationDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 format, when the endpoint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Demographic" /></td>
    <td><code>object</code></td>
    <td>The demographic information for the endpoint, such as the time zone and platform.</td>
</tr>
<tr>
    <td><CopyableCode code="EffectiveDate" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 format, when the endpoint was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="EndpointStatus" /></td>
    <td><code>string</code></td>
    <td>Specifies whether messages or push notifications are sent to the endpoint. Possible values are: ACTIVE, messages are sent to the endpoint; and, INACTIVE, messages aren’t sent to the endpoint. Amazon Pinpoint automatically sets this value to ACTIVE when you create an endpoint or update an existing endpoint. Amazon Pinpoint automatically sets this value to INACTIVE if you update another endpoint that has the same address specified by the Address property.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier that you assigned to the endpoint. The identifier should be a globally unique identifier (GUID) to ensure that it doesn't conflict with other endpoint identifiers that are associated with the application.</td>
</tr>
<tr>
    <td><CopyableCode code="Location" /></td>
    <td><code>object</code></td>
    <td>The geographic information for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="Metrics" /></td>
    <td><code>object</code></td>
    <td>One or more custom metrics that your app reports to Amazon Pinpoint for the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="OptOut" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the user who's associated with the endpoint has opted out of receiving messages and push notifications from you. Possible values are: ALL, the user has opted out and doesn't want to receive any messages or push notifications; and, NONE, the user hasn't opted out and wants to receive all messages and push notifications.</td>
</tr>
<tr>
    <td><CopyableCode code="RequestId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the most recent request to update the endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="User" /></td>
    <td><code>object</code></td>
    <td>One or more custom user attributes that your app reports to Amazon Pinpoint for the user who's associated with the endpoint.</td>
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
    <td><a href="#get_endpoint"><CopyableCode code="get_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-endpoint-id"><code>endpoint-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the settings and attributes of a specific endpoint for an application.</td>
</tr>
<tr>
    <td><a href="#update_endpoint"><CopyableCode code="update_endpoint" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-endpoint-id"><code>endpoint-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointRequest"><code>EndpointRequest</code></a></td>
    <td></td>
    <td>Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.</td>
</tr>
<tr>
    <td><a href="#update_endpoints_batch"><CopyableCode code="update_endpoints_batch" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EndpointBatchRequest"><code>EndpointBatchRequest</code></a></td>
    <td></td>
    <td>Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.</td>
</tr>
<tr>
    <td><a href="#delete_endpoint"><CopyableCode code="delete_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-endpoint-id"><code>endpoint-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an endpoint from an application.</td>
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
<tr id="parameter-application-id">
    <td><CopyableCode code="application-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr id="parameter-endpoint-id">
    <td><CopyableCode code="endpoint-id" /></td>
    <td><code>string</code></td>
    <td>The case insensitive unique identifier for the endpoint. The identifier can't contain $, &#123; or &#125;.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_endpoint"
    values={[
        { label: 'get_endpoint', value: 'get_endpoint' }
    ]}
>
<TabItem value="get_endpoint">

Retrieves information about the settings and attributes of a specific endpoint for an application.

```sql
SELECT
Address,
ApplicationId,
Attributes,
ChannelType,
CohortId,
CreationDate,
Demographic,
EffectiveDate,
EndpointStatus,
Id,
Location,
Metrics,
OptOut,
RequestId,
User
FROM aws.pinpoint.endpoints
WHERE `application-id` = '{{ application-id }}' -- required
AND `endpoint-id` = '{{ endpoint-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_endpoint"
    values={[
        { label: 'update_endpoint', value: 'update_endpoint' },
        { label: 'update_endpoints_batch', value: 'update_endpoints_batch' }
    ]}
>
<TabItem value="update_endpoint">

Creates a new endpoint for an application or updates the settings and attributes of an existing endpoint for an application. You can also use this operation to define custom attributes for an endpoint. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.

```sql
UPDATE aws.pinpoint.endpoints
SET 
EndpointRequest = '{{ EndpointRequest }}'
WHERE 
`application-id` = '{{ application-id }}' --required
AND `endpoint-id` = '{{ endpoint-id }}' --required
AND region = '{{ region }}' --required
AND EndpointRequest = '{{ EndpointRequest }}' --required
RETURNING
MessageBody;
```
</TabItem>
<TabItem value="update_endpoints_batch">

Creates a new batch of endpoints for an application or updates the settings and attributes of a batch of existing endpoints for an application. You can also use this operation to define custom attributes for a batch of endpoints. If an update includes one or more values for a custom attribute, Amazon Pinpoint replaces (overwrites) any existing values with the new values.

```sql
UPDATE aws.pinpoint.endpoints
SET 
EndpointBatchRequest = '{{ EndpointBatchRequest }}'
WHERE 
`application-id` = '{{ application-id }}' --required
AND region = '{{ region }}' --required
AND EndpointBatchRequest = '{{ EndpointBatchRequest }}' --required
RETURNING
MessageBody;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_endpoint"
    values={[
        { label: 'delete_endpoint', value: 'delete_endpoint' }
    ]}
>
<TabItem value="delete_endpoint">

Deletes an endpoint from an application.

```sql
DELETE FROM aws.pinpoint.endpoints
WHERE `application-id` = '{{ application-id }}' --required
AND `endpoint-id` = '{{ endpoint-id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
