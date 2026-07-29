--- 
title: queues
hide_title: false
hide_table_of_contents: false
keywords:
  - queues
  - connect
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

Creates, updates, deletes, gets or lists a <code>queues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="queues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connect.queues" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_queue"
    values={[
        { label: 'describe_queue', value: 'describe_queue' },
        { label: 'list_queues', value: 'list_queues' },
        { label: 'search_queues', value: 'search_queues' }
    ]}
>
<TabItem value="describe_queue">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="hours_of_operation_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="max_contacts" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of contacts that can be in the queue before it is considered full.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="outbound_caller_config" /></td>
    <td><code>object</code></td>
    <td>The outbound caller ID name, number, and outbound whisper flow.</td>
</tr>
<tr>
    <td><CopyableCode code="outbound_email_config" /></td>
    <td><code>object</code></td>
    <td>The outbound email address ID.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the queue. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_queues">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_type" /></td>
    <td><code>string</code></td>
    <td>The type of queue. (STANDARD, AGENT)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="search_queues">

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="hours_of_operation_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the hours of operation.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this resource was last modified. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;(-&#91;a-z&#93;+)&#123;1,2&#125;(-&#91;0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when this resource was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="max_contacts" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of contacts that can be in the queue before it is considered full.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="outbound_caller_config" /></td>
    <td><code>object</code></td>
    <td>The outbound caller ID name, number, and outbound whisper flow.</td>
</tr>
<tr>
    <td><CopyableCode code="outbound_email_config" /></td>
    <td><code>object</code></td>
    <td>The outbound email address ID.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the queue.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the queue. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags used to organize, track, or control access for this resource. For example, &#123; "Tags": &#123;"key1":"value1", "key2":"value2"&#125; &#125;.</td>
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
    <td><a href="#describe_queue"><CopyableCode code="describe_queue" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified queue.</td>
</tr>
<tr>
    <td><a href="#list_queues"><CopyableCode code="list_queues" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-queueTypes"><code>queueTypes</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Provides information about the queues for the specified Amazon Connect instance. If you do not specify a QueueTypes parameter, both standard and agent queues are returned. This might cause an unexpected truncation of results if you have more than 1000 agents and you limit the number of results of the API call in code. For more information about queues, see Queues: Standard and Agent in the Amazon Connect Administrator Guide.</td>
</tr>
<tr>
    <td><a href="#search_queues"><CopyableCode code="search_queues" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Searches queues in an Amazon Connect instance, with optional filtering.</td>
</tr>
<tr>
    <td><a href="#create_queue"><CopyableCode code="create_queue" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HoursOfOperationId"><code>HoursOfOperationId</code></a></td>
    <td></td>
    <td>Creates a new queue for the specified Amazon Connect instance. If the phone number is claimed to a traffic distribution group that was created in the same Region as the Amazon Connect instance where you are calling this API, then you can use a full phone number ARN or a UUID for OutboundCallerIdNumberId. However, if the phone number is claimed to a traffic distribution group that is in one Region, and you are calling this API from an instance in another Amazon Web Services Region that is associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException. Only use the phone number ARN format that doesn't contain instance in the path, for example, arn:aws:connect:us-east-1:1234567890:phone-number/uuid. This is the same ARN format that is returned when you call the ListPhoneNumbersV2 API. If you plan to use IAM policies to allow/deny access to this API for phone number resources claimed to a traffic distribution group, see Allow or Deny queue API actions for phone numbers in a replica Region.</td>
</tr>
<tr>
    <td><a href="#update_queue_outbound_caller_config"><CopyableCode code="update_queue_outbound_caller_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OutboundCallerConfig"><code>OutboundCallerConfig</code></a></td>
    <td></td>
    <td>Updates the outbound caller ID name, number, and outbound whisper flow for a specified queue. If the phone number is claimed to a traffic distribution group that was created in the same Region as the Amazon Connect instance where you are calling this API, then you can use a full phone number ARN or a UUID for OutboundCallerIdNumberId. However, if the phone number is claimed to a traffic distribution group that is in one Region, and you are calling this API from an instance in another Amazon Web Services Region that is associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException. Only use the phone number ARN format that doesn't contain instance in the path, for example, arn:aws:connect:us-east-1:1234567890:phone-number/uuid. This is the same ARN format that is returned when you call the ListPhoneNumbersV2 API. If you plan to use IAM policies to allow/deny access to this API for phone number resources claimed to a traffic distribution group, see Allow or Deny queue API actions for phone numbers in a replica Region.</td>
</tr>
<tr>
    <td><a href="#update_queue_outbound_email_config"><CopyableCode code="update_queue_outbound_email_config" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OutboundEmailConfig"><code>OutboundEmailConfig</code></a></td>
    <td></td>
    <td>Updates the outbound email address Id for a specified queue.</td>
</tr>
<tr>
    <td><a href="#update_routing_profile_default_outbound_queue"><CopyableCode code="update_routing_profile_default_outbound_queue" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-routing_profile_id"><code>routing_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DefaultOutboundQueueId"><code>DefaultOutboundQueueId</code></a></td>
    <td></td>
    <td>Updates the default outbound queue of a routing profile.</td>
</tr>
<tr>
    <td><a href="#update_queue_name"><CopyableCode code="update_queue_name" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the name and description of a queue. At least Name or Description must be provided.</td>
</tr>
<tr>
    <td><a href="#delete_queue"><CopyableCode code="delete_queue" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a queue.</td>
</tr>
<tr>
    <td><a href="#update_queue_status"><CopyableCode code="update_queue_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the status of the queue.</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Connect instance. You can find the instance ID in the Amazon Resource Name (ARN) of the instance.</td>
</tr>
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the queue.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-routing_profile_id">
    <td><CopyableCode code="routing_profile_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the routing profile.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return per page. The default MaxResult size is 100.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</td>
</tr>
<tr id="parameter-queueTypes">
    <td><CopyableCode code="queueTypes" /></td>
    <td><code>array</code></td>
    <td>The type of queue.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_queue"
    values={[
        { label: 'describe_queue', value: 'describe_queue' },
        { label: 'list_queues', value: 'list_queues' },
        { label: 'search_queues', value: 'search_queues' }
    ]}
>
<TabItem value="describe_queue">

Describes the specified queue.

```sql
SELECT
description,
hours_of_operation_id,
last_modified_region,
last_modified_time,
max_contacts,
name,
outbound_caller_config,
outbound_email_config,
queue_arn,
queue_id,
status,
tags
FROM aws.connect.queues
WHERE instance_id = '{{ instance_id }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_queues">

Provides information about the queues for the specified Amazon Connect instance. If you do not specify a QueueTypes parameter, both standard and agent queues are returned. This might cause an unexpected truncation of results if you have more than 1000 agents and you limit the number of results of the API call in code. For more information about queues, see Queues: Standard and Agent in the Amazon Connect Administrator Guide.

```sql
SELECT
arn,
id,
last_modified_region,
last_modified_time,
name,
queue_type
FROM aws.connect.queues
WHERE instance_id = '{{ instance_id }}' -- required
AND region = '{{ region }}' -- required
AND queueTypes = '{{ queueTypes }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
<TabItem value="search_queues">

Searches queues in an Amazon Connect instance, with optional filtering.

```sql
SELECT
description,
hours_of_operation_id,
last_modified_region,
last_modified_time,
max_contacts,
name,
outbound_caller_config,
outbound_email_config,
queue_arn,
queue_id,
status,
tags
FROM aws.connect.queues
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_queue"
    values={[
        { label: 'create_queue', value: 'create_queue' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_queue">

Creates a new queue for the specified Amazon Connect instance. If the phone number is claimed to a traffic distribution group that was created in the same Region as the Amazon Connect instance where you are calling this API, then you can use a full phone number ARN or a UUID for OutboundCallerIdNumberId. However, if the phone number is claimed to a traffic distribution group that is in one Region, and you are calling this API from an instance in another Amazon Web Services Region that is associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException. Only use the phone number ARN format that doesn't contain instance in the path, for example, arn:aws:connect:us-east-1:1234567890:phone-number/uuid. This is the same ARN format that is returned when you call the ListPhoneNumbersV2 API. If you plan to use IAM policies to allow/deny access to this API for phone number resources claimed to a traffic distribution group, see Allow or Deny queue API actions for phone numbers in a replica Region.

```sql
INSERT INTO aws.connect.queues (
Name,
Description,
OutboundCallerConfig,
OutboundEmailConfig,
HoursOfOperationId,
MaxContacts,
QuickConnectIds,
EmailAddressesConfig,
Tags,
instance_id,
region
)
SELECT 
'{{ Name }}',
'{{ Description }}',
'{{ OutboundCallerConfig }}',
'{{ OutboundEmailConfig }}',
'{{ HoursOfOperationId }}' /* required */,
{{ MaxContacts }},
'{{ QuickConnectIds }}',
'{{ EmailAddressesConfig }}',
'{{ Tags }}',
'{{ instance_id }}',
'{{ region }}'
RETURNING
queue_arn,
queue_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: queues
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the queues resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the queues resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: OutboundCallerConfig
      description: |
        The outbound caller ID name, number, and outbound whisper flow.
      value:
        OutboundCallerIdName: "{{ OutboundCallerIdName }}"
        OutboundCallerIdNumberId: "{{ OutboundCallerIdNumberId }}"
        OutboundFlowId: "{{ OutboundFlowId }}"
    - name: OutboundEmailConfig
      description: |
        The outbound email address ID.
      value:
        OutboundEmailAddressId: "{{ OutboundEmailAddressId }}"
    - name: HoursOfOperationId
      value: "{{ HoursOfOperationId }}"
    - name: MaxContacts
      value: {{ MaxContacts }}
    - name: QuickConnectIds
      value:
        - "{{ QuickConnectIds }}"
    - name: EmailAddressesConfig
      value:
        - EmailAddressId: "{{ EmailAddressId }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_queue_outbound_caller_config"
    values={[
        { label: 'update_queue_outbound_caller_config', value: 'update_queue_outbound_caller_config' },
        { label: 'update_queue_outbound_email_config', value: 'update_queue_outbound_email_config' },
        { label: 'update_routing_profile_default_outbound_queue', value: 'update_routing_profile_default_outbound_queue' },
        { label: 'update_queue_name', value: 'update_queue_name' }
    ]}
>
<TabItem value="update_queue_outbound_caller_config">

Updates the outbound caller ID name, number, and outbound whisper flow for a specified queue. If the phone number is claimed to a traffic distribution group that was created in the same Region as the Amazon Connect instance where you are calling this API, then you can use a full phone number ARN or a UUID for OutboundCallerIdNumberId. However, if the phone number is claimed to a traffic distribution group that is in one Region, and you are calling this API from an instance in another Amazon Web Services Region that is associated with the traffic distribution group, you must provide a full phone number ARN. If a UUID is provided in this scenario, you will receive a ResourceNotFoundException. Only use the phone number ARN format that doesn't contain instance in the path, for example, arn:aws:connect:us-east-1:1234567890:phone-number/uuid. This is the same ARN format that is returned when you call the ListPhoneNumbersV2 API. If you plan to use IAM policies to allow/deny access to this API for phone number resources claimed to a traffic distribution group, see Allow or Deny queue API actions for phone numbers in a replica Region.

```sql
UPDATE aws.connect.queues
SET 
OutboundCallerConfig = '{{ OutboundCallerConfig }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND region = '{{ region }}' --required
AND OutboundCallerConfig = '{{ OutboundCallerConfig }}' --required;
```
</TabItem>
<TabItem value="update_queue_outbound_email_config">

Updates the outbound email address Id for a specified queue.

```sql
UPDATE aws.connect.queues
SET 
OutboundEmailConfig = '{{ OutboundEmailConfig }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND region = '{{ region }}' --required
AND OutboundEmailConfig = '{{ OutboundEmailConfig }}' --required;
```
</TabItem>
<TabItem value="update_routing_profile_default_outbound_queue">

Updates the default outbound queue of a routing profile.

```sql
UPDATE aws.connect.queues
SET 
DefaultOutboundQueueId = '{{ DefaultOutboundQueueId }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND routing_profile_id = '{{ routing_profile_id }}' --required
AND region = '{{ region }}' --required
AND DefaultOutboundQueueId = '{{ DefaultOutboundQueueId }}' --required;
```
</TabItem>
<TabItem value="update_queue_name">

Updates the name and description of a queue. At least Name or Description must be provided.

```sql
UPDATE aws.connect.queues
SET 
Name = '{{ Name }}',
Description = '{{ Description }}'
WHERE 
instance_id = '{{ instance_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_queue"
    values={[
        { label: 'delete_queue', value: 'delete_queue' }
    ]}
>
<TabItem value="delete_queue">

Deletes a queue.

```sql
DELETE FROM aws.connect.queues
WHERE instance_id = '{{ instance_id }}' --required
AND queue_id = '{{ queue_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_queue_status"
    values={[
        { label: 'update_queue_status', value: 'update_queue_status' }
    ]}
>
<TabItem value="update_queue_status">

Updates the status of the queue.

```sql
EXEC aws.connect.queues.update_queue_status 
@instance_id='{{ instance_id }}' --required, 
@queue_id='{{ queue_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"Status": "{{ Status }}"
}'
;
```
</TabItem>
</Tabs>
